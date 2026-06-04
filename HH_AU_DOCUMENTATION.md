# HelpingHandsAu — Application Documentation

This document describes the **HelpingHandsAu** mobile app as implemented in this repository: architecture, features, backend integration, configuration, and operational notes gathered from the codebase and implementation history.

---

## 1. Product overview

**HelpingHandsAu** is a **React Native (Expo)** marketplace app that connects **service takers** (people posting tasks) with **service providers** (people bidding on and completing work). It targets the Australian market.

Core flows:

- **Takers** post tasks, receive bids, accept a provider, hold funds in escrow, confirm completion or dispute, and manage wallet top-ups.
- **Providers** browse open tasks, place and edit bids (and optionally withdraw pending bids), get accepted, mark work complete, receive payouts via Stripe Connect, and chat with takers.
- **Shared**: messaging (including **attachments** and optional **“shared tasks”** context in chat when enabled), disputes, ratings (when enabled), wallet, profile and legal content, and an **Action Center** (ACNS) for prioritized in-app notifications.
- **Internationalisation (i18n)** when **`FEATURE_APP_I18N_V1`**: English + Japanese UI strings, language switcher (login + profile), **`AsyncStorage`** persistence via `src/i18n/languageStorage.js`. **`i18next` / `react-i18next`** load at app entry (`App.js` imports `./src/i18n`; `loadPersistedLanguage()` on mount).
- **Push notifications** when **`FEATURE_EXPO_PUSH_V1`**: permission flow, **`users.push_token`**, **`send-push-notification`** Edge Function, optional in-app notifications feed; **`notify-providers-new-task`** can alert providers on new tasks (see migrations `*expo_push_v1*` and `*push_triggers*`).
- **Account deletion** when **`FEATURE_ACCOUNT_DELETION_V1`**: Profile flow calling **`delete-account`** Edge Function; DB migrations **`user_account_deletion_v1`**, **`account_deletion_precheck`**.
- **Stripe platform fee visibility** when **`FEATURE_STRIPE_FEE_COLLECTION_V1`**: **`collect-platform-fee`** Edge Function complements existing wallet escrow (see `featureFlags.js` comments).

User roles are stored in `public.users.role` (`taker` | `provider`) and drive which root navigator loads after sign-in.

---

## 2. Technology stack

| Layer | Technology |
|--------|------------|
| Framework | **Expo SDK 54**, **React 19**, **React Native 0.81** |
| Navigation | **@react-navigation/native** (stack + bottom tabs) |
| Backend | **Supabase** (Postgres, Auth/GoTrue, Row Level Security, Realtime, Storage, Edge Functions) |
| Payments | **Stripe** via **@stripe/stripe-react-native** (Payment Sheet, Connect onboarding) |
| Auth storage | **AsyncStorage** (not SecureStore for session — JWT payload too large for SecureStore limits) |
| UI | **react-native-paper**, **@expo/vector-icons** (Ionicons), custom theme in `src/theme/` |
| i18n | **i18next**, **react-i18next**, **expo-localization**; locale files under `src/i18n/locales/` |
| Media / UX | **expo-image**, **expo-linear-gradient**, **@react-native-community/datetimepicker** |
| Other | **expo-notifications**, **expo-device**, **expo-location**, **expo-image-picker**, **expo-linking** (deep links + `RootNavigator` config), **expo-web-browser** (Stripe Connect), **react-native-reanimated**, **react-native-url-polyfill** (imported before Supabase in `App.js`) |

---

## 3. Repository layout

