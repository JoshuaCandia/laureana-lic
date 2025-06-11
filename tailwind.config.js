/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#345c9c", // Azul noche - encabezados, texto fuerte
        secondary: "#fdfdfd", // Blanco nieve - fondo principal
        accent: "#6ba8e5", // Azul cielo - botones, íconos llamativos
        muted: "#7a7a7a", // Gris humo - texto secundario
        light: "#e9f3fb", // Azul cielo muy claro - fondos alternativos suaves
        dark: "#1f2e5c", // Azul oscuro para contrastes o pie de página
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Lora", "Georgia", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "bounce-gentle": "bounceGentle 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bounceGentle: {
          "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(-10px)" },
          "60%": { transform: "translateY(-5px)" },
        },
      },
    },
  },
  plugins: [],
};
