import { ArrowRight, MessageCircleMore, Phone } from 'lucide-react';
import { siteConfig, siteCopy } from '../config/site';
import { getWhatsAppLink } from '../lib/whatsapp';
import SafeImage from './SafeImage';

function Hero() {
  const whatsappLink = siteConfig.whatsappNumber ? getWhatsAppLink(siteConfig.whatsappNumber, 'Hello Leo Sea Foods, I would like to enquire about your seafood collection.') : null;

  return (
    <section id="home" className="relative overflow-hidden bg-[#F5F7F8]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(22,184,166,0.12),_transparent_40%)]" aria-hidden="true" />
      <div className="section-container relative grid gap-10 py-12 md:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12 lg:py-20">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#16B8A6]/30 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#082B45]">
            <span className="h-2 w-2 rounded-full bg-[#16B8A6]" />
            {siteConfig.tagline}
          </div>
          <h1 className="max-w-xl text-4xl font-black leading-tight tracking-[-0.04em] text-[#082B45] sm:text-5xl lg:text-6xl">
            {siteCopy.heroHeadline}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-600">
            {siteCopy.heroText}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#082B45] px-6 py-3.5 text-base font-semibold text-white transition hover:bg-[#0d3b5d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16B8A6] focus-visible:ring-offset-2"
            >
              Explore Our Seafood
              <ArrowRight className="h-4 w-4" />
            </a>
            {whatsappLink ? (
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#16B8A6] bg-[#16B8A6]/10 px-6 py-3.5 text-base font-semibold text-[#082B45] transition hover:bg-[#16B8A6]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16B8A6] focus-visible:ring-offset-2"
              >
                <MessageCircleMore className="h-4 w-4" />
                Contact Us on WhatsApp
              </a>
            ) : (
              <button
                type="button"
                aria-disabled="true"
                className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-full border border-dashed border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-500"
              >
                <MessageCircleMore className="h-4 w-4" />
                WhatsApp pending setup
              </button>
            )}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-600">
            {siteConfig.phoneNumber ? (
              <a href={`tel:+${siteConfig.phoneNumber}`} className="inline-flex items-center gap-2 font-medium text-[#082B45] hover:text-[#0b3d63]">
                <Phone className="h-4 w-4" />
                Call us
              </a>
            ) : null}
            <span className="text-slate-400">•</span>
            <span>Seafood enquiry support</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-[#16B8A6]/20 blur-2xl" aria-hidden="true" />
          <div className="absolute -bottom-8 -right-6 h-24 w-24 rounded-full bg-[#082B45]/10 blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_30px_80px_rgba(8,43,69,0.14)]">
            <SafeImage
              src="/images/hero.jpg"
              alt="Fresh seafood arranged for sale"
              name="Seafood selection"
              className="h-[480px] w-full rounded-[1.5rem] object-cover"
              width={800}
              height={930}
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
