import BlurFade from "../magicui/blur-fade";
import { ArrowUpRight } from "lucide-react";
import { testimonials } from "../../data/Testimonials";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-title">
      <BlurFade delay={0.62}>
        <div className="space-y-8">
          <div className="flex flex-col items-center justify-center gap-y-4">
            <div className="flex w-full items-center">
              <div className="h-px flex-1 bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
              <div className="z-10 rounded-xl border bg-primary px-4 py-1">
                <span className="text-sm font-medium text-background">
                  Recommendations
                </span>
              </div>
              <div className="h-px flex-1 bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
            </div>
            <div className="flex flex-col items-center justify-center gap-y-3">
              <h2
                id="testimonials-title"
                className="text-center text-3xl! font-bold tracking-tighter sm:text-4xl!"
              >
                What people say
              </h2>
              <p className="text-center text-balance text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                From the people I’ve built with and teams I’ve led.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="flex h-full flex-col gap-6 rounded-xl border border-border bg-card text-card-foreground p-6 transition-all duration-200 hover:ring-2 hover:ring-muted"
              >
                <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="space-y-3">
                  <a
                    href={testimonial.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    aria-label={`${testimonial.name} on LinkedIn`}
                  >
                    <span className="relative block size-10 shrink-0 overflow-hidden rounded-full">
                      <img
                        src={testimonial.photo}
                        alt={testimonial.name}
                        width="48"
                        height="48"
                        loading="lazy"
                        className="block size-full object-cover"
                      />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold group-hover:underline">
                        {testimonial.name}
                      </p>
                      <p
                        className="truncate text-xs leading-relaxed text-muted-foreground"
                        title={testimonial.role}
                      >
                        {testimonial.role}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="shrink-0 text-muted-foreground"
                      aria-hidden="true"
                    />
                  </a>
                  <div className="border-t pt-3 text-[11px] leading-relaxed text-muted-foreground">
                    <p>Worked together at {testimonial.workedTogetherAt}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
