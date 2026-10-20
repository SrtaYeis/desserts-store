import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import ProductSkeleton from '../components/ProductSkeleton';
import StateMessage from '../components/StateMessage';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import Pagination from '../components/Pagination';
import { useProducts } from '../hooks/useProductsQueries';
import { useDebounce } from '../hooks/useDebounce';
import { PER_PAGE } from '../services/productsService';

export default function Home() {
  const [search, setSearch] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [page, setPage] = useState(1);
  const debounced = useDebounce(search);

  const { data, isLoading, isError, refetch } = useProducts({ search: debounced, categoryId, page });
  const pages = Math.max(1, Math.ceil((data?.total ?? 0) / PER_PAGE));

  return (
    <>
      <div className="mt-6 space-y-4">
        <div className="flex gap-3">
          <SearchBar value={search} onChange={(v) => { setSearch(v); setPage(1); }} />
          <Link to="/producto/nuevo" className="shrink-0 rounded-full bg-red px-5 py-3 font-semibold text-white hover:bg-[#952c0b]">+ Nuevo</Link>
        </div>
        <CategoryFilter value={categoryId} onChange={(id) => { setCategoryId(id); setPage(1); }} />
      </div>

      <section aria-label="Lista de postres" className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3">
        {isLoading && Array.from({ length: PER_PAGE }, (_, i) => <ProductSkeleton key={i} />)}
        {isError && <StateMessage title="No pudimos cargar los postres" text="Verifica que la API esté corriendo (npm run server)." actionLabel="Reintentar" onAction={() => refetch()} />}
        {data?.items.length === 0 && <StateMessage title="Sin resultados" text="No hay postres que coincidan con tu búsqueda o filtro." />}
        {data?.items.map((p) => <ProductCard key={p.id} product={p} />)}
      </section>

      <Pagination page={page} pages={pages} onChange={setPage} />
    </>
  );
}
