import type {Config} from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            keyframes: {
                bounceFade: {
                    '0%': {
                        transform: 'translateY(0) scaleX(0.75)', // Start at 50% width
                        opacity: '0.5', // Start faded
                    },
                    '50%': {
                        transform: 'translateY(10px) scaleX(1)', // Midpoint at full width
                        opacity: '0.75', // Slight fade
                    },
                    '100%': {
                        transform: 'translateY(0) scaleX(0.75)', // Return to 50% width
                        opacity: '0.5', // Fully transparent
                    },
                },
            },
            animation: {
                bounceFade: 'bounceFade 1.5s cubic-bezier(0.25, 1, 0.5, 1) infinite', // Bouncier easing curve
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                "grey-400": "#4F4A4F",
                "grey-800": "#222220"
            },
            fontFamily: {
                "beiruti": ["Beiruti", "sans-serif"],
                "faculty-glyphic": ["Faculty Glyphic", "sans-serif"],
            }
        },
    },
    // plugins: [],
    plugins: [require("@tailwindcss/forms")],
} satisfies Config;
