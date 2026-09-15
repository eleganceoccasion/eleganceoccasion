import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

const buildId = process.env.VERCEL_GIT_COMMIT_SHA || 'eo-vercel-migration-local';

export default defineConfig({
  plugins: [react(), {
    name: 'deployment-identifier',
    transformIndexHtml: (html) => html.replace('EO_BUILD_ID', buildId),
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'build-info.json', source: JSON.stringify({ buildId }) });
    },
  }],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  define: { __EO_BUILD_ID__: JSON.stringify(buildId) },
});
