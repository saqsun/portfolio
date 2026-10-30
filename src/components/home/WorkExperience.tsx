// Adapted from magicuidesign/portfolio; see licenses/magic-ui-portfolio-LICENSE.
import { useCallback, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/Accordion";
import { workAchievements } from "../../data/home/work-achievements";
import { profile } from "../../data/home/profile";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";

function LogoImage({ src }: { src: string }) {
  const [imageError, setImageError] = useState(false);
  const handleError = useCallback(() => setImageError(true), []);

  return (
    <div className="size-10 shrink-0 overflow-hidden rounded-full border border-border bg-white flex items-center justify-center">
      {!imageError && (
        <img
          src={src}
          alt=""
          className="size-full object-contain"
          onError={handleError}
          loading="lazy"
          width="40"
          height="40"
        />
      )}
    </div>
  );
}

export default function WorkExperience() {
  return (
    <Accordion type="single" collapsible className="w-full grid gap-6">
      {profile.work.map((work) => (
        <AccordionItem
          key={work.company}
          value={work.company}
          className="w-full border-b-0 grid gap-2"
        >
          <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
            <div className="grid w-full grid-cols-[minmax(0,1fr)] items-center gap-x-3 gap-y-1 text-left sm:grid-cols-[minmax(0,1fr)_auto]">
              <div className="flex items-center gap-x-3 flex-1 min-w-0">
                <LogoImage src={work.logo} />
                <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                  <div className="font-semibold leading-snug flex items-center gap-2">
                    {work.company}
                    <span className="relative inline-flex shrink-0 items-center w-3.5 h-3.5">
                      <ChevronRight
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out",
                          "translate-x-0 opacity-100",
                          "group-hover:translate-x-1 group-hover:opacity-100",
                          "group-data-[state=open]:opacity-0 group-data-[state=open]:translate-x-0",
                        )}
                      />
                      <ChevronDown
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
                          "opacity-0 rotate-0",
                          "group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180",
                        )}
                      />
                    </span>
                  </div>
                  <div className="font-sans text-sm text-muted-foreground">
                    {work.title}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-left pl-13 sm:pl-0 sm:text-right flex-none">
                <span>{work.dates}</span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-0 ml-13 text-xs sm:text-sm leading-relaxed text-muted-foreground">
            <p>{work.description}</p>
            <ul className="mt-3 list-disc space-y-2 pl-4">
              {workAchievements[work.company]?.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
