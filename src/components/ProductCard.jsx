import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/site';
import { getWhatsAppLink } from '../lib/whatsapp';
import SafeImage from './SafeImage';

function ProductCard({ product }) {
  const whatsappLink = siteConfig.whatsappNumber
    ? getWhatsAppLink(siteConfig.whatsappNumber, `Hello Leo Sea Foods, I would like to enquire about ${product.name}. Please share the current availability and price.`)
    : null;

  return (
    <article className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_16px_35px_rgba(15,23,42,0.06)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(15,23,42,0.1)]">
      <div className="overflow-hidden">
        <SafeImage
          src={product.image}
          alt={product.imageAlt}
          name={product.name}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          width={800}
          height={600}
        />
      </div>
      <div className="p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <h3 className="text-xl font-bold text-[#082B45]">{product.name}</h3>
          <span className="rounded-full bg-[#16B8A6]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#0d6a64]">
            {product.availability}
          </span>
        </div>
        <p className="text-sm leading-6 text-slate-600">{product.description}</p>

        <div className="mt-5 flex items-center gap-2 text-sm font-medium text-[#082B45]">
          <CheckCircle2 className="h-4 w-4 text-[#16B8A6]" />
          <span>Fresh enquiry support</span>
        </div>

        {whatsappLink ? (
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#16B8A6] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#139c8d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16B8A6] focus-visible:ring-offset-2"
          >
            Enquire on WhatsApp
            <ArrowUpRight className="h-4 w-4" />
          </a>
        ) : (
          <button
            type="button"
            aria-disabled="true"
            className="mt-5 inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-full border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-500"
          >
            WhatsApp pending setup
          </button>
        )}
      </div>
    </article>
  );
}

export default ProductCard;
