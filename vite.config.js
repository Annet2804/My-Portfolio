import { resolve } from 'path';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    base: 'My-Portfolio',
    plugins: [
        tailwindcss(),
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                portfolio: resolve(__dirname, 'portfolio.html'),
            },
        },
    },
});