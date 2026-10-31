import BlurFade from "#components/effects/BlurFade";
import { Mail, Send } from "lucide-react";
import { BrandIcons } from "#components/icons/BrandIcons";

const contactLinks = [
  { label: "Email", href: "mailto:sargissargsyan@icloud.com", icon: Mail },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/saqsun/",
    icon: BrandIcons.linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/saqsun",
    icon: BrandIcons.github,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/37493443261",
    icon: BrandIcons.whatsapp,
  },
  { label: "Telegram", href: "https://t.me/saqsun", icon: Send },
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
          />
          <div className="relative flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl! font-bold tracking-tighter sm:text-5xl!">
              Let’s Build Together
            </h2>
            <p className="mx-auto max-w-lg text-balance text-muted-foreground">
              Have an idea worth bringing to life? Let’s build something great
              together.
            </p>
            <div className="mt-2 flex w-full justify-center gap-2">
              {contactLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  title={label}
                  target={href.startsWith("https:") ? "_blank" : undefined}
                  rel={href.startsWith("https:") ? "noreferrer" : undefined}
                  className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border bg-background text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <Icon className="size-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
