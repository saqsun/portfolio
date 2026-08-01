interface SkillRateProps {
  name: string;
  rate: number;
}

export default function SkillRate({ name, rate }: SkillRateProps) {
  return (
    <div>
      <div className="float-left w-55">{name}</div>
      <div
        className="float-left flex w-20 gap-1 pt-2.75"
        aria-label={`${rate} out of 5`}
      >
        {Array.from({ length: 5 }, (_, index) => {
          const isFull = index < rate;

          return (
            <span
              className={`size-2.5 rounded-[5px] border-skill opacity-60 ${
                isFull ? "bg-skill" : "border"
              }`}
              key={`${name}-${index + 1}`}
            />
          );
        })}
      </div>
      <div className="clear-both" />
    </div>
  );
}
