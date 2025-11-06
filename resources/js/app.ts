import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import '../css/app.css'
import 'flowbite';
import flowbitePlugin from "flowbite/plugin";
import { createI18n } from 'vue-i18n'
import ziggy from 'ziggy'

const pages = import.meta.glob('../Inertia/Pages/**/*.vue', { eager: false });

const i18n = createI18n({
    // something vue-i18n options here ...
})

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
            .use(flowbitePlugin)
            .use(i18n)
            .use(ziggy)
            .mount(el)
    }
})