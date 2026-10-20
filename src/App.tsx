import { useState } from 'react';
import Header from './components/Header';
import CartDrawer from './components/CartDrawer';
import ConfirmOrderModal from './components/ConfirmOrderModal';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <main className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:py-16 lg:grid-cols-[1fr_22rem]">
      <div>
        <Header />
        <AppRoutes />
      </div>
      <CartDrawer onConfirm={() => setModalOpen(true)} />
      <ConfirmOrderModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
