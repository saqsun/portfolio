// Adapted from magicuidesign/portfolio; see licenses/magic-ui-portfolio-LICENSE.

import { cn } from "../../lib/utils";
import {
  motion,
  type MotionValue,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import {
  createContext,
  useContext,
  useRef,
  useMemo,
  useCallback,
  type PointerEvent,
  type ReactNode,
} from "react";

interface DockProps {
  className?: string;
  children: ReactNode;
  /** Maximum button width and height, in pixels. */
  magnification?: number;
  /** Mouse influence radius around each button, in pixels. */
  distance?: number;
}

interface DockIconProps {
  className?: string;
  children?: ReactNode;
}

const DEFAULT_MAX_SIZE = 60;
const DEFAULT_HOVER_RADIUS = 100;
const BUTTON_SIZE = 40;
const ICON_SIZE_RATIO = 0.5;
const HOVER_SPRING = { mass: 0.1, stiffness: 150, damping: 12 };

interface DockContextValue {
  mouseX: MotionValue<number>;
  maxSize: number;
  hoverRadius: number;
}

const DockContext = createContext<DockContextValue | null>(null);

/** Shares mouse position with icons; touch input never triggers magnification. */
function Dock({
  className,
  children,
  magnification = DEFAULT_MAX_SIZE,
  distance = DEFAULT_HOVER_RADIUS,
}: DockProps) {
  // Infinity places the pointer outside every icon’s hover radius.
  const mouseX = useMotionValue(Infinity);
  const reducedMotion = useReducedMotion();

  const contextValue = useMemo(
    () => ({
      mouseX,
      maxSize: reducedMotion ? BUTTON_SIZE : magnification,
      hoverRadius: distance,
    }),
    [mouseX, reducedMotion, magnification, distance],
  );
  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (event.pointerType === "mouse") mouseX.set(event.clientX);
    },
    [mouseX],
  );
  const handlePointerLeave = useCallback(() => mouseX.set(Infinity), [mouseX]);
  return (
    <DockContext.Provider value={contextValue}>
      <motion.div
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className={cn(
          "mx-auto flex h-full w-max items-end justify-center",
          "overflow-visible rounded-full border",
          className,
        )}
      >
        {children}
      </motion.div>
    </DockContext.Provider>
  );
}

/** Visual wrapper; animation calculations live in useDockIconAnimation below. */
function DockIcon({ className, children }: DockIconProps) {
  const { buttonRef, buttonStyle, iconStyle } = useDockIconAnimation();

  return (
    <motion.div
      ref={buttonRef}
      style={buttonStyle}
      className={cn(
        "relative flex aspect-square items-center justify-center rounded-full shrink-0",
        className,
      )}
    >
      <motion.div
        style={iconStyle}
        className="flex items-center justify-center"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/**
 * Maps mouse distance to button size: base → maximum → base.
 * Motion values update the DOM directly without React renders on pointer moves.
 * Reduced motion makes the minimum and maximum equal, disabling magnification.
 */
function useDockIconAnimation() {
  const buttonRef = useRef<HTMLDivElement>(null);
  const context = useContext(DockContext);

  if (!context) {
    throw new Error("DockIcon must be used within a Dock component");
  }

  const { mouseX, maxSize, hoverRadius } = context;

  const distanceFromMouse = useTransform(mouseX, (mousePosition: number) => {
    const bounds = buttonRef.current?.getBoundingClientRect() ?? {
      x: 0,
      width: 0,
    };
    return mousePosition - bounds.x - bounds.width / 2;
  });

  // Icons reach their maximum size at the cursor and return to base size
  // outside the configured distance on either side.
  const targetContainerSize = useTransform(
    distanceFromMouse,
    [-hoverRadius, 0, hoverRadius],
    [BUTTON_SIZE, maxSize, BUTTON_SIZE],
  );
  const containerSize = useSpring(targetContainerSize, HOVER_SPRING);
  // The glyph stays half the button size, so it can share the same spring.
  const iconSize = useTransform(
    containerSize,
    (size) => size * ICON_SIZE_RATIO,
  );

  const buttonStyle = useMemo(
    () => ({ width: containerSize, height: containerSize }),
    [containerSize],
  );
  const iconStyle = useMemo(
    () => ({ width: iconSize, height: iconSize }),
    [iconSize],
  );
  return { buttonRef, buttonStyle, iconStyle };
}

export { Dock, DockIcon };
export type { DockProps, DockIconProps };
