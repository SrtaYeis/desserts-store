import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="mt-8 rounded-xl bg-white p-10 text-center">
      <p className="text-6xl font-bold text-red">404</p>
      <h2 className="mt-2 text-xl font-bold">Producto no encontrado</h2>
      <p className="mt-2 text-rose-500">El postre que buscas no existe.</p>
      <Link to="/" className="mt-6 inline-block rounded-full bg-red px-6 py-3 font-semibold text-white hover:bg-[#952c0b]">
        Volver a la tienda
      </Link>
    </div>
  );
}
