import {Halant, IBM_Plex_Sans, Google_Sans_Code } from 'next/font/google'

export const headerFont = Halant({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-header',
    display: 'swap',
});

export const contentFont = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700'],
    variable: '--font-content',
    display: 'swap',
});

export const monoFont = Google_Sans_Code({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-content',
    display: 'swap',
});
