import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createProduct, deleteProduct, updateProduct } from '../services/productsService';
import type { ProductPayload } from '../interfaces/product';

export function useProductsMutations() {
  const qc = useQueryClient();
  const refresh = () => qc.invalidateQueries({ queryKey: ['products'] });
  const onError = () => toast.error('Ocurrió un error. Intenta de nuevo.');

  const create = useMutation({
    mutationFn: (data: ProductPayload) => createProduct(data),
    onSuccess: () => { refresh(); toast.success('Postre creado correctamente'); },
    onError,
  });
  const update = useMutation({
    mutationFn: ({ id, data }: { id: string; data: ProductPayload }) => updateProduct(id, data),
    onSuccess: () => { refresh(); toast.success('Postre actualizado correctamente'); },
    onError,
  });
  const remove = useMutation({
    mutationFn: (id: string) => deleteProduct(id),
    onSuccess: () => { refresh(); toast.success('Postre eliminado correctamente'); },
    onError,
  });
  return { create, update, remove };
}
