import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Manrope', ...defaultTheme.fontFamily.sans],
      roboto: ['Roboto', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      transformOrigin: {
        0: '0%'
      },
      zIndex: {
        '-1': '-1'
      },
      flex: {
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6'
      },
      colors: {
        background: '#fff',
        drawer: '#151A2F',
        navbar: '#A2A3A4',
        admin: '#0035A0',
        'admin-primary': '#001540',
        'input-border': '#DDD',
        'primary-300': '#00599D',
        active: '#19D02BFA',
        inactive: '#F1E800FA',
        'blue-gradient': '#0047FF',
        'green-gradient': '#60BB46',
        'card-link-border': '#E5E7E9',
        'card-link-bg': 'rgba(0, 136, 241, 0.08)',
        'card-link': '#0088F1',
        'gray-200': '#F8F8F8',
        disabled: '#F0F0F0'
      }
    },
    variants: { borderColor: ['responsive', 'hover', 'focus', 'focus-within'] }
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: '#0088F1',
          'primary-content': '#fff',
          secondary: '#01071D',
          accent: '#81D61E',
          neutral: '#16181C',
          'base-100': '#f5f5f5',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#e74c3c'
        }
      }
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark'
  }
}
