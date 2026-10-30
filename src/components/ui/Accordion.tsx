// Adapted from magicuidesign/portfolio; see licenses/magic-ui-portfolio-LICENSE.

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentRef,
} from "react";
import { cn } from "../../lib/utils";

type ItemProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>;
type ItemRef = ComponentRef<typeof AccordionPrimitive.Item>;
type TriggerProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>;
type TriggerRef = ComponentRef<typeof AccordionPrimitive.Trigger>;
type ContentProps = ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>;
type ContentRef = ComponentRef<typeof AccordionPrimitive.Content>;

// Radix handles open state, keyboard navigation, and accessibility attributes.
export const Accordion = AccordionPrimitive.Root;

export const AccordionItem = forwardRef<ItemRef, ItemProps>(
  function AccordionItem({ className, ...props }, ref) {
    return (
      <AccordionPrimitive.Item
        ref={ref}
        className={cn("border-b", className)}
        {...props}
      />
    );
  },
);

export const AccordionTrigger = forwardRef<TriggerRef, TriggerProps>(
  function AccordionTrigger({ className, children, ...props }, ref) {
    return (
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
          ref={ref}
          className={cn(
            "flex flex-1 items-center justify-between py-4 text-left text-sm font-medium",
            "transition-all hover:underline",
            className,
          )}
          {...props}
        >
          {children}
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    );
  },
);

export const AccordionContent = forwardRef<ContentRef, ContentProps>(
  function AccordionContent({ className, children, ...props }, ref) {
    return (
      <AccordionPrimitive.Content
        ref={ref}
        className={cn(
          "overflow-hidden text-sm",
          "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        )}
        {...props}
      >
        {/* Keep content spacing inside the animated height container. */}
        <div className={cn("pb-4 pt-0", className)}>{children}</div>
      </AccordionPrimitive.Content>
    );
  },
);
