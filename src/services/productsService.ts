import { api } from './api';
import type { Product } from '../interfaces/product';

export interface ProductFilters { search: string; category: string }

// Búsqueda y filtro se hacen en la API (json-server): ?name_like=...&category=...
export const getProducts = async ({ search, category }: ProductFilters) =>
  (await api.get<Product[]>('/products', {
    params: { name_like: search || undefined, category: category || undefined },
  })).data;

export const getProduct = async (id: string) =>
  (await api.get<Product>(`/products/${id}`)).data;