```
HH_AU/
├── App.js                      # Root: providers, StripeProvider, GlobalLoadingProvider, RootNavigator
├── app.json                    # Expo config, icons, splash, iOS/Android bundle IDs, extra (Supabase, Stripe, EAS)
├── assets/images/              # logo.png, icon.png, splash.png, etc.
├── src/
│   ├── components/             # Reusable UI (ScreenHeaderBar, tab icons, rating panel, etc.)
│   ├── config/featureFlags.js  # Feature toggles (see §10)
│   ├── constants/              # e.g. ACNS idempotency key helpers
│   ├── context/                # React contexts (reset password, loading, unread, pending actions)
│   ├── hooks/                  # useAuth, usePushNotifications
│   ├── navigation/             # RootNavigator, AuthNavigator, TakerNavigator, ProviderNavigator
│   ├── screens/                # auth/, taker/, provider/, shared/
│   ├── services/               # Supabase API layers (tasks, auth, wallet, messages, …)
│   ├── theme/                  # colors, navigation theme
│   ├── i18n/                   # i18next init, locales (en/ja), language persistence
│   └── utils/                  # API errors, Stripe browser helpers, Supabase fetch instrumentation
├── scripts/                    # verify-i18n.mjs, purge-auth-users-after-db-cleanup.mjs
├── supabase/
│   ├── schema.sql              # Exported schema reference (policies, tables)
│   ├── migrations/             # Ordered SQL migrations
│   └── functions/              # Deno Edge Functions (Stripe, Connect)
└── tests/performance-tests.js  # Optional perf checks
```

---

## 4. Configuration & secrets

- **Expo `extra`** (in `app.json`) supplies:
  - `supabaseUrl`, `supabaseAnonKey`
  - `stripePublishableKey`
  - `eas.projectId` (EAS Build)
- **`src/services/supabase.js`** reads these via `expo-constants` (`Constants.expoConfig.extra`).
- **Never commit production secrets** you consider sensitive in public repos; rotate keys if exposed. The **anon** key is designed for client use with RLS — still treat repo access accordingly.

**Deep linking**

- App scheme: **`helpinghandsau`** (see `app.json` `scheme` and Stripe return URLs).
- `RootNavigator` **`linking.config`** maps paths including: **`wallet`**, **`profile`**, **`notifications`** (Actions tab when ACNS enabled), **`booking/:bookingId`** / **`dispute/:taskId`** (taker), **`p-booking/:bookingId`** / **`p-dispute/:taskId`** (provider), provider wallet **`bank`** subpath, etc. Prefixes: app scheme **`helpinghandsau://`** and Expo **`Linking.createURL('/')`**.

**Bundle identifiers**

- iOS: `com.helpinghandsau.app`
- Android: `com.helpinghandsau.app`

---

## 5. Application entry & providers

`App.js` loads **`react-native-url-polyfill`**, **`./src/i18n`** (i18next), then wraps the tree in this order (outer → inner):

1. **ResetPasswordContext** — coordinates password-reset overlay from `RootNavigator`.
2. **StripeProvider** — publishable key from `extra`; `merchantIdentifier` and `urlScheme` for Apple Pay / return URLs.
3. **SafeAreaProvider**
4. **GestureHandlerRootView**
5. **GlobalLoadingProvider** — optional debounced overlay for in-flight Supabase HTTP (see §11.2).
6. **RootNavigator** — **`NavigationContainer`** with **`expo-linking`** prefixes; inner **`PushBootstrap`** calls **`usePushNotifications`** when user is signed in.

On mount, **`loadPersistedLanguage()`** restores saved locale (when i18n resources are used).

---

## 6. Navigation architecture

### 6.1 Root (`RootNavigator.js`)

- If **`showResetPassword`** (context): full-screen **ResetPassword** stack so OTP-created sessions do not skip password update.
- Else if **`useAuth().loading`**: full-screen spinner.
- Else:
  - No `currentUser` → **Auth** stack (`AuthNavigator`).
  - `currentUser.role === 'provider'` → **ProviderApp** (`ProviderNavigator`).
  - Otherwise → **TakerApp** (`TakerNavigator`).

### 6.2 Auth stack (`AuthNavigator.js`)

Onboarding → Register → Login → Forgot password → OTP verification → Reset password (also used from root overlay).

### 6.3 Taker app (`TakerNavigator.js`)

Bottom tabs (example):

