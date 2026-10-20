/**
 * Hook que retrasa la actualización de un valor para evitar búsquedas
 * demasiado frecuentes mientras el usuario escribe.
 */
import { useEffect, useState } from 'react';

export function useDebounce<T>(value: T, delay = 400) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}
