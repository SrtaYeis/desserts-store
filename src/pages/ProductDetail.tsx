import { Link, useParams } from 'react-router-dom';
import { isAxiosError } from 'axios';
import { useProduct } from '../hooks/useProductsQueries';
import StateMessage from '../components/StateMessage';
import NotFound from './NotFound';

export default function ProductDetail() {
  const { id = '' } = useParams();
  const { data: product, isLoading, isError, error, refetch } = useProduct(id);

  if (isLoading) {
    return (
      <div className="mt-8 grid animate-pulse gap-6 md:grid-cols-2" aria-hidden>
        <div className="aspect-square rounded-lg bg-rose-100" />
        <div className="space-y-3"><div className="h-4 w-1/4 rounded bg-rose-100" /><div className="h-8 w-3/4 rounded bg-rose-100" /><div className="h-6 w-1/5 rounded bg-rose-100" /></div>
      </div>
    );
  }

  if (isError) {
    if (isAxiosError(error) && error.response?.status === 404) return <NotFound />;
    return <StateMessage title="Ocurrió un error" text="No pudimos cargar el producto." actionLabel="Reintentar" onAction={() => refetch()} />;
  }

  return (
    <div className="mt-6">
      <Link to="/" className="text-sm font-semibold text-rose-500 hover:text-red">← Volver</Link>
      <div className="mt-4 grid gap-8 md:grid-cols-2">
        <img src={product!.image.desktop} alt={product!.name} className="aspect-square w-full rounded-lg object-cover" />
        <div className="self-center">
          <span className="rounded-full bg-rose-100 px-3 py-1 text-sm text-rose-500">{product!.category}</span>
          <h2 className="mt-3 text-3xl font-bold">{product!.name}</h2>
          <p className="mt-2 text-2xl font-semibold text-red">${product!.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
