module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontWeight: {
      light: 300,
      normal: 400,
      bold: 600,
      extrabold: 700,
    },
    colors: {
      primary: {
        50: '#E6F7FD',
        100: '#CCEFFA',
        200: '#A6E3F6',
        500: '#5ACCEF',
        600: '#34C0EB',
        700: '#01B0E6',
        800: '#0599C7',
        900: '#016F92',
      },
      yellow: {
        50: '#FCFAE6',
        600: '#F4E894',
        700: '#F1E37B',
        800: '#EDDB58',
      },
      gray: {
        50: '#F9F9F9',
        100: '#ECEEEE',
        700: '#808B8B',
        800: '#616F6F',
        900: '#344242',
      },
      black: '#344242',
      white: '#FFFFFF',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.5rem',
      xl: '1.875rem',
      '2xl': '2.25rem',
    },
    extend: {},
  },
  plugins: [],
};
