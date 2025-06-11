// tailwind.config.js
module.exports = {
    content: [
        './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
        // otras rutas
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: 0 },
                    '100%': { transform: 'translateY(0)', opacity: 1 },
                },
            },
            animation: {
                fadeIn: 'fadeIn 1s ease-out',
                slideUp: 'slideUp 1s ease-out',
            },
        },
    },
    plugins: [
        require('tailwindcss-animate'),
        // Agrega otros plugins si es necesario
    ],
};