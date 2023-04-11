import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      'serif': ['Inter']
    }
  },
  plugins: [],
} satisfies Config;
