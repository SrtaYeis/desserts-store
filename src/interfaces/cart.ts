/**
 * Representa un producto dentro del carrito de compras.
 * Incluye la cantidad para poder sumar totales y mostrar cantidades reales.
 */
export interface CartItem { id: string; name: string; price: number; thumbnail: string; quantity: number }
