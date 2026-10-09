import { MessageCircleMore } from 'lucide-react';
import { siteConfig } from '../config/site';
import { getWhatsAppLink } from '../lib/whatsapp';

function FloatingWhatsApp() {
  const whatsappLink = siteConfig.whatsappNumber ? getWhatsAppLink(siteConfig.whatsappNumber, 'Hello Leo Sea Foods, I would like to enquire about your seafood products.') : null;

  if (!whatsappLink) {
    return null;
  }

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact Leo Sea Foods on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_35px_rgba(37,211,102,0.35)] transition hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 sm:h-16 sm:w-16"
      style={{ bottom: 'calc(20px + env(safe-area-inset-bottom))', right: 'calc(20px + env(safe-area-inset-right))' }}
    >
      <MessageCircleMore className="h-6 w-6 sm:h-7 sm:w-7" />
    </a>
  );
}

export default FloatingWhatsApp;
