/**
 * Modal de confirmación del pedido.
 * Se abre al pulsar "Confirm Order" y muestra el resumen final antes de reiniciar el carrito.
 */
import { selectTotal, useCartStore } from '../stores/cartStore';

interface Props { open: boolean; onClose: () => void }

export default function ConfirmOrderModal({ open, onClose }: Props) {
  const { items, clear } = useCartStore();
  const total = useCartStore(selectTotal);
  if (!open) return null;

  const startNew = () => { clear(); onClose(); };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 md:items-center">
      <div role="dialog" aria-modal="true" aria-labelledby="order-title" className="w-full max-w-xl rounded-t-2xl bg-white p-6 md:rounded-2xl md:p-10">
        <img src="/images/icon-order-confirmed.svg" alt="" className="size-10" />
        <h2 id="order-title" className="mt-6 text-4xl font-bold">Order Confirmed</h2>
        <p className="mt-2 text-rose-500">We hope you enjoy your food!</p>
        <ul className="mt-8 max-h-64 overflow-y-auto rounded-lg bg-rose-50 p-5">
          {items.map((i) => (
            <li key={i.id} className="flex items-center gap-4 border-b border-rose-100 py-3">
              <img src={i.thumbnail} alt="" className="size-12 rounded" />
              <div className="flex-1">
                <p className="text-sm font-semibold">{i.name}</p>
                <p className="text-sm"><span className="font-semibold text-red">{i.quantity}x</span> <span className="text-rose-500">@ ${i.price.toFixed(2)}</span></p>
              </div>
              <span className="font-semibold">${(i.price * i.quantity).toFixed(2)}</span>
            </li>
          ))}
          <li className="flex items-center justify-between pt-5">
            <span className="text-sm">Order Total</span>
            <span className="text-3xl font-bold">${total.toFixed(2)}</span>
          </li>
        </ul>
        <button onClick={startNew} className="mt-8 w-full rounded-full bg-red py-4 font-semibold text-white hover:bg-[#952c0b]">Start New Order</button>
      </div>
    </div>
  );
}
