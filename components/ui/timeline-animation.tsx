'use client';
import { motion } from 'motion/react';
import React from 'react';

type TimelineContentProps = {
  as?: React.ElementType;
  animationNum: number;
  timelineRef: React.RefObject<HTMLDivElement | null>;
  customVariants?: {
    visible: (i: number) => object;
    hidden: object;
  };
  className?: string;
  children?: React.ReactNode;
} & Record<string, unknown>;

const defaultVariants = {
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' },
  }),
  hidden: { y: 16, opacity: 0, filter: 'blur(4px)' },
};

export function TimelineContent({
  as: Tag = 'div',
  animationNum,
  timelineRef: _timelineRef,
  customVariants,
  className,
  children,
  ...props
}: TimelineContentProps) {
  const MotionTag = motion.create(Tag as React.ElementType);
  const variants = customVariants ?? defaultVariants;

  return (
    <MotionTag
      className={className}
      custom={animationNum}
      variants={variants}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {children}
    </MotionTag>
  );
}
