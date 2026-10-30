import BlurFade from "../magicui/blur-fade";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { profile } from "../../data/Profile";

export default function HeroSection() {
  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="flex flex-col justify-between gap-2 gap-y-6 md:flex-row">
          <div className="order-2 flex min-w-0 flex-col gap-2 md:order-1">
            <BlurFade delay={0.04} yOffset={8} blur="8px">
              <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl">
                Hi, I’m Sargis
              </h1>
            </BlurFade>
            <BlurFade delay={0.04} yOffset={8} blur="8px">
              <p className="max-w-[600px] text-muted-foreground md:text-lg lg:text-xl">
                {profile.description}
              </p>
            </BlurFade>
          </div>
          <BlurFade delay={0.04} className="order-1 shrink-0 md:order-2">
            <Avatar className="size-24 rounded-full border shadow-lg ring-4 ring-muted md:size-32">
              <AvatarImage
                src="/img/avatars/sargis-sargsyan.webp"
                alt={profile.name}
              />
              <AvatarFallback>SS</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
