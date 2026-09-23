import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Theme, applyTheme, resolveTheme, storeTheme, watchSystemTheme } from '../lib/theme';

export const ThemeToggle = () => {
    const [theme, setTheme] = useState<Theme>(() => resolveTheme());

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    useEffect(() => watchSystemTheme(setTheme), []);

    const toggle = () => {
        const next: Theme = theme === 'dark' ? 'light' : 'dark';
        storeTheme(next);
        setTheme(next);
    };

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            title={theme === 'dark' ? 'Light theme' : 'Dark theme'}
            className="relative grid h-8 w-8 place-items-center rounded-md border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-muted)] transition-colors hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
        >
            <Sun
                className="absolute h-4 w-4 transition-all duration-300 data-[hidden=true]:scale-50 data-[hidden=true]:opacity-0"
                data-hidden={theme === 'dark'}
            />
            <Moon
                className="absolute h-4 w-4 transition-all duration-300 data-[hidden=true]:scale-50 data-[hidden=true]:opacity-0"
                data-hidden={theme === 'light'}
            />
        </button>
    );
};
