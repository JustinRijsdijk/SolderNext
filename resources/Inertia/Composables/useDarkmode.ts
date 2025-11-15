export function useDarkMode() {
    const prefersDark = globalThis.matchMedia('(prefers-color-scheme: dark)');

    function apply(theme: string) {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }

    function getInitialTheme() {
        const stored = localStorage.getItem('theme');
        if (stored === 'dark' || stored === 'light') {
            return stored;
        }
        return prefersDark.matches ? 'dark' : 'light';
    }

    function initTheme() {
        apply(getInitialTheme());
    }

    function toggleTheme() {
        const isDark = document.documentElement.classList.toggle('dark');
        const newTheme = isDark ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        apply(newTheme);
    }

    return {
        initTheme,
        toggleTheme
    };
}
