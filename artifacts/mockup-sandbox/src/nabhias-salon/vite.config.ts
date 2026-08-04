import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';

// Resolve __dirname in ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Provide sensible defaults for Vercel / CI environments
const rawPort = process.env.PORT || '3000';
const port = Number(rawPort);
if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH || '/';

export default defineConfig({
  base: basePath,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, '..', '..', 'attached_assets'),
    },
    dedupe: ['react', 'react-dom'],
  },
  root: path.resolve(__dirname),
  build: {
    // Keep the existing expectation of a public subfolder for this artifact
    outDir: path.resolve(__dirname, 'dist/public'),
    emptyOutDir: true,
    minify: 'terser',
    sourcemap: false,
  },
  server: {
    port,
    strictPort: false,
    host: '0.0.0.0',
    // allow access from external network (useful in CI / Replit dev), safe for Vercel as it's ignored
    fs: {
      strict: false,
    },
  },
  preview: {
    port,
    host: '0.0.0.0',
  },
});
