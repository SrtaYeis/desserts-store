import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import ProductDetail from '../pages/ProductDetail';
import ProductFormPage from '../pages/ProductFormPage';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/producto/nuevo" element={<ProductFormPage />} />
      <Route path="/producto/:id" element={<ProductDetail />} />
      <Route path="/producto/:id/editar" element={<ProductFormPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
