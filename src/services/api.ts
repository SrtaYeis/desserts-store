/**
 * Instancia central de Axios para conectarse a la API local.
 * Aquí se define la base URL y se reutiliza en todos los servicios.
 */
import axios from 'axios';

export const api = axios.create({ baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:3000' });
