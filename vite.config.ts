import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
/* VITE_IMPORTS */

export default defineConfig(() => {
  return {
    /* VITE_CONFIG */
    ssr: {
      target: "webworker",
      noExternal: true
    },
    plugins: [
      qwikVite(/* VITE_QWIK */),
      /* VITE_PLUGINS */
    ],
  };
});
