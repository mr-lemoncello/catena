import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  preprocess: vitePreprocess(),
  compilerOptions: {
    customElement: true
  },
  kit: {
    adapter: adapter({
      out: '.',
      fallback: '404.html'
    }),
    paths: {
      base: '',
    },
  },
};

export default config;