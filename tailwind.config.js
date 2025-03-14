/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",  // Si usas el nuevo "app" router de Next.js
      "./pages/**/*.{js,ts,jsx,tsx}",  // Si usas el viejo "pages" router
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  