- **Home** — stack: Taker home, task detail, post/edit task, chat, disputes.
- **Messages** — conversations + chat; **UnreadMessagesProvider**; custom **MessagesTabBarIcon** with inline unread badge.
- **Actions** (if `FEATURE_ACNS_ENABLED`) — Action Center stack + **PendingActionsProvider**; **ActionCenterTabIcon** with inline pending count.
- **Wallet** — `WalletScreen` (taker flow).
- **Profile** — `ProfileScreen`.

### 6.4 Provider app (`ProviderNavigator.js`)

Tabs: Browse (open tasks), My Bids, Messages, Actions (optional), Wallet stack (includes **ProviderBank**), Profile stack.

---

## 7. Authentication & session handling

### 7.1 `useAuth` (`src/hooks/useAuth.js`)

- Subscribes to **`supabase.auth.onAuthStateChange`** with a **synchronous** callback (not `async`).
- **Critical**: GoTrue runs callbacks while holding an internal lock. **Any `await` inside the callback** (e.g. profile fetch, `getSession`) can **deadlock** the client on device builds. This app **defers** all async work with **`setTimeout(..., 0)`** after updating session state synchronously where needed.
- **`authRunIdRef`** invalidates stale deferred work after sign-out or newer events so old profile loads cannot repopulate `currentUser` or fight `loading`.
- **No parallel `checkSession()` on mount** — initial session is delivered as **`INITIAL_SESSION`** via the same listener.

### 7.2 Profile source (`authService.js`)

- **`getCurrentUserProfile(authUser)`** loads **`public.users`**; on missing row (PGRST116) falls back to **auth `user_metadata`** so navigation still has `id`, `role`, name.
- Registration upserts **`public.users`** after `signUp`.

### 7.3 Auth flows (`authService.js`)

- Email/password login, OTP registration and password reset, `updateUser` password with RN-friendly timeouts and `USER_UPDATED` handling.
- **`syncSupabaseAuthClientSession`** — use after certain events to align REST client session (with timeout race on `setSession`).

### 7.4 Storage

- Session persistence uses **AsyncStorage** because **Expo SecureStore** size limits break full Supabase session JSON.

---

## 8. Domain features (by area)

### 8.1 Tasks & bids (`taskService.js`)

- Takers: create/update tasks, list “my tasks”, soft delete (**`taker_soft_delete_task`** RPC when `FEATURE_TAKER_DELETE_TASK_V1`), accept bid, cancel accepted bid (before work progresses), approve completion, repost from finished task (`FEATURE_TASK_REPOST_FROM_EXISTING_V1`).
- Providers: list open tasks, **placeBid** / **updateBid**, **getMyBids**, mark task complete (`pending_review`).
- Bid statuses include **`pending`**, **`accepted`**, **`rejected`**, **`cancelled`** (withdrawn or taker deleted task).
- **Provider withdraw bid** (`FEATURE_PROVIDER_WITHDRAW_BID_V1`): **`withdrawPendingBidAsProvider`** → RPC **`provider_withdraw_bid`**; ACNS follow-up via **`acnsAfterProviderWithdrewBid`**.

### 8.2 Wallet & Stripe (`walletService.js`, `WalletScreen`, Edge Functions)

- Taker wallet top-up via **Stripe Payment Sheet** (payment intent from Edge Function **`create-payment-intent`**).
- Provider **Stripe Connect**: account creation, onboarding (often **WebBrowser**), sync status, payouts via **`create-payout`**, webhooks **`stripe-webhook`**, **`sync-connect-status`**, **`stripe-connect-redirect`**.
- When **`FEATURE_STRIPE_FEE_COLLECTION_V1`**: optional **Stripe-side fee visibility** via **`collect-platform-fee`** (platform fee transfers on completion / dispute settlement; wallet escrow behaviour unchanged — see `featureFlags.js`).

### 8.3 Messaging (`messageService.js`, `ChatScreen`, `ConversationsScreen`)

