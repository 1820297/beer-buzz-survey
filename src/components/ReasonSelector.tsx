import { cn } from "@/lib/utils";

interface ReasonSelectorProps {
  value: string[];
  onChange: (value: string[]) => void;
}

const reasons = [
  { id: "sabor", label: "Sabor y calidad de la cerveza", icon: "🍺" },
  { id: "ingredientes", label: "Ingredientes artesanales", icon: "🌿" },
  { id: "aroma", label: "Aroma y cuerpo", icon: "🍯" },
  { id: "atencion", label: "Atención del personal", icon: "👋" },
  { id: "precio", label: "Precio", icon: "💰" },
  { id: "variedad", label: "Variedad de estilos", icon: "💡" },
  { id: "experiencia", label: "Experiencia en general", icon: "❤️" },
];

export function ReasonSelector({ value, onChange }: ReasonSelectorProps) {
  const toggleReason = (reasonId: string) => {
    if (value.includes(reasonId)) {
      onChange(value.filter((id) => id !== reasonId));
    } else {
      onChange([...value, reasonId]);
    }
  };

  return (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground text-center">
        Puedes seleccionar varias opciones
      </p>
      <div className="flex flex-wrap gap-2 justify-center">
        {reasons.map((reason) => {
          const isSelected = value.includes(reason.id);
          return (
            <button
              key={reason.id}
              type="button"
              onClick={() => toggleReason(reason.id)}
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-200",
                "text-sm font-medium whitespace-nowrap",
                "border shadow-sm",
                isSelected
                  ? "bg-beer-amber/20 border-beer-amber text-beer-amber shadow-warm"
                  : "bg-card border-border text-foreground hover:bg-muted hover:border-beer-amber/40"
              )}
            >
              <span className="text-base">{reason.icon}</span>
              <span>{reason.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}