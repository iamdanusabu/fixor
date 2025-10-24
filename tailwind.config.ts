// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  // This line activates the 'prose' classes
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config