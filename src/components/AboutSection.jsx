import { siteConfig, siteCopy } from '../config/site';
import SafeImage from './SafeImage';

function AboutSection() {
  return (
    <section id="about" className="bg-[#F5F7F8] py-16 md:py-20">
      <div className="section-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_20px_50px_rgba(8,43,69,0.08)]">
          <SafeImage
            src="/images/about.jpg"
            alt="Fresh seafood arranged in a market setting"
            name="Seafood selection"
            className="h-[420px] w-full rounded-[1.5rem] object-cover"
            width={900}
            height={700}
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#16B8A6]">About us</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#082B45] md:text-4xl">{siteCopy.aboutTitle}</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">{siteCopy.aboutText}</p>
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-sm font-semibold uppercase tracking-[0.14em] text-[#082B45]">Business</div>
            <div className="mt-3 text-xl font-bold text-[#082B45]">{siteConfig.businessName}</div>
            <div className="mt-2 text-sm text-slate-600">{siteConfig.tagline}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
