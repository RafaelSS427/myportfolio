import { create } from 'zustand'

export type Theme = 'dark' | 'light'

interface BookProps {
    theme: Theme;
}

interface BookState extends BookProps {
    updateTheme: (theme: Theme) => void;
}

export const useBookStore = create<BookState>(( set ) => ({
    theme: 'dark',
    updateTheme: (theme: Theme) => {
        set(store => ({ ...store, theme }));
    },
}))