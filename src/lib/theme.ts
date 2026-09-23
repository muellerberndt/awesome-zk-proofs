export type Theme = 'dark' | 'light';

const STORAGE_KEY = 'fp-theme';

/** Reads the stored choice, falling back to the operating system preference. */
export function resolveTheme(): Theme {
    if (typeof window === 'undefined') return 'dark';
    try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored === 'dark' || stored === 'light') return stored;
    } catch {
        /* private mode or blocked storage: fall through to the system preference */
    }
    return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export function applyTheme(theme: Theme) {
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'light' ? '#f7f7fb' : '#08080b');
}

export function storeTheme(theme: Theme) {
    try {
        window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
        /* the toggle still works for this page view without persistence */
    }
}

/**
 * Calls back when the system preference changes, but only while the visitor
 * has not made an explicit choice of their own.
 */
export function watchSystemTheme(onChange: (theme: Theme) => void): () => void {
    if (typeof window === 'undefined' || !window.matchMedia) return () => undefined;
    const query = window.matchMedia('(prefers-color-scheme: light)');
    const handler = (event: MediaQueryListEvent) => {
        try {
            if (window.localStorage.getItem(STORAGE_KEY)) return;
        } catch {
            /* unreadable storage means no explicit choice was recorded */
        }
        onChange(event.matches ? 'light' : 'dark');
    };
    query.addEventListener('change', handler);
    return () => query.removeEventListener('change', handler);
}
