/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: "#050810",
                secondary: "#09101d",
                accent: "#32c7ff",
                "accent-glow": "#247cff",
                mint: "#7cf5cc",
                amber: "#f6c86e",
                text: "#f2f7ff",
                "text-muted": "#9aabc2",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s cubic-bezier(.2,.8,.2,1) forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
