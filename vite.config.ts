import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'
import { wayfinder } from "@laravel/vite-plugin-wayfinder";
import path from 'path';


export default defineConfig({
    server: {
        hmr: {
            host: 'technicsolder.test',
            protocol: 'wss',
        },
    },
    plugins: [
        laravel({
            input: [
                'resources/js/app.ts',
                'resources/css/app.css'
            ],
            refresh: true
        }),
        vue(),
        wayfinder(),
    ],
    resolve: {
        alias: {
            '~': path.resolve(__dirname, ''),
            '@': path.resolve(__dirname, 'resources'),
            '@node_modules': path.resolve(__dirname, 'node_modules'),
            '@lang': path.resolve(__dirname, 'lang'),
        },
    },
})
