import { Button } from "@/components/ui/button";
import { BeerBubbles } from "@/components/BeerBubbles";
import { Beer, RefreshCw, Heart } from "lucide-react";

interface ThankYouScreenProps {
  onRestart: () => void;
}

export function ThankYouScreen({ onRestart }: ThankYouScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <BeerBubbles />
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-48 h-48 bg-beer-amber/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-beer-golden/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 text-center max-w-md mx-auto">
        {/* Success animation */}
        <div className="mb-8 flex flex-col items-center animate-scale-in">
          <div className="w-28 h-28 bg-gradient-beer rounded-full flex items-center justify-center shadow-button mb-6 relative">
            <Beer className="w-14 h-14 text-primary-foreground" />
            <div className="absolute -top-1 -right-1 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-lg">
              <Heart className="w-4 h-4 text-accent-foreground fill-current" />
            </div>
          </div>
          
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-beer-cream mb-4">
            ¡Gracias por tu opinión!
          </h1>
          
          <p className="text-beer-cream/80 text-lg flex items-center gap-2">
            Nos ayuda a seguir creciendo
            <span className="text-2xl">🍻</span>
          </p>
        </div>
        
        {/* Card message */}
        <div 
          className="bg-beer-dark/50 backdrop-blur-sm rounded-2xl p-6 border border-beer-amber/20 shadow-card mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <p className="text-beer-cream/70 text-sm leading-relaxed">
            Tu feedback es muy valioso para nosotros. Trabajamos cada día para ofrecerte 
            la mejor cerveza artesanal de Pozuzo.
          </p>
        </div>
        
        {/* Restart Button */}
        <Button
          variant="craftOutline"
          size="lg"
          onClick={onRestart}
          className="animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <RefreshCw className="w-5 h-5 mr-2" />
          Volver a evaluar
        </Button>
        
        <p className="text-beer-cream/30 text-xs mt-8">
          Pozuzo Bier © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
