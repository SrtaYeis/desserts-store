/**
 * Página reutilizable para crear o editar un producto.
 * Se usa tanto en modo "nuevo" como en modo "edición" según la URL.
 */
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useProduct } from '../hooks/useProductsQueries';
import { useProductsMutations } from '../hooks/useProductsMutations';
import ProductForm from '../components/ProductForm';
import StateMessage from '../components/StateMessage';
import type { ProductFormValues } from '../schemas/productSchema';
import type { ProductPayload } from '../interfaces/product';

const toPayload = (v: ProductFormValues): ProductPayload => ({
  name: v.name,
  price: v.price,
  categoryId: v.categoryId,
  image: { thumbnail: v.image, mobile: v.image, desktop: v.image },
});

export default function ProductFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: product, isLoading, isError } = useProduct(id ?? '', !!id);
  const { create, update } = useProductsMutations();

  if (id && isLoading) return <p className="mt-8">Cargando...</p>;
  if (id && (isError || !product)) return <StateMessage title="Producto no encontrado" text="No se puede editar un postre que no existe." />;

  const defaultValues = product
    ? { name: product.name, price: product.price, categoryId: product.categoryId, image: product.image.desktop }
    : undefined;

  const handleSubmit = (values: ProductFormValues) => {
    const done = { onSuccess: () => navigate('/') };
    if (id) update.mutate({ id, data: toPayload(values) }, done);
    else create.mutate(toPayload(values), done);
  };

  return (
    <div className="mt-6">
      <Link to="/" className="text-sm font-semibold text-rose-500 hover:text-red">← Volver</Link>
      <h2 className="mt-2 text-2xl font-bold">{id ? 'Editar postre' : 'Nuevo postre'}</h2>
      <ProductForm
        defaultValues={defaultValues}
        submitLabel={id ? 'Guardar cambios' : 'Crear postre'}
        submitting={create.isPending || update.isPending}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
