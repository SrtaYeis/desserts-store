/**
 * Barra de búsqueda.
 * Permite filtrar productos por nombre mientras el usuario escribe.
 */
interface Props { value: string; onChange: (v: string) => void }

export default function SearchBar({ value, onChange }: Props) {
  return (
    <input
      type="search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Buscar postre por nombre..."
      aria-label="Buscar por nombre"
      className="w-full rounded-full border border-rose-300 bg-white px-5 py-3 outline-none focus:border-red"
    />
  );
}
