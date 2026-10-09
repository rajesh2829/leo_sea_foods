import { CheckCircle2, Fish, ShieldCheck, Sparkles } from 'lucide-react';

const features = [
  {
    title: 'Seafood Quality',
    description: 'A practical selection of popular seafood choices for customers looking for fresh, quality products.',
    icon: Fish,
  },
  {
    title: 'Product Variety',
    description: 'A broad seafood range to suit different preferences, meal plans, and customer needs.',
    icon: Sparkles,
  },
  {
    title: 'Customer-Focused Service',
    description: 'Clear enquiry support designed to make product questions and availability checks simple.',
    icon: CheckCircle2,
  },
  {
    title: 'Easy Enquiries',
    description: 'Fast, direct WhatsApp and call communication to make it easy to reach the business.',
    icon: ShieldCheck,
  },
];

function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-white py-16 md:py-20">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#16B8A6]">Why choose us</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#082B45] md:text-4xl">Why Choose Leo Sea Foods?</h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map(({ title, description, icon: Icon }) => (
            <div key={title} className="rounded-[1.5rem] border border-slate-200 bg-[#F5F7F8] p-6 text-left shadow-sm">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#082B45] text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-[#082B45]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
