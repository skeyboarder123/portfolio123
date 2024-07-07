import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src/01-app/'),
      '@pages': path.resolve(__dirname, 'src/02-pages/'),
      '@widgets': path.resolve(__dirname, 'src/03-widgets/'),
      '@features': path.resolve(__dirname, 'src/04-features/'),
      '@entities': path.resolve(__dirname, 'src/05-entities/'),
      '@shared': path.resolve(__dirname, 'src/06-shared/'),
    },
  },
});
