import { cn } from "@/lib/utils";

interface SatisfactionScaleProps {
  value: number | null;
  onChange: (value: number) => void;
}

const satisfactionLabels = [
  { value: 1, emoji: "😞", label: "Muy insatisfecho" },
  { value: 2, emoji: "😕", label: "Insatisfecho" },
  { value: 3, emoji: "😐", label: "Neutral" },
  { value: 4, emoji: "🙂", label: "Satisfecho" },
  { value: 5, emoji: "😍", label: "Muy satisfecho" },
];

export function SatisfactionScale({ value, onChange }: SatisfactionScaleProps) {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center gap-2 sm:gap-4">
        {satisfactionLabels.map((item) => (
          <button
            key={item.value}
            type="button"
            onClick={() => onChange(item.value)}
            className={cn(
              "flex flex-col items-center gap-2 p-3 sm:p-4 rounded-xl transition-all duration-300 flex-1",
              "hover:scale-110 hover:-translate-y-1",
              value === item.value
                ? "bg-gradient-beer shadow-button scale-105 -translate-y-1"
                : "bg-card hover:bg-muted border border-border"
            )}
          >
            <span className="text-2xl sm:text-4xl">{item.emoji}</span>
            <span
              className={cn(
                "text-xs font-medium text-center hidden sm:block",
                value === item.value ? "text-primary-foreground" : "text-muted-foreground"
              )}
            >
              {item.label}
            </span>
            <span
              className={cn(
                "text-lg font-bold",
                value === item.value ? "text-primary-foreground" : "text-foreground"
              )}
            >
              {item.value}
            </span>
          </button>
        ))}
      </div>
      <div className="flex justify-between mt-3 px-2 text-xs text-muted-foreground sm:hidden">
        <span>Muy insatisfecho</span>
        <span>Muy satisfecho</span>
      </div>
    </div>
  );
}
