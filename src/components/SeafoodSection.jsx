import { products } from '../data/products';
import ProductCard from './ProductCard';

function SeafoodSection() {
  return (
    <section id="products" className="bg-white py-16 md:py-20">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#16B8A6]">Our Seafood</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#082B45] md:text-4xl">Explore Our Seafood</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Discover seafood varieties available through Leo Sea Foods.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SeafoodSection;
