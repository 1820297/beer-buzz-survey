import { useState } from "react";
import { WelcomeScreen } from "@/components/screens/WelcomeScreen";
import { SurveyScreen, SurveyData } from "@/components/screens/SurveyScreen";
import { ThankYouScreen } from "@/components/screens/ThankYouScreen";
import { useToast } from "@/hooks/use-toast";

// ⚠️ IMPORTANTE: Reemplaza esta URL con la URL de tu Google Apps Script Web App
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzpNB_Z7CFBJ2-77MM6jWrQlxxOHohl4aQksfi7CyTt5xS2JmSZrpU9TINbh2w888o2wA/exec";

type Screen = "welcome" | "survey" | "thankyou";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("welcome");
  const { toast } = useToast();

  const handleStartSurvey = () => {
    setCurrentScreen("survey");
  };

  const handleSubmitSurvey = async (data: SurveyData) => {
    try {
      // Preparar datos para Google Sheets
      const submissionData = {
        timestamp: new Date().toISOString(),
        empresa: "Pozuzo Bier",
        satisfaccion: data.satisfaction,
        motivo: Array.isArray(data.reason) ? data.reason.join(", ") : "",
        comentario: data.comment || "",
        contacto: data.email && data.whatsapp
        ? `${data.email} | ${data.whatsapp}`
        : data.email || data.whatsapp || "",
        canal: data.email && data.whatsapp
        ? "correo y WhatsApp"
        : data.email
        ? "correo"
        : "WhatsApp",
  };

      console.log("Enviando datos:", submissionData);

      // Enviar a Google Apps Script Web App
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });
      try {
        await fetch(...)
      } catch (e) {
        console.error(e);
      } finally {
        setCurrentScreen("thankyou");
      }

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
