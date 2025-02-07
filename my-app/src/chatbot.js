import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    // Inject Botpress Chatbot script
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
    script1.async = true;

    const script2 = document.createElement("script");
    script2.src = "https://files.bpcontent.cloud/2025/02/07/12/20250207125253-RO1JMMTS.js";
    script2.async = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);

    // Wait for script to load before initializing
    script1.onload = () => {
      const checkBotpress = setInterval(() => {
        if (window.botpressWebChat) {
          clearInterval(checkBotpress); // Stop checking once it's loaded
          window.botpressWebChat.init({
            botId: "YOUR_BOT_ID", // Replace with your actual bot ID
            host: "https://cdn.botpress.cloud/webchat/v2",
            stylesheet: "https://cdn.jsdelivr.net/gh/your-custom-css.css",
            customStyles: {
              container: {
                position: "fixed",
                bottom: "20px",
                left: "20px", // Move the chatbot to the left
                right: "auto" // Ensure it's not positioned on the right
              }
            }
          });
        }
      }, 500); // Check every 500ms if Botpress is ready
    };

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return null;
};

export default Chatbot;
