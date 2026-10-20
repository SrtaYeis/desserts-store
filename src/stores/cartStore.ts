/**
 * Estado global del carrito de compras.
 * Guarda los productos agregados, sus cantidades y los cálculos del total.
 * También persiste la información en localStorage para no perder el carrito al recargar.
 */
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem } from '../interfaces/cart';

interface CartState {
  items: CartItem[];
  add: (item: Omit<CartItem, 'quantity'>) => void;
  remove: (id: string) => void;
  increase: (id: string) => void;
  decrease: (id: string) => void;
  clear: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      add: (item) => set((s) => (s.items.some((i) => i.id === item.id) ? s : { items: [...s.items, { ...item, quantity: 1 }] })),
      remove: (id) => set((s) => ({ items: s.items.filter((i) => i.id !== id) })),
      increase: (id) => set((s) => ({ items: s.items.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i)) })),
      decrease: (id) =>
        set((s) => ({ items: s.items.flatMap((i) => (i.id !== id ? [i] : i.quantity > 1 ? [{ ...i, quantity: i.quantity - 1 }] : [])) })),
      clear: () => set({ items: [] }),
    }),
    { name: 'desserts-cart' },
  ),
);

export const selectTotal = (s: CartState) => s.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
export const selectCount = (s: CartState) => s.items.reduce((sum, i) => sum + i.quantity, 0);
