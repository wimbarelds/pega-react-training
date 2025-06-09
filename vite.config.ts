import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ command }) => {
  if (command !== 'build') {
    return {
      plugins: [react(), tailwindcss()],
    };
  }
  return {
    base: '/pega-react-training/',
    plugins: [react(), tailwindcss()],
  };
});
