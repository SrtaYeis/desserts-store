/**
 * Componente de paginación.
 * Controla la navegación entre páginas del catálogo de postres.
 */
interface Props { page: number; pages: number; onChange: (p: number) => void }

export default function Pagination({ page, pages, onChange }: Props) {
  if (pages <= 1) return null;
  const btn = 'rounded-full border border-rose-300 bg-white px-4 py-2 text-sm font-semibold hover:border-red hover:text-red disabled:opacity-40 disabled:hover:border-rose-300 disabled:hover:text-inherit';
  return (
    <nav aria-label="Paginación" className="mt-10 flex items-center justify-center gap-4">
      <button className={btn} disabled={page === 1} onClick={() => onChange(page - 1)}>Anterior</button>
      <span className="text-sm">Página {page} de {pages}</span>
      <button className={btn} disabled={page === pages} onClick={() => onChange(page + 1)}>Siguiente</button>
    </nav>
  );
}
