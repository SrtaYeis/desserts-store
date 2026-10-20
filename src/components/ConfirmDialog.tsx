interface Props { open: boolean; title: string; text: string; loading?: boolean; onConfirm: () => void; onCancel: () => void }

export default function ConfirmDialog({ open, title, text, loading, onConfirm, onCancel }: Props) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-6">
      <div role="alertdialog" aria-modal="true" aria-labelledby="dlg-title" className="w-full max-w-md rounded-2xl bg-white p-8">
        <h2 id="dlg-title" className="text-2xl font-bold">{title}</h2>
        <p className="mt-2 text-rose-500">{text}</p>
        <div className="mt-8 flex gap-3">
          <button onClick={onCancel} className="flex-1 rounded-full border border-rose-300 py-3 font-semibold hover:border-rose-900">Cancelar</button>
          <button onClick={onConfirm} disabled={loading} className="flex-1 rounded-full bg-red py-3 font-semibold text-white hover:bg-[#952c0b] disabled:opacity-60">
            {loading ? 'Eliminando...' : 'Eliminar'}
          </button>
        </div>
      </div>
    </div>
  );
}
