/**
 * Pantalla de detalle del producto.
 * Carga la información del postre seleccionado y permite editar o eliminarlo.
 */
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { isAxiosError } from 'axios';
import { useProduct } from '../hooks/useProductsQueries';
import { useProductsMutations } from '../hooks/useProductsMutations';
import StateMessage from '../components/StateMessage';
import ConfirmDialog from '../components/ConfirmDialog';
import NotFound from './NotFound';

export default function ProductDetail() {
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const [confirming, setConfirming] = useState(false);
  const { data: product, isLoading, isError, error, refetch } = useProduct(id);
  const { remove } = useProductsMutations();

  if (isLoading) return <div className="mt-8 aspect-square max-w-md animate-pulse rounded-lg bg-rose-100" aria-hidden />;
  if (isError) {
    if (isAxiosError(error) && error.response?.status === 404) return <NotFound />;
    return <StateMessage title="Ocurrió un error" text="No pudimos cargar el producto." actionLabel="Reintentar" onAction={() => refetch()} />;
  }
  if (!product) return null;

  const handleDelete = () => remove.mutate(id, { onSuccess: () => navigate('/') });

  return (
    <div className="mt-6">
      <Link to="/" className="text-sm font-semibold text-rose-500 hover:text-red">← Volver</Link>
      <div className="mt-4 grid gap-8 md:grid-cols-2">
        <img src={product.image.desktop} alt={product.name} className="aspect-square w-full rounded-lg object-cover" />
        <div className="self-center">
          {product.category && <span className="rounded-full bg-rose-100 px-3 py-1 text-sm text-rose-500">{product.category.name}</span>}
          <h2 className="mt-3 text-3xl font-bold">{product.name}</h2>
          <p className="mt-2 text-2xl font-semibold text-red">${product.price.toFixed(2)}</p>
          <div className="mt-6 flex gap-3">
            <Link to={`/producto/${id}/editar`} className="rounded-full border border-rose-300 px-6 py-2 font-semibold hover:border-red hover:text-red">Editar</Link>
            <button onClick={() => setConfirming(true)} className="rounded-full bg-red px-6 py-2 font-semibold text-white hover:bg-[#952c0b]">Eliminar</button>
          </div>
        </div>
      </div>
      <ConfirmDialog
        open={confirming}
        title="¿Eliminar postre?"
        text={`Se eliminará "${product.name}". Esta acción no se puede deshacer.`}
        loading={remove.isPending}
        onConfirm={handleDelete}
        onCancel={() => setConfirming(false)}
      />
    </div>
  );
}
