// @ts-check
import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://dampuzakura.github.io', // Please enter the URL where you will host your website.
  base: '/astro-sveltekit-blog', // If you are hosting your website at a subpath, enter it here.
  integrations: [UnoCSS({
    injectReset: true,
  }), svelte(), sitemap()],
  vite: {
    resolve: {
      alias: {
        '@components': '/src/components',
        '@layouts': '/src/layouts',
        '@lib': '/src/lib',
        '@': '',
      },
    },
  },
});