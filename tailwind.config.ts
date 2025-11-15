// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class',
    content: [
        './node_modules/flowbite/**/*.js',
        './node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/Inertia/**/*.vue',
    ],
    theme: {

    },
    plugins: [
        require('flowbite/plugin')
    ],
}

export default config
