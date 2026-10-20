/**
 * Mensaje reutilizable para estados vacíos, errores o cargas.
 * Ayuda a mostrar feedback claro al usuario sin repetir UI.
 */
interface Props { title: string; text: string; actionLabel?: string; onAction?: () => void }

export default function StateMessage({ title, text, actionLabel, onAction }: Props) {
  return (
    <div role="status" className="col-span-full rounded-xl bg-white p-10 text-center">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2 text-rose-500">{text}</p>
      {actionLabel && (
        <button onClick={onAction} className="mt-6 rounded-full bg-red px-6 py-3 font-semibold text-white hover:bg-[#952c0b]">
          {actionLabel}
        </button>
      )}
    </div>
  );
}
