import { z } from 'zod';

export const productSchema = z.object({
  name: z.string().min(3, 'Mínimo 3 caracteres'),
  price: z.number().positive('El precio debe ser mayor a 0'),
  categoryId: z.string().min(1, 'Selecciona una categoría'),
  image: z.string().min(1, 'La imagen es obligatoria'),
});

export type ProductFormValues = z.infer<typeof productSchema>;
