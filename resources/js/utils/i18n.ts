import { createI18n } from 'vue-i18n';
import { loadLocaleMessages } from '@/js/utils/i18nLoader';

export const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: document.documentElement.lang || 'en',
    fallbackLocale: 'en',
    messages: loadLocaleMessages(),
});
