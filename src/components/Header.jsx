import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { siteConfig } from '../config/site';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Our Seafood', href: '#products' },
  { label: 'About Us', href: '#about' },
  { label: 'Why Choose Us', href: '#why-choose-us' },
  { label: 'Contact', href: '#contact' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const showContactButton = Boolean(siteConfig.whatsappNumber || siteConfig.phoneNumber);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-sm">
      <div className="section-container flex items-center justify-between py-3 md:py-4">
        <a href="#home" className="flex items-center gap-3" aria-label="Leo Sea Foods home">
          <img
            src="/images/leo_sea_food_logo.webp"
            alt="Leo Sea Foods logo"
            className="h-11 w-11 rounded-full object-cover"
          />
          <div>
            <div className="text-lg font-bold tracking-tight text-[#082B45]">{siteConfig.businessName}</div>
            <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">Seafood</div>
          </div>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[#082B45] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16B8A6] focus-visible:ring-offset-2">
              {item.label}
            </a>
          ))}
        </nav>

        {showContactButton ? (
          <a
            href={siteConfig.whatsappNumber ? `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent('Hello Leo Sea Foods, I would like to enquire about your seafood range.')}` : `tel:+${siteConfig.phoneNumber}`}
            className="hidden items-center justify-center rounded-full bg-[#16B8A6] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0e9d90] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16B8A6] focus-visible:ring-offset-2 md:inline-flex"
          >
            Enquire Now
          </a>
        ) : (
          <div className="hidden rounded-full border border-dashed border-slate-300 px-4 py-2 text-sm font-medium text-slate-500 md:flex">
            Contact pending
          </div>
        )}

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-[#082B45] hover:text-[#082B45] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16B8A6] focus-visible:ring-offset-2 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white md:hidden">
          <div className="section-container flex flex-col gap-2 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 transition hover:bg-slate-100 hover:text-[#082B45]"
              >
                {item.label}
              </a>
            ))}
            {showContactButton && (
              <a
                href={siteConfig.whatsappNumber ? `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent('Hello Leo Sea Foods, I would like to enquire about your seafood range.')}` : `tel:+${siteConfig.phoneNumber}`}
                onClick={closeMenu}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-[#16B8A6] px-5 py-3 text-sm font-semibold text-white"
              >
                Enquire Now
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
