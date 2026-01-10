import { Button } from "@/components/ui/button";
import { BeerBubbles } from "@/components/BeerBubbles";
import pozuzoBierLogo from "@/assets/pozuzo-bier-logo.jpg";
import pozuzoValleyBg from "@/assets/pozuzo-valley-bg.jpg";

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${pozuzoValleyBg})` }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-beer-dark/60" />
      
      <BeerBubbles />
      
      <div className="relative z-10 text-center max-w-md mx-auto animate-fade-in-up">
        {/* Logo */}
        <div className="mb-8 flex flex-col items-center">
          <img 
            src={pozuzoBierLogo} 
            alt="Pozuzo Bier Logo" 
            className="w-48 h-auto mb-3 animate-float drop-shadow-2xl"
          />
          <p className="text-beer-amber font-display text-lg tracking-wide uppercase">
            Cerveza Artesanal
          </p>
          <p className="text-beer-cream/80 text-base mt-2">
            Gracias por visitar Pozuzo Bier
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
