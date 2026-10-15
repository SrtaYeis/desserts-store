import { products } from '../data/products';

interface Props { open: boolean; onClose: () => void }

// Elementos de muestra para previsualizar la confirmación sin un carrito real.
const sample = [
  { product: products[3], qty: 1 },
  { product: products[1], qty: 4 },
  { product: products[8], qty: 2 },
];
const total = sample.reduce((s, i) => s + i.product.price * i.qty, 0);

// Presenta el pedido de muestra cuando está abierto y permite cerrar el modal.
export default function ConfirmOrderModal({ open, onClose }: Props) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 md:items-center">
      <div role="dialog" aria-modal="true" aria-labelledby="order-title" className="w-full max-w-xl rounded-t-2xl bg-white p-6 md:rounded-2xl md:p-10">
        <img src="/images/icon-order-confirmed.svg" alt="" className="size-10" />
        <h2 id="order-title" className="mt-6 text-4xl font-bold">Order Confirmed</h2>
        <p className="mt-2 text-rose-500">We hope you enjoy your food!</p>

        <ul className="mt-8 rounded-lg bg-rose-50 p-5">
          {sample.map(({ product: p, qty }) => (
            <li key={p.id} className="flex items-center gap-4 border-b border-rose-100 py-3">
              <img src={p.image.thumbnail} alt="" className="size-12 rounded" />
              <div className="flex-1">
                <p className="text-sm font-semibold">{p.name}</p>
                <p className="text-sm"><span className="font-semibold text-red">{qty}x</span> <span className="text-rose-500">@ ${p.price.toFixed(2)}</span></p>
              </div>
              <span className="font-semibold">${(p.price * qty).toFixed(2)}</span>
            </li>
          ))}
          <li className="flex items-center justify-between pt-5">
            <span className="text-sm">Order Total</span>
            <span className="text-3xl font-bold">${total.toFixed(2)}</span>
          </li>
        </ul>

        <button onClick={onClose} className="mt-8 w-full rounded-full bg-red py-4 font-semibold text-white transition hover:bg-[#952c0b]">
          Start New Order
        </button>
      </div>
    </div>
  );
}
