import { create } from 'zustand'

export type Theme = 'dark' | 'light'

interface BookProps {
    theme: Theme;
    isOpenMenuMobile: boolean;
}

interface BookState extends BookProps {
    updateTheme: (theme: Theme) => void;
    setIsOpenMenuMobile: (value: boolean) => void;
}

export const useBookStore = create<BookState>(( set ) => ({
    theme: 'dark',
    isOpenMenuMobile: false,

    updateTheme: (theme: Theme) => {
        set(store => ({ ...store, theme }));
    },
    setIsOpenMenuMobile: (value) => {
        set(store => ({ ...store, isOpenMenuMobile: value }));
    },
}))