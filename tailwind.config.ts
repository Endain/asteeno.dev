import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                'steel-blue': '#333f49'
            },
            fontFamily: {
                header: ['var(--font-header)'],
                content: ['var(--font-content)']
            },
            screens: {
                print: {raw: 'print'},
                screen: {raw: 'screen'},
            },
            spacing: {
                'base-width': "var(--base-width)",
            },
            width: {
                'print-width': "var(--print-width)"
            },
            height: {
                'print-height': "var(--print-height)"
            }
        },
    },
    plugins: [],
};
export default config;
