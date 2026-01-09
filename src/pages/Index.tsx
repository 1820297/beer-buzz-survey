import { useState } from "react";
import { WelcomeScreen } from "@/components/screens/WelcomeScreen";
import { SurveyScreen, SurveyData } from "@/components/screens/SurveyScreen";
import { ThankYouScreen } from "@/components/screens/ThankYouScreen";
import { useToast } from "@/hooks/use-toast";

type Screen = "welcome" | "survey" | "thankyou";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("welcome");
  const { toast } = useToast();

  const handleStartSurvey = () => {
    setCurrentScreen("survey");
  };

  const handleSubmitSurvey = async (data: SurveyData) => {
    try {
      // Prepare data for Google Sheets
      const submissionData = {
        timestamp: new Date().toISOString(),
        empresa: "Pozuzo Bier",
        satisfaccion: data.satisfaction,
        motivo: data.reason,
        comentario: data.comment || "",
        contacto: data.email || data.whatsapp,
        canal: data.email ? "correo" : "WhatsApp",
      };

      console.log("Survey data to submit:", submissionData);

      // Here you would send to Google Apps Script Web App
      // const response = await fetch("YOUR_GOOGLE_APPS_SCRIPT_URL", {
      //   method: "POST",
      //   mode: "no-cors",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(submissionData),
      // });

      toast({
        title: "¡Encuesta enviada!",
        description: "Gracias por compartir tu opinión.",
      });

      setCurrentScreen("thankyou");
    } catch (error) {
      console.error("Error submitting survey:", error);
      toast({
        title: "Error al enviar",
        description: "Por favor intenta nuevamente.",
        variant: "destructive",
      });
    }
  };

  const handleRestart = () => {
    setCurrentScreen("welcome");
  };

  const handleBack = () => {
    setCurrentScreen("welcome");
  };

  return (
    <>
      {currentScreen === "welcome" && (
        <WelcomeScreen onStart={handleStartSurvey} />
      )}
      {currentScreen === "survey" && (
        <SurveyScreen onSubmit={handleSubmitSurvey} onBack={handleBack} />
      )}
      {currentScreen === "thankyou" && (
        <ThankYouScreen onRestart={handleRestart} />
      )}
    </>
  );
};

export default Index;
