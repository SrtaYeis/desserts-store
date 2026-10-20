/**
 * Tarjeta de producto.
 * Muestra la información básica del postre y permite añadirlo al carrito.
 */
import { Link } from 'react-router-dom';
import type { Product } from '../interfaces/product';
import QuantityStepper from './QuantityStepper';
import { useCartStore } from '../stores/cartStore';

export default function ProductCard({ product }: { product: Product }) {
  const { id, image, name, category, price } = product;
  const item = useCartStore((s) => s.items.find((i) => i.id === id));
  const { add, increase, decrease } = useCartStore();

  return (
    <article>
      <div className="relative">
        <Link to={`/producto/${id}`}>
          <picture>
            <source media="(min-width: 1024px)" srcSet={image.desktop} />
            <img
              src={image.mobile}
              alt={name}
              className={`aspect-[4/3] w-full rounded-lg border-2 object-cover lg:aspect-square ${item ? 'border-red' : 'border-transparent hover:border-red'}`}
            />
          </picture>
        </Link>
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2">
          {item ? (
            <QuantityStepper quantity={item.quantity} onIncrement={() => increase(id)} onDecrement={() => decrease(id)} />
          ) : (
            <button
              type="button"
              onClick={() => add({ id, name, price, thumbnail: image.thumbnail })}
              className="flex w-40 items-center justify-center gap-2 rounded-full border border-rose-400 bg-white px-4 py-3 text-sm font-semibold hover:border-red hover:text-red"
            >
              <img src="/images/icon-add-to-cart.svg" alt="" /> Add to Cart
            </button>
          )}
        </div>
      </div>
      <div className="mt-9">
        {category && <span className="rounded-full bg-rose-100 px-2 py-0.5 text-xs text-rose-500">{category.name}</span>}
        <Link to={`/producto/${id}`} className="mt-1 block font-semibold hover:text-red">{name}</Link>
        <p className="font-semibold text-red">${price.toFixed(2)}</p>
      </div>
    </article>
  );
}
