import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static'; // Importar el adaptador de Vercel

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel(), // Usar el adaptador importado
  integrations: [tailwind()],
});