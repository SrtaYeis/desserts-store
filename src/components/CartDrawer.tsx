interface Props { onPreviewOrder: () => void }
interface Props { onPreviewOrder: () => void }
// Muestra el estado vacío del carrito y permite abrir la vista de confirmación.
export default function CartDrawer({ onPreviewOrder }: Props) {
  return (
    <aside aria-label="Carrito de compras" className="h-fit rounded-xl bg-white p-6">
      <h2 className="text-2xl font-bold text-red">Your Cart (0)</h2>

      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <img src="/images/illustration-empty-cart.svg" alt="" className="w-32" />
        <p className="text-sm font-semibold text-rose-500">Your added items will appear here</p>
      </div>

      {/* Solo para ver el modal en el Nivel 1; se elimina cuando exista el carrito real */}
      <button onClick={onPreviewOrder} className="w-full text-sm text-rose-500 underline hover:text-red">
        Ver modal de confirmación
      </button>
    </aside>
  );
}
