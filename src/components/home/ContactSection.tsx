import BlurFade from "../effects/BlurFade";
import { Mail, Send } from "lucide-react";
import { BrandIcons } from "../icons/BrandIcons";
import { FlickeringGrid } from "../effects/FlickeringGrid";

const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saqsun/",
    icon: BrandIcons.linkedin,
  },
  { label: "Email", href: "mailto:sargissargsyan@icloud.com", icon: Mail },
  { label: "Telegram", href: "https://t.me/saqsun", icon: Send },
  {
    label: "WhatsApp",
    href: "https://wa.me/37493443261",
    icon: BrandIcons.whatsapp,
  },
];

export default function ContactSection() {
  return (
    <section id="contact">
      <BlurFade delay={0.64}>
        <div className="relative rounded-xl border bg-card text-card-foreground px-5 py-10 sm:px-10">
          <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 rounded-xl border bg-primary px-4 py-1">
            <span className="text-sm font-medium text-background">Contact</span>
          </div>
          <div
            className="contact-grid pointer-events-none absolute inset-x-0 top-0 h-1/2 overflow-hidden rounded-xl"
            aria-hidden="true"
          >
            <FlickeringGrid squareSize={2} gridGap={2} />
          </div>
          <div className="relative flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl! font-bold tracking-tighter sm:text-5xl!">
              Let’s Build Together
            </h2>
            <p className="mx-auto max-w-lg text-balance text-muted-foreground">
              Have an idea worth bringing to life? Let’s build something great
              together.
            </p>
            <div className="mt-2 grid w-full max-w-xs grid-cols-2 gap-2 sm:flex sm:max-w-none sm:flex-wrap sm:justify-center">
              {contactLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("https:") ? "_blank" : undefined}
                  rel={href.startsWith("https:") ? "noreferrer" : undefined}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border bg-background px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  <Icon className="size-4 shrink-0" aria-hidden="true" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
