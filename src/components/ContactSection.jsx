import { MapPin, MessageCircleMore, Phone, Send, Timer } from 'lucide-react';
import { useMemo, useState } from 'react';
import { siteConfig } from '../config/site';
import { getWhatsAppLink } from '../lib/whatsapp';

const initialForm = {
  name: '',
  phone: '',
  product: '',
  message: '',
};

function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const whatsappLink = useMemo(() => {
    if (!siteConfig.whatsappNumber) {
      return null;
    }

    const message = 'Hello Leo Sea Foods, I would like to enquire about your seafood products.';
    return getWhatsAppLink(siteConfig.whatsappNumber, message);
  }, []);

  const phoneLink = siteConfig.phoneNumber ? `tel:+${siteConfig.phoneNumber}` : null;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
    if (submitted) setSubmitted(false);
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!form.message.trim()) nextErrors.message = 'Please enter your enquiry message.';

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }

    const productName = form.product?.trim() || 'seafood products';
    const enquiryText = `Hello Leo Sea Foods, my name is ${form.name.trim()}. I would like to enquire about ${productName}. Phone: ${form.phone.trim() || 'Not provided'}. Message: ${form.message.trim()}`;

    if (siteConfig.whatsappNumber) {
      const link = getWhatsAppLink(siteConfig.whatsappNumber, enquiryText);
      if (link) {
        window.open(link, '_blank', 'noopener,noreferrer');
      }
    }

    setSubmitted(true);
    setForm(initialForm);
    setErrors({});
  };

  return (
    <section id="contact" className="bg-[#082B45] py-16 text-white md:py-20">
      <div className="section-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#16B8A6]">Get in touch</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-white md:text-4xl">Let&apos;s help with your seafood enquiry</h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-slate-200">
            Reach out for product availability, order enquiries, or general questions about the seafood range.
          </p>

          <div className="mt-8 space-y-4">
            {whatsappLink ? (
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition hover:border-[#16B8A6]/50 hover:bg-white/10">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#16B8A6] text-white">
                  <MessageCircleMore className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-200">WhatsApp</div>
                  <div className="text-base font-semibold text-white">Contact on WhatsApp</div>
                </div>
              </a>
            ) : (
              <div className="flex items-center gap-3 rounded-2xl border border-dashed border-white/20 bg-white/5 p-4 text-left text-slate-200">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-dashed border-slate-300 text-slate-300">
                  <MessageCircleMore className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-300">WhatsApp</div>
                  <div className="text-base font-semibold text-white">Awaiting business number</div>
                </div>
              </div>
            )}

            {phoneLink ? (
              <a href={phoneLink} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition hover:border-[#16B8A6]/50 hover:bg-white/10">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#082B45]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-200">{siteConfig.contactPerson}</div>
                  <div className="text-base font-semibold text-white">{siteConfig.phoneDisplay}</div>
                </div>
              </a>
            ) : null}

            {siteConfig.location ? (
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-left">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#082B45]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-200">Location</div>
                  <div className="text-base font-semibold text-white">{siteConfig.location}</div>
                </div>
              </div>
            ) : null}

            {siteConfig.openingHours ? (
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-left">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#082B45]">
                  <Timer className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-200">Opening hours</div>
                  <div className="text-base font-semibold text-white">{siteConfig.openingHours}</div>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-6 text-slate-800 shadow-[0_20px_50px_rgba(15,23,42,0.16)] md:p-8">
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-800 outline-none transition focus:border-[#16B8A6] focus:ring-2 focus:ring-[#16B8A6]/20"
                placeholder="Your name"
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name ? <p className="mt-2 text-sm text-red-600">{errors.name}</p> : null}
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-700">Phone number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-800 outline-none transition focus:border-[#16B8A6] focus:ring-2 focus:ring-[#16B8A6]/20"
                placeholder="Optional contact number"
              />
            </div>

            <div>
              <label htmlFor="product" className="mb-2 block text-sm font-semibold text-slate-700">Product of interest</label>
              <input
                id="product"
                name="product"
                type="text"
                value={form.product}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-800 outline-none transition focus:border-[#16B8A6] focus:ring-2 focus:ring-[#16B8A6]/20"
                placeholder="e.g. Fresh Fish"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-800 outline-none transition focus:border-[#16B8A6] focus:ring-2 focus:ring-[#16B8A6]/20"
                placeholder="Tell us what you need"
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message ? <p className="mt-2 text-sm text-red-600">{errors.message}</p> : null}
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#16B8A6] px-5 py-3.5 text-base font-semibold text-white transition hover:bg-[#119d90] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16B8A6] focus-visible:ring-offset-2"
            >
              <Send className="h-4 w-4" />
              Send enquiry on WhatsApp
            </button>

            <p className="text-sm text-slate-600">This opens WhatsApp with your enquiry so you can send it to us.</p>
            {submitted ? <p className="text-sm font-medium text-[#0d6a64]">Your enquiry has been prepared in WhatsApp.</p> : null}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
