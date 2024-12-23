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
                'oxford-blue': {
                    '50': '#f3f7f8',
                    '100': '#dfeaee',
                    '200': '#c3d5de',
                    '300': '#99b7c7',
                    '400': '#6890a8',
                    '500': '#4d758d',
                    '600': '#436177',
                    '700': '#3b5163',
                    '800': '#364654',
                    '900': '#313d49',
                    '910': '#29333d',
                    '950': '#1d262f',
                },

            },
            fontFamily: {
                header: ['var(--font-header)'],
                content: ['var(--font-content)']
            },
            fontSize: {
                '2xs': '0.66rem',
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
            },
            flexBasis: {
                '1/7': '14.2857143%',
                '2/7': '28.5714286%',
                '3/7': '42.8571429%',
                '4/7': '57.1428571%',
                '5/7': '71.4285714%',
                '6/7': '85.7142857%',
            }
        },
    },
    plugins: [],
};
export default config;
