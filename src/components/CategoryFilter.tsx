import { useCategories } from '../hooks/useProductsQueries';

interface Props { value: string; onChange: (id: string) => void }

export default function CategoryFilter({ value, onChange }: Props) {
  const { data: categories = [] } = useCategories();
  const chip = (active: boolean) =>
    `rounded-full border px-4 py-1.5 text-sm font-semibold transition ${active ? 'border-red bg-red text-white' : 'border-rose-300 bg-white hover:border-red hover:text-red'}`;
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoría">
      <button onClick={() => onChange('')} className={chip(value === '')}>Todos</button>
      {categories.map((c) => (
        <button key={c.id} onClick={() => onChange(c.id)} className={chip(value === c.id)}>{c.name}</button>
      ))}
    </div>
  );
}
