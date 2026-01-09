import { Button } from "@/components/ui/button";
import { BeerBubbles } from "@/components/BeerBubbles";
import { Beer } from "lucide-react";

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <BeerBubbles />
      
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-beer-amber/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-beer-golden/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 text-center max-w-md mx-auto animate-fade-in-up">
        {/* Logo */}
        <div className="mb-8 flex flex-col items-center">
          <div className="w-24 h-24 bg-gradient-beer rounded-full flex items-center justify-center shadow-button mb-4 animate-float">
            <Beer className="w-12 h-12 text-primary-foreground" />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-beer-cream">
            Pozuzo Bier
          </h1>
          <p className="text-beer-golden/80 text-sm mt-2 tracking-wider uppercase">
            Cerveza Artesanal
          </p>
        </div>
        
        {/* Welcome message */}
        <div className="bg-beer-dark/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-beer-amber/20 shadow-card mb-8">
          <p className="text-beer-cream/90 text-lg sm:text-xl leading-relaxed">
            Tu opinión nos ayuda a seguir mejorando nuestra cerveza artesanal
            <span className="inline-block ml-2 text-2xl">🍺</span>
          </p>
        </div>
        
        {/* CTA Button */}
        <Button
          variant="craft"
          size="xl"
          onClick={onStart}
          className="w-full sm:w-auto animate-pulse-glow"
        >
          Iniciar encuesta
        </Button>
        
        <p className="text-beer-cream/40 text-sm mt-6">
          Solo te tomará 1 minuto
        </p>
      </div>
    </div>
  );
}
