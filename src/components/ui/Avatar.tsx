// Adapted from magicuidesign/portfolio; see licenses/magic-ui-portfolio-LICENSE.

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
} from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "#lib/utils";

// Radix shows the fallback while the image loads or if loading fails.
type AvatarProps = ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>;
type AvatarRef = ComponentRef<typeof AvatarPrimitive.Root>;

const Avatar = forwardRef<AvatarRef, AvatarProps>(function Avatar(
  { className, ...props },
  ref,
) {
  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex size-10 shrink-0 overflow-hidden rounded-full",
        className,
      )}
      {...props}
    />
  );
});

type AvatarImageProps = ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>;
type AvatarImageRef = ComponentRef<typeof AvatarPrimitive.Image>;

const AvatarImage = forwardRef<AvatarImageRef, AvatarImageProps>(
  function AvatarImage({ className, ...props }, ref) {
    return (
      <AvatarPrimitive.Image
        ref={ref}
        className={cn("aspect-square size-full", className)}
        {...props}
      />
    );
  },
);

type AvatarFallbackProps = ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Fallback
>;
type AvatarFallbackRef = ComponentRef<typeof AvatarPrimitive.Fallback>;

const AvatarFallback = forwardRef<AvatarFallbackRef, AvatarFallbackProps>(
  function AvatarFallback({ className, ...props }, ref) {
    return (
      <AvatarPrimitive.Fallback
        ref={ref}
        className={cn(
          "flex size-full items-center justify-center rounded-full bg-muted",
          className,
        )}
        {...props}
      />
    );
  },
);

export { Avatar, AvatarImage, AvatarFallback };
