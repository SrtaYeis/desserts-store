import { Link } from 'react-router-dom';
import type { Product } from '../interfaces/product';
import QuantityStepper from './QuantityStepper';

export default function ProductCard({ product }: { product: Product }) {
  const { id, image, name, category, price } = product;
  return (
    <article className="group">
      <div className="relative">
        <Link to={`/producto/${id}`}>
          <picture>
            <source media="(min-width: 1024px)" srcSet={image.desktop} />
            <img
              src={image.mobile}
              alt={name}
              className="aspect-[4/3] w-full rounded-lg border-2 border-transparent object-cover transition group-hover:border-red lg:aspect-square"
            />
          </picture>
        </Link>

        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2">
          <button
            type="button"
            className="flex w-40 items-center justify-center gap-2 rounded-full border border-rose-400 bg-white px-4 py-3 text-sm font-semibold transition group-hover:hidden hover:border-red hover:text-red focus-visible:outline-2 focus-visible:outline-red"
          >
            <img src="/images/icon-add-to-cart.svg" alt="" /> Add to Cart
          </button>
          <div className="hidden group-hover:block">
            <QuantityStepper />
          </div>
        </div>
      </div>

      <div className="mt-9">
        <p className="text-sm text-rose-500">{category}</p>
        <Link to={`/producto/${id}`} className="font-semibold hover:text-red">{name}</Link>
        <p className="font-semibold text-red">${price.toFixed(2)}</p>
      </div>
    </article>
  );
}
