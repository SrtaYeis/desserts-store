import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CartDrawer from './components/CartDrawer';
import ConfirmOrderModal from './components/ConfirmOrderModal';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/NotFound';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:py-16 lg:grid-cols-[1fr_22rem]">
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <CartDrawer onPreviewOrder={() => setModalOpen(true)} />
      <ConfirmOrderModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
