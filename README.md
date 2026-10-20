# Desserts Store

SPA de postres con React + Vite + TypeScript, Tailwind, React Router, TanStack Query + Axios, React Hook Form + Zod, Zustand y json-server.

## Instalación
```bash
npm install
```
## Scripts
- `npm run dev` – frontend en http://localhost:5173
- `npm run server` – API json-server en http://localhost:3000 (delay 1.2 s)
- `npm run build` – build de producción

## Ejecutar
Abre dos terminales: `npm run server` y `npm run dev`.

## Arquitectura
`src/` por funcionalidad: `components`, `pages`, `hooks` (`useProductsQueries`, `useProductsMutations`), `services`, `schemas`, `stores`, `interfaces`, `routes`.

## Decisiones técnicas
- Zustand + `persist` guarda el carrito en localStorage.
- Query keys empiezan con `products`; cada mutación hace `invalidateQueries({ queryKey: ['products'] })`.
- json-server 0.17.4: paginación con `_page` y `_limit=8` (total en el header `X-Total-Count`), búsqueda con `name_like`, relación con `_expand=category`.
- Un solo `ProductForm` para crear y editar (`defaultValues`).

## API
`/products` (GET, POST, PUT, DELETE) y `/categories` (GET). Datos en `db.json`.
