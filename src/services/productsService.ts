import { api } from './api';
import type { Category, Product, ProductPayload } from '../interfaces/product';

export interface ProductFilters { search: string; categoryId: string; page: number }
export const PER_PAGE = 8;

export const getProducts = async ({ search, categoryId, page }: ProductFilters) => {
  const res = await api.get<Product[]>('/products', {
    params: { name_like: search || undefined, categoryId: categoryId || undefined, _expand: 'category', _page: page, _limit: PER_PAGE },
  });
  return { items: res.data, total: Number(res.headers['x-total-count'] ?? 0) };
};

export const getProduct = async (id: string) =>
  (await api.get<Product>(`/products/${id}`, { params: { _expand: 'category' } })).data;

export const getCategories = async () => (await api.get<Category[]>('/categories')).data;

export const createProduct = async (data: ProductPayload) => (await api.post<Product>('/products', data)).data;
export const updateProduct = async (id: string, data: ProductPayload) => (await api.put<Product>(`/products/${id}`, data)).data;
export const deleteProduct = async (id: string) => { await api.delete(`/products/${id}`); };
