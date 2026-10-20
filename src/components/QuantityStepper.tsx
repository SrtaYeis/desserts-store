interface Props { quantity: number; onIncrement: () => void; onDecrement: () => void }

export default function QuantityStepper({ quantity, onIncrement, onDecrement }: Props) {
  return (
    <div className="flex w-40 items-center justify-between rounded-full bg-red px-3 py-3 text-white">
      <button type="button" onClick={onDecrement} aria-label="Disminuir cantidad" className="grid size-5 place-items-center rounded-full hover:opacity-70">
        <img src="/images/icon-decrement-quantity.svg" alt="" />
      </button>
      <span className="text-sm font-semibold">{quantity}</span>
      <button type="button" onClick={onIncrement} aria-label="Aumentar cantidad" className="grid size-5 place-items-center rounded-full hover:opacity-70">
        <img src="/images/icon-increment-quantity.svg" alt="" />
      </button>
    </div>
  );
}
