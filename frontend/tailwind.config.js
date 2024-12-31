/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#12B7F2",
        priamry: "#3286DB",
        priamryBg: "#F4FAFF",
        borders: "#2F323A",
        bgColor: "#E2E1DF",
        secondaryC: "#FF9100",
        secondaryText: "#A69C88",
        card: "#C7C4C2",
        card2: "#C7C4C2"
      }, 
    },
    fontFamily: {
      'primary': ['Poppins','serif'],
      'logo': ["Pacifico", 'serif'],
    },
    fontWeight: { 
      bold: 700,
      semibold: 600,
     }
  },
  plugins: [],
}

