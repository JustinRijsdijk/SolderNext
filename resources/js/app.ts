import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import '@/css/app.css'
import 'flowbite';
import {i18n} from '@/js/utils/i18n'

import { useDarkMode } from '@/Inertia/Composables/useDarkMode';

//@ts-ignore
const pages = import.meta.glob('../Inertia/Pages/**/*.vue', { eager: false });

const { initTheme } = useDarkMode();
initTheme();

createInertiaApp({
    resolve: name => {
        const path = `../Inertia/Pages/${name}.vue`;
        const loader = pages[path];

        if (!loader) {
            throw new Error(`Inertia page not found: ${path}`);
        }

        return loader();
    },
    setup({el, App, props, plugin}) {
        createApp({render: () => h(App, props)})
            .use(plugin)
            .use(i18n)
            .mount(el)
    }
})