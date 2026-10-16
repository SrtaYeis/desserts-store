import { CATEGORIES } from '../constants';

interface Props { value: string; onChange: (v: string) => void }

export default function CategoryFilter({ value, onChange }: Props) {
  const chip = (active: boolean) =>
    `rounded-full border px-4 py-1.5 text-sm font-semibold transition ${active ? 'border-red bg-red text-white' : 'border-rose-300 bg-white hover:border-red hover:text-red'}`;
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoría">
      <button onClick={() => onChange('')} className={chip(value === '')}>Todos</button>
      {CATEGORIES.map((c) => (
        <button key={c} onClick={() => onChange(c)} className={chip(value === c)}>{c}</button>
      ))}
    </div>
  );
}
