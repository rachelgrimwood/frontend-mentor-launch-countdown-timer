/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "grayish-blue": "hsl(237, 18%, 59%)",
      "soft-red": "hsl(345, 95%, 68%)",
      white: "hsl(0, 0%, 100%)",
      "dark-blue": "hsl(236, 21%, 26%)",
      "very-dark-blue": "hsl(235, 16%, 14%)",
      "blue-black": "hsl(234, 17%, 12%)",
    },
    extend: {
      fontFamily: {
        redhat: ["Red Hat Text", "sans-serif"],
      },
    },
  },
  plugins: [],
};
