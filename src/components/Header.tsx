import { BrandIcons } from "./brand-icons";
import { Home, Sun, Moon, Monitor, Gamepad2 } from "lucide-react";
import { useCallback } from "react";
import { useTheme } from "next-themes";
import { Dock, DockIcon } from "./magicui/dock";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
const links = [
  { label: "Home", href: "/", icon: Home },
  { label: "Games", href: "/games/", icon: Gamepad2 },
  {
    label: "GitHub",
    href: "https://github.com/saqsun",
    icon: BrandIcons.github,
  },
];
export default function Header() {
  const { theme = "system", setTheme } = useTheme();
  const nextTheme =
    theme === "system" ? "light" : theme === "light" ? "dark" : "system";
  const themeLabel = `Theme: ${theme}. Switch to ${nextTheme} theme`;
  const toggleTheme = useCallback(
    () => setTheme(nextTheme),
    [nextTheme, setTheme],
  );
  return (
    <>
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-background focus:p-4"
        href="#main"
      >
        Skip to content
      </a>
      <nav
        aria-label="Primary"
        className="pointer-events-none fixed inset-x-0 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-30"
      >
        <TooltipProvider delayDuration={100}>
          <Dock
            magnification={48}
            className="pointer-events-auto h-14 items-center gap-1 bg-card/90 p-2 shadow-lg backdrop-blur-xl"
          >
            {links.map(({ label, href, icon: Icon }) => (
              <Tooltip key={label}>
                <TooltipTrigger asChild>
                  <a
                    className="inline-flex min-h-11 min-w-11 items-center justify-center"
                    href={href}
                    aria-label={label}
                    target={href.startsWith("https:") ? "_blank" : undefined}
                    rel={href.startsWith("https:") ? "noreferrer" : undefined}
                  >
                    <DockIcon className="border bg-background text-muted-foreground hover:text-foreground">
                      <Icon className="size-full" aria-hidden="true" />
                    </DockIcon>
                  </a>
                </TooltipTrigger>
                <TooltipContent sideOffset={12}>{label}</TooltipContent>
              </Tooltip>
            ))}
            <div className="mx-1 h-7 w-px bg-border" />
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className="inline-flex min-h-11 min-w-11 items-center justify-center"
                  type="button"
                  aria-label={themeLabel}
                  onClick={toggleTheme}
                >
                  <DockIcon className="border bg-background">
                    {theme === "system" ? (
                      <Monitor className="size-full" aria-hidden="true" />
                    ) : theme === "dark" ? (
                      <Moon className="size-full" aria-hidden="true" />
                    ) : (
                      <Sun className="size-full" aria-hidden="true" />
                    )}
                  </DockIcon>
                </button>
              </TooltipTrigger>
              <TooltipContent sideOffset={12}>{themeLabel}</TooltipContent>
            </Tooltip>
          </Dock>
        </TooltipProvider>
      </nav>
    </>
  );
}