- Conversations per task + taker + provider; realtime subscriptions; read receipts / unread counts (see migrations for RPCs).
- **Attachments**: storage-backed chat files (migrations **`chat_attachments`**, **`messages_attachment_storage_path`**, storage policies).
- When **`FEATURE_CHAT_SHARED_TASKS_V1`**: chat header shows **other tasks** linking this taker + provider (non-cancelled bids), without changing core chat delivery.
- **Push** (when **`FEATURE_EXPO_PUSH_V1`**): **`usePushNotifications`** (from **`RootNavigator`**) registers device token into **`users.push_token`**; server sends via **`send-push-notification`** (see §8.8).

### 8.4 Disputes (`disputeService.js`, `RaiseDisputeScreen`, `DisputeDetailScreen`)

- Taker can raise disputes; resolution proposals; ACNS hooks for provider notifications.

### 8.5 Ratings (`ratingService.js`, `TaskRatingPanel`, profile reviews)

- Gated by **`RATING_FEATURE_V1_ENABLED`**; server RPCs from ratings migration.

### 8.6 ACNS — Action Center (`acnsService.js`, `acnsEmitter.js`, `ActionCenterScreen`)

- When **`FEATURE_ACNS_ENABLED`**: **`user_action_cards`** rows; upsert via RPCs like **`acns_upsert_action_card_for_recipient`** with **verification modes** (e.g. `new_bid`, `taker_accepted`, `task_deleted_by_taker`, **`provider_withdrew_bid`**).
- **PendingActionsContext** subscribes to DB changes and refreshes counts for the Actions tab badge.

### 8.7 Internationalisation (`src/i18n/`)

- **`FEATURE_APP_I18N_V1`**: exposes **English + Japanese** in the UI (login + profile switcher when enabled); strings live under **`src/i18n/locales/{en,ja}/`** (including profile legal/FAQ modules). **`npm run i18n:verify`** checks key parity via **`scripts/verify-i18n.mjs`**.

### 8.8 Push notifications (`usePushNotifications`, migrations, Edge Functions)

- **`FEATURE_EXPO_PUSH_V1`**: end-to-end **Expo push** — permissions, token persistence, **`send-push-notification`**, related DB objects in **`20260418120000_expo_push_v1.sql`**; optional **`20260418120500_push_triggers_provider_verified.sql`** for provider-facing triggers. **`notify-providers-new-task`** can notify providers when new tasks appear. **Android release** builds typically need **`google-services.json`** (FCM); real devices / TestFlight for delivery validation.

### 8.9 Account deletion (`ProfileScreen`, Edge Function)

- **`FEATURE_ACCOUNT_DELETION_V1`**: user-initiated deletion path (Apple guideline alignment) calling **`delete-account`**; depends on migrations **`20260506120000_user_account_deletion_v1.sql`**, **`20260507120000_account_deletion_precheck.sql`** and a deployed **`delete-account`** function.

---

## 9. Supabase backend

### 9.1 Core tables (see `supabase/schema.sql`)

Includes (non-exhaustive): **`users`**, **`tasks`**, **`bids`**, **`categories`**, **`conversations`**, **`messages`**, **`wallets`**, **`transactions`**, **`disputes`**, **`provider_profiles`**, **`admin_wallet`**, **`app_settings`**, **`user_action_cards`** (ACNS), etc.

Task statuses evolve through flows such as **`open`**, **`bidding`**, **`bid_accepted`**, **`pending_review`**, **`completed`**, **`disputed`**, **`closed`**, **`deleted_by_taker`**, etc. (exact set in migrations + app).

### 9.2 Migrations (`supabase/migrations/`)

Notable files:

