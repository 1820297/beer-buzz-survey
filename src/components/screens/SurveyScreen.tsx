import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { SatisfactionScale } from "@/components/SatisfactionScale";
import { ReasonSelector } from "@/components/ReasonSelector";
import { Beer, Mail, Phone, ArrowLeft, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SurveyScreenProps {
  onSubmit: (data: SurveyData) => void;
  onBack: () => void;
}

export interface SurveyData {
  satisfaction: number;
  reason: string;
  comment: string;
  email: string;
  whatsapp: string;
}

export function SurveyScreen({ onSubmit, onBack }: SurveyScreenProps) {
  const [satisfaction, setSatisfaction] = useState<number | null>(null);
  const [reason, setReason] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!satisfaction) {
      toast({
        title: "Por favor selecciona tu nivel de satisfacción",
        variant: "destructive",
      });
      return;
    }
    
    if (!reason) {
      toast({
        title: "Por favor selecciona un motivo",
        variant: "destructive",
      });
      return;
    }

    if (!email && !whatsapp) {
      toast({
        title: "Por favor ingresa al menos un medio de contacto",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    onSubmit({
      satisfaction,
      reason,
      comment,
      email,
      whatsapp,
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-warm py-6 px-4 sm:py-10">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={onBack}
            className="p-2 rounded-full hover:bg-muted transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-muted-foreground" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-beer rounded-full flex items-center justify-center shadow-warm">
              <Beer className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="font-display text-xl font-semibold text-foreground">
              Pozuzo Bier
            </h1>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Satisfaction Scale */}
          <section className="bg-card rounded-2xl p-5 sm:p-6 shadow-card border border-border animate-fade-in-up">
            <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4">
              ¿Qué tan satisfecho estás con tu experiencia?
            </h2>
            <SatisfactionScale value={satisfaction} onChange={setSatisfaction} />
          </section>

          {/* Reason Selector */}
          <section 
            className="bg-card rounded-2xl p-5 sm:p-6 shadow-card border border-border animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4">
              ¿Cuál es el motivo principal de tu calificación?
            </h2>
            <ReasonSelector value={reason} onChange={setReason} />
          </section>

          {/* Comment */}
          <section 
            className="bg-card rounded-2xl p-5 sm:p-6 shadow-card border border-border animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4">
              ¿Tienes algún comentario adicional?
              <span className="text-muted-foreground text-sm font-normal ml-2">(Opcional)</span>
            </h2>
            <Textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Cuéntanos más sobre tu experiencia..."
              className="min-h-[100px] resize-none bg-background border-border focus:border-beer-amber focus:ring-beer-amber/20"
            />
          </section>

          {/* Contact Info */}
          <section 
            className="bg-card rounded-2xl p-5 sm:p-6 shadow-card border border-border animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <h2 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-4">
              ¿Cómo podemos contactarte?
            </h2>
            <div className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="pl-11 h-12 bg-background border-border focus:border-beer-amber focus:ring-beer-amber/20"
                />
              </div>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="Número de WhatsApp"
                  className="pl-11 h-12 bg-background border-border focus:border-beer-amber focus:ring-beer-amber/20"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Al menos uno de los campos es requerido
              </p>
            </div>
          </section>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="craft"
            size="xl"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Enviar encuesta
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
