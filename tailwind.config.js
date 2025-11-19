/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./sections/*.html"],
    theme: {
        extend: {
            animation: {
                'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            colors: {
                primary: '#1e3a8a', // deep navy
                secondary: '#06b6d4', // electric blue
                accent: '#10b981', // neon green
            },
        },
    },
    plugins: [],
}