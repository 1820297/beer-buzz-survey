import { Button } from "@/components/ui/button";
import { BeerBubbles } from "@/components/BeerBubbles";
import { Beer, RefreshCw, Heart } from "lucide-react";
import thankYouBg from "@/assets/thank-you-bg.jpg";

interface ThankYouScreenProps {
  onRestart: () => void;
}

export function ThankYouScreen({ onRestart }: ThankYouScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-start justify-start pt-12 p-6 relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${thankYouBg})` }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-beer-dark/60" />
      
      <BeerBubbles />
      
      <div className="relative z-10 text-center max-w-md mx-auto w-full">
        {/* Success animation */}
        <div className="mb-6 flex flex-col items-center animate-scale-in">
          <div className="w-24 h-24 bg-gradient-beer rounded-full flex items-center justify-center shadow-button mb-4 relative">
            <Beer className="w-12 h-12 text-primary-foreground" />
            <div className="absolute -top-1 -right-1 w-7 h-7 bg-accent rounded-full flex items-center justify-center shadow-lg">
              <Heart className="w-4 h-4 text-accent-foreground fill-current" />
            </div>
          </div>
          
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-beer-cream mb-3">
            ¡Gracias por tu opinión!
          </h1>
          
          <p className="text-beer-cream/80 text-lg flex items-center gap-2">
            Nos ayuda a seguir creciendo
            <span className="text-2xl">🍻</span>
          </p>
        </div>
        
        {/* Card message */}
        <div 
          className="bg-beer-dark/50 backdrop-blur-sm rounded-2xl p-5 border border-beer-amber/20 shadow-card mb-6 animate-fade-in-up"
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
      </div>
    </div>
  );
}
