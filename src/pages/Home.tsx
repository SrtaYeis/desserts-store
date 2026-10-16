import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import ProductSkeleton from '../components/ProductSkeleton';
import StateMessage from '../components/StateMessage';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import { useProducts } from '../hooks/useProductsQueries';
import { useDebounce } from '../hooks/useDebounce';

export default function Home() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const debouncedSearch = useDebounce(search);

  const { data, isLoading, isError, refetch } = useProducts({ search: debouncedSearch, category });

  return (
    <>
      <div className="mt-6 space-y-4">
        <SearchBar value={search} onChange={setSearch} />
        <CategoryFilter value={category} onChange={setCategory} />
      </div>

      <section aria-label="Lista de postres" className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3">
        {isLoading && Array.from({ length: 9 }, (_, i) => <ProductSkeleton key={i} />)}

        {isError && (
          <StateMessage
            title="No pudimos cargar los postres"
            text="Verifica que la API esté corriendo (npm run api)."
            actionLabel="Reintentar"
            onAction={() => refetch()}
          />
        )}

        {data?.length === 0 && (
          <StateMessage title="Sin resultados" text="No hay postres que coincidan con tu búsqueda o filtro." />
        )}

        {data?.map((p) => <ProductCard key={p.id} product={p} />)}
      </section>
    </>
  );
}
