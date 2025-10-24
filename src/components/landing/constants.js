// Konstanta global untuk Landing Page PT Muhammado Nihon Istiqomah
export const WHATSAPP_NUMBER = "6285210984579"; // Nomor WhatsApp admin tanpa +
export const DEFAULT_WA_MESSAGE = "Assalamu'alaikum, saya ingin konsultasi program kerja ke Jepang di PT Muhammado Nihon Istiqomah. Mohon informasinya.";
export const WA_TEXT = encodeURIComponent(DEFAULT_WA_MESSAGE);
export const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WA_TEXT}`;

// Logo: menggunakan logo lokal
export const LOGO_SRC = "/images/Logo-Muhammado.png";

// Sistem spacing yang konsisten dan profesional
export const container = "max-w-7xl mx-auto px-6 sm:px-8 lg:px-12";
export const sectionY = "py-16 sm:py-20 lg:py-24";
export const sectionYCompact = "py-12 sm:py-16 lg:py-20";
export const heroY = "py-20 sm:py-24 lg:py-32";

// Spacing utilities
export const spacing = {
  section: "py-16 sm:py-20 lg:py-24",
  sectionCompact: "py-12 sm:py-16 lg:py-20",
  hero: "py-20 sm:py-24 lg:py-32",
  container: "max-w-7xl mx-auto px-6 sm:px-8 lg:px-12",
  containerTight: "max-w-6xl mx-auto px-6 sm:px-8 lg:px-12",
  containerWide: "max-w-8xl mx-auto px-6 sm:px-8 lg:px-12",
  gap: {
    xs: "gap-4",
    sm: "gap-6",
    md: "gap-8 lg:gap-10",
    lg: "gap-10 lg:gap-12",
    xl: "gap-12 lg:gap-16"
  }
};
