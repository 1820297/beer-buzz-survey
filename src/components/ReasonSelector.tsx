import { cn } from "@/lib/utils";

interface ReasonSelectorProps {
  value: string | null;
  onChange: (value: string) => void;
}

const reasons = [
  { id: "sabor", label: "Sabor", icon: "🍺" },
  { id: "atencion", label: "Atención", icon: "👋" },
  { id: "precio", label: "Precio", icon: "💰" },
  { id: "variedad", label: "Variedad", icon: "🎨" },
  { id: "ambiente", label: "Ambiente", icon: "🏠" },
  { id: "otro", label: "Otro", icon: "💬" },
];

export function ReasonSelector({ value, onChange }: ReasonSelectorProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {reasons.map((reason) => (
        <button
          key={reason.id}
          type="button"
          onClick={() => onChange(reason.id)}
          className={cn(
            "flex items-center gap-3 p-4 rounded-xl transition-all duration-300",
            "border-2",
            value === reason.id
              ? "border-beer-amber bg-beer-amber/10 shadow-warm"
              : "border-border bg-card hover:border-beer-amber/50 hover:bg-muted"
          )}
        >
          <span className="text-xl">{reason.icon}</span>
          <span
            className={cn(
              "font-medium",
              value === reason.id ? "text-beer-amber" : "text-foreground"
            )}
          >
            {reason.label}
          </span>
        </button>
      ))}
    </div>
  );
}
