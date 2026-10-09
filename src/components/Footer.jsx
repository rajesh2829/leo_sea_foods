import { Camera, MessageCircleMore, Phone } from 'lucide-react';
import { siteConfig } from '../config/site';

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="section-container grid gap-8 md:grid-cols-[1.1fr_0.9fr_0.8fr] md:items-start">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#082B45] text-white">
              <MessageCircleMore className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold text-[#082B45]">{siteConfig.businessName}</div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">{siteConfig.description}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Quick links</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li><a href="#home" className="hover:text-[#082B45]">Home</a></li>
            <li><a href="#products" className="hover:text-[#082B45]">Our Seafood</a></li>
            <li><a href="#about" className="hover:text-[#082B45]">About Us</a></li>
            <li><a href="#contact" className="hover:text-[#082B45]">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Contact</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            {siteConfig.whatsappNumber ? (
              <a href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent('Hello Leo Sea Foods, I would like to enquire about your seafood products.')}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#082B45]">
                <MessageCircleMore className="h-4 w-4" />
                WhatsApp
              </a>
            ) : null}
            {siteConfig.phoneNumber ? (
              <a href={`tel:+${siteConfig.phoneNumber}`} className="flex items-center gap-2 hover:text-[#082B45]">
                <Phone className="h-4 w-4" />
                {siteConfig.phoneNumber}
              </a>
            ) : null}
            {siteConfig.instagram ? (
              <a href={siteConfig.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#082B45]">
                <Camera className="h-4 w-4" />
                Instagram
              </a>
            ) : null}
          </div>
        </div>
      </div>

      <div className="section-container mt-8 border-t border-slate-200 pt-5 text-center text-sm text-slate-500">
        © {currentYear} {siteConfig.businessName}. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
