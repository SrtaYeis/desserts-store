import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { productSchema, type ProductFormValues } from '../schemas/productSchema';
import { useCategories } from '../hooks/useProductsQueries';

interface Props {
  defaultValues?: ProductFormValues;
  submitLabel: string;
  submitting?: boolean;
  onSubmit: (values: ProductFormValues) => void;
}

const empty: ProductFormValues = { name: '', price: 0, categoryId: '', image: '/images/image-cake-desktop.jpg' };

export default function ProductForm({ defaultValues = empty, submitLabel, submitting, onSubmit }: Props) {
  const { data: categories = [] } = useCategories();
  const { register, handleSubmit, formState: { errors } } = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues,
  });

  const field = 'mt-1 w-full rounded-lg border border-rose-300 bg-white px-4 py-3 outline-none focus:border-red';
  const err = (m?: string) => m && <p role="alert" className="mt-1 text-sm text-red">{m}</p>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-6 max-w-lg space-y-5">
      <label className="block text-sm font-semibold">Nombre
        <input className={field} {...register('name')} />{err(errors.name?.message)}
      </label>
      <label className="block text-sm font-semibold">Precio
        <input type="number" step="0.01" className={field} {...register('price', { valueAsNumber: true })} />{err(errors.price?.message)}
      </label>
      <label className="block text-sm font-semibold">Categoría
        <select className={field} {...register('categoryId')}>
          <option value="">Selecciona...</option>
          {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>{err(errors.categoryId?.message)}
      </label>
      <label className="block text-sm font-semibold">Imagen (URL o ruta)
        <input className={field} {...register('image')} />{err(errors.image?.message)}
      </label>
      <button disabled={submitting} className="rounded-full bg-red px-8 py-3 font-semibold text-white hover:bg-[#952c0b] disabled:opacity-60">
        {submitting ? 'Guardando...' : submitLabel}
      </button>
    </form>
  );
}
