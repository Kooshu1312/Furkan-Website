import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "[PUT WHATSAPP NUMBER HERE WITH COUNTRY CODE]"; // Format: 1234567890 (no + or spaces)
    const message = "Hi, I need help with my car!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#22c55e] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-garage-dark text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat on WhatsApp
      </span>
    </button>
  );
};

export default WhatsAppButton;
