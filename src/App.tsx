import { useState } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import ConfirmOrderModal from './components/ConfirmOrderModal';
import { products } from './data/products';

// Organiza la lista de postres y controla la apertura del modal de confirmación.
export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:py-16 lg:grid-cols-[1fr_22rem]">
      <div>
        <Header />
        <section aria-label="Lista de postres" className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3">
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </section>
      </div>

      <div className="lg:pt-0">
        <CartDrawer onPreviewOrder={() => setModalOpen(true)} />
      </div>

      <ConfirmOrderModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
