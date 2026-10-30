// Adapted from magicuidesign/portfolio; see licenses/magic-ui-portfolio-LICENSE.

import { motion, useReducedMotion } from "motion/react";
import { useMemo, type ReactNode } from "react";

const visibleState = { y: 0, opacity: 1, filter: "blur(0px)" };

interface BlurFadeProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  blur?: string;
}

export default function BlurFade({
  children,
  className,
  delay = 0,
  yOffset = 6,
  blur = "6px",
}: BlurFadeProps) {
  const reducedMotion = useReducedMotion();

  const initialState = useMemo(
    () => ({ y: -yOffset, opacity: 0, filter: `blur(${blur})` }),
    [yOffset, blur],
  );
  const transition = useMemo(
    () => ({
      delay: reducedMotion ? 0 : 0.04 + delay,
      duration: reducedMotion ? 0 : 0.4,
      ease: "easeOut" as const,
    }),
    [reducedMotion, delay],
  );

  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : initialState}
      animate={visibleState}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
