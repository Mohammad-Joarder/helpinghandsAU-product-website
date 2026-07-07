"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  type Transition,
  type UseInViewOptions,
  type Variants,
} from "framer-motion";
import { useRef, Children, type CSSProperties, type ReactNode } from "react";

/** Apple.com-style easing — smooth deceleration on reveal */
export const APPLE_EASE = [0.25, 0.1, 0.25, 1] as const;

const revealTransition = (duration = 0.9): Transition => ({
  duration,
  ease: APPLE_EASE,
});

type ScrollRevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
  margin?: UseInViewOptions["margin"];
  duration?: number;
};

/** Single block that fades and rises when scrolled into view (Apple section reveal). */
export function ScrollReveal({
  children,
  delay = 0,
  y = 50,
  className,
  style,
  margin = "-100px 0px -100px 0px",
  duration = 0.9,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin });
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ ...revealTransition(duration), delay }}
    >
      {children}
    </motion.div>
  );
}

type ScrollRevealGroupProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  margin?: UseInViewOptions["margin"];
  stagger?: number;
  delayChildren?: number;
};

/** Container that staggers child reveals — like Apple product tiles in a grid. */
export function ScrollRevealGroup({
  children,
  className,
  style,
  margin = "-80px 0px -80px 0px",
  stagger = 0.07,
  delayChildren = 0.05,
}: ScrollRevealGroupProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin });
  const reduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren },
    },
  };

  if (reduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
}

type ScrollRevealItemProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  y?: number;
  duration?: number;
};

/** Child of ScrollRevealGroup — each card/tile animates in sequence. */
export function ScrollRevealItem({
  children,
  className,
  style,
  y = 50,
  duration = 0.9,
}: ScrollRevealItemProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: revealTransition(duration),
    },
  };

  return (
    <motion.div className={className} style={style} variants={itemVariants}>
      {children}
    </motion.div>
  );
}

type ScrollSectionIntroProps = {
  children: ReactNode;
  align?: "center" | "left";
  margin?: UseInViewOptions["margin"];
};

/** Staggered section header — label, headline, then subcopy (Apple homepage pattern). */
export function ScrollSectionIntro({
  children,
  align = "center",
  margin = "-80px 0px -80px 0px",
}: ScrollSectionIntroProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin });
  const reduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.02 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: revealTransition(0.85),
    },
  };

  if (reduceMotion) {
    return <div style={{ textAlign: align }}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      style={{ textAlign: align }}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {Children.toArray(children).map((child, i) => (
        <motion.div key={i} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