| Migration | Purpose |
|-----------|---------|
| `20260328120000_admin_wallet_escrow_align.sql` | Wallet / admin escrow alignment |
| `20260328140000_grant_wallet_rpc_execute.sql` | RPC grants |
| `20260328150000_tasks_provider_update_policy.sql` | RLS for providers updating accepted tasks |
| `20260328160000_users_chat_partner_select.sql` | Chat-related user select |
| `20260328170000_messages_body_column.sql` | Messages schema |
| `20260329120000_chat_attachments.sql` | Attachments |
| `20260329140000_chat_attachments_storage_select.sql` | Storage policies |
| `20260329180000_messages_attachment_storage_path.sql` | Attachment paths |
| `20260330120000_task_ratings_feature_v1.sql` | Ratings |
| `20260330180000_acns_v1.sql` | Action cards system |
| `20260331230000_messages_read_rpcs.sql` | Read/unread RPCs |
| `20260401120000_taker_soft_delete_task.sql` | **`taker_soft_delete_task`** + ACNS verification extensions |
| `20260402100000_tasks_status_include_deleted_by_taker.sql` | Task status enum / constraints |
| `20260402140000_provider_withdraw_bid_v1.sql` | **`provider_withdraw_bid`** + ACNS mode **`provider_withdrew_bid`** |
| `20260410120000_transactions_select_task_parties.sql` | **`transactions`** RLS / select for task parties |
| `20260411130000_transactions_insert_task_parties.sql` | **`transactions`** insert policies for parties |
| `20260411140000_transactions_type_check_task_settlement.sql` | **`transactions`** type / task settlement checks |
| `20260418120000_expo_push_v1.sql` | Push tokens, notification feed tables/RPCs for Expo push |
| `20260418120500_push_triggers_provider_verified.sql` | Optional DB triggers (e.g. provider-verified paths) for push |
| `20260506120000_user_account_deletion_v1.sql` | Account deletion data model / RPCs |
| `20260507120000_account_deletion_precheck.sql` | Deletion pre-check rules |

Apply with Supabase CLI or dashboard in timestamp order.

### 9.3 Edge Functions (`supabase/functions/`)

| Function | Role |
|----------|------|
| **`create-payment-intent`** | Taker top-up PaymentIntent for Payment Sheet |
| **`create-connect-account`** | Stripe Connect Express (or equivalent) onboarding start |
| **`create-payout`** | Provider payout initiation |
| **`stripe-webhook`** | Stripe event ingestion (payments, Connect, fees) |
| **`sync-connect-status`** | Reconcile Connect account state |
| **`stripe-connect-redirect`** | Return URL / deep-link handoff after Connect onboarding |
| **`collect-platform-fee`** | Optional platform-fee transfer visibility (`FEATURE_STRIPE_FEE_COLLECTION_V1`) |
| **`send-push-notification`** | Send Expo push to stored tokens (`FEATURE_EXPO_PUSH_V1`) |
| **`notify-providers-new-task`** | Provider alerts on new task listings |
| **`delete-account`** | Orchestrate user data deletion (`FEATURE_ACCOUNT_DELETION_V1`) |

### 9.4 RLS

Policies live in **`schema.sql`** and migrations. The app assumes **authenticated** users access only their rows according to role (taker vs provider vs participant).

---

## 10. Feature flags (`src/config/featureFlags.js`)

| Flag | Purpose |
|------|---------|
| `RATING_FEATURE_V1_ENABLED` | Ratings UI and RPC usage |
| `FEATURE_ACNS_ENABLED` | Action Center tab, cards, related RPCs |
| `FEATURE_UX_IMPROVEMENT_V1` | Profile/review UX tweaks; legacy `AppHeaderBrand` wrapper |
| `FEATURE_TAKER_DELETE_TASK_V1` | Taker soft-delete task + notifications |
| `FEATURE_GLOBAL_SUPABASE_LOADING_OVERLAY` | Wrap Supabase client `fetch` for in-flight counter / overlay |
| `FEATURE_TASK_REPOST_FROM_EXISTING_V1` | Repost task from completed/closed/deleted |
| `FEATURE_PROVIDER_WITHDRAW_BID_V1` | Provider withdraw pending bid + ACNS |
| `FEATURE_APP_I18N_V1` | English + Japanese UI, language switcher, persisted locale |
| `FEATURE_CHAT_SHARED_TASKS_V1` | Chat header “shared tasks” strip (taker-owned tasks + this provider’s bids) |
| `FEATURE_ACCOUNT_DELETION_V1` | Profile → delete account (requires **`delete-account`** + DB migrations) |
| `FEATURE_EXPO_PUSH_V1` | Expo push registration, token storage, **`send-push-notification`** / related UX |
| `FEATURE_STRIPE_FEE_COLLECTION_V1` | Optional **`collect-platform-fee`** visibility for platform fees |

