import { selectCount, selectTotal, useCartStore } from '../stores/cartStore';

export default function CartDrawer({ onConfirm }: { onConfirm: () => void }) {
  const { items, remove } = useCartStore();
  const total = useCartStore(selectTotal);
  const count = useCartStore(selectCount);

  return (
    <aside aria-label="Carrito de compras" className="h-fit rounded-xl bg-white p-6">
      <h2 className="text-2xl font-bold text-red">Your Cart ({count})</h2>

      {items.length === 0 ? (
        <div className="flex flex-col items-center gap-4 py-8 text-center">
          <img src="/images/illustration-empty-cart.svg" alt="" className="w-32" />
          <p className="text-sm font-semibold text-rose-500">Your added items will appear here</p>
        </div>
      ) : (
        <>
          <ul className="mt-4">
            {items.map((i) => (
              <li key={i.id} className="flex items-center justify-between border-b border-rose-100 py-3">
                <div>
                  <p className="text-sm font-semibold">{i.name}</p>
                  <p className="text-sm">
                    <span className="font-semibold text-red">{i.quantity}x</span>{' '}
                    <span className="text-rose-500">@ ${i.price.toFixed(2)}</span>{' '}
                    <span className="font-semibold text-rose-500">${(i.price * i.quantity).toFixed(2)}</span>
                  </p>
                </div>
                <button onClick={() => remove(i.id)} aria-label={`Quitar ${i.name}`} className="grid size-5 place-items-center rounded-full border border-rose-300 text-rose-400 hover:border-rose-900 hover:text-rose-900">×</button>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between py-6">
            <span className="text-sm">Order Total</span>
            <span className="text-2xl font-bold">${total.toFixed(2)}</span>
          </div>
          <p className="rounded-lg bg-rose-50 p-4 text-center text-sm">This is a <b>carbon-neutral</b> delivery</p>
          <button onClick={onConfirm} className="mt-6 w-full rounded-full bg-red py-4 font-semibold text-white hover:bg-[#952c0b]">Confirm Order</button>
        </>
      )}
    </aside>
  );
}