Set to **`false`** for instant rollback of client behavior; **database RPCs** may still exist until migrations are reverted.

---

## 11. UI conventions

### 11.1 Headers & logo

- **`ScreenHeaderBar.js`**: shared header shell + **`HeaderLogoChip`** — **circular** badge with **`assets/images/logo.png`** for main screens and many stacks.
- **Login / register / OTP / reset / in-app `SplashScreen`**: same **`logo.png`** with different layout sizes.
- **Native splash** (`app.json`): **`assets/images/splash.png`**.
- **Store / home icon**: **`assets/images/icon.png`** (iOS icon + Android adaptive foreground).

### 11.2 Global loading overlay (`GlobalLoadingContext.js`)

- When **`FEATURE_GLOBAL_SUPABASE_LOADING_OVERLAY`** is on, Supabase HTTP increments an in-flight counter.
- Overlay is **non-blocking** (absolute layer, **`pointerEvents="none"`**) so a **`Modal`** does not freeze the app.
- Optional **stale timeout** hides the spinner if requests never settle (dev warning).

### 11.3 Tab bar

- **Messages**: Ionicons **`chatbubbles`** / **`chatbubbles-outline`** + custom numeric pill (no default React Navigation badge overlap).
- **Actions**: **`file-tray-stacked`** / **`file-tray-stacked-outline`** + pill for pending count.

---

## 12. Theming

- **`src/theme/colors.js`**: brand teal palette, ink neutrals, semantic success/warning/error, chat colors.
- **`src/theme/navigationTheme.js`**: React Navigation theme alignment.

---

## 13. Build & release

- **EAS**: `extra.eas.projectId` in `app.json` links the Expo project.
- **iOS**: TestFlight / App Store use configured bundle ID and icons from **`icon.png`** / asset catalog generated by Expo prebuild.
- **Android**: Play Store uses **`adaptiveIcon.foregroundImage`** and package name.

Run locally: `npm start` / `expo start`, platform-specific scripts in `package.json` (`android`, `ios`, `web`). Maintenance: **`npm run i18n:verify`** (string key parity); **`npm run purge:auth`** (auth user purge after DB cleanup — see `scripts/purge-auth-users-after-db-cleanup.mjs`).

---

## 14. Known pitfalls & fixes (historical context)

1. **Auth freeze after login / tab switches** — caused by **`async` `onAuthStateChange`** + awaited Supabase calls under GoTrue lock; fixed by **deferred async** + **run id** invalidation in **`useAuth`**.
2. **`Invalid Refresh Token`** — often stale storage; client clears session; ensure no deadlock masked the recovery path.
3. **Global overlay “not responding”** — **`Modal`** blocked touches; replaced with **pass-through overlay**.
4. **`AppHeaderBrand` ReferenceError** — leftover JSX after header refactor; use **`ScreenHeaderShell` / `HeaderLogoChip`** on provider home.

---

## 15. Testing & quality

- **`tests/performance-tests.js`** — optional performance checks.
- Manual QA: cold start, login, tab switches, bid place/withdraw, taker delete task, wallet top-up, Connect onboarding, chat realtime + attachments, ACNS cards, deep links (`wallet`, `notifications`, `booking` / `dispute` paths), optional **push** (device build), **account deletion** (staging), **locale switch** (when i18n flag on).

---

## 16. Support & static content

- **Profile** screen loads legal/FAQ-style content from **`app_settings`** (Supabase) and locale modules under **`src/i18n/locales/*/profile/`** (terms, FAQ, legal, etc.) — see `ProfileScreen.js`.

---

## 17. Document maintenance

- Update this file when adding **major features**, **new migrations**, **new feature flags**, or **breaking navigation/auth** changes.
- **Version** in `app.json` (`expo.version`, iOS `buildNumber`, Android `versionCode`) should be bumped per release policy.

---

*Generated from the HelpingHandsAu codebase and implementation context. For line-level behavior, prefer reading the referenced source files.*
