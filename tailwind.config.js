// const { Manrope } = require("next/font/google");

const { createThemes } = require('tw-colors');
/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      xl: '1728px',
      lg: '1080px',
      sm: '896px',
      xs: '0px'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        lg: '208px'
      }
    },
    fontFamily: {
      manrope: 'Manrope, sans-serif'
    },
    fontSize: {
      h1: [
        '74px',
        { lineHeight: '130%', fontWeight: '800', letterSpacing: '-2.96px' }
      ],
      '2h1': [
        '72px',
        { lineHeight: '130%', fontWeight: '800', letterSpacing: '-2.88px' }
      ],
      h2: [
        '64px',
        { lineHeight: '130%', fontWeight: '600', letterSpacing: '-2.56px' }
      ],
      '2h2': [
        '64px',
        { lineHeight: '130%', fontWeight: '600', letterSpacing: '-2.56px' }
      ],
      cardHeading: [
        '68px',
        { lineHeight: '90%', fontWeight: '700', letterSpacing: '-2.72px' }
      ],
      xxxl: [
        '56px',
        { lineHeight: '120%', fontWeight: '600', letterSpacing: '-2.24px' }
      ],
      xxl: [
        '48px',
        { lineHeight: '130%', fontWeight: '600', letterSpacing: '-1.92px' }
      ],
      xl: [
        '40px',
        { lineHeight: '130%', fontWeight: '600', letterSpacing: '-1.6px' }
      ],
      lg: [
        '36px',
        { lineHeight: '130%', fontWeight: '500', letterSpacing: '-1.44px' }
      ],
      md: [
        '32px',
        { lineHeight: '130%', fontWeight: '600', letterSpacing: '-1.28px' }
      ],
      packageTitle: [
        '28px',
        { lineHeight: '130%', fontWeight: '400', letterSpacing: '-0.96px' }
      ],
      sm: ['24px', { lineHeight: '120%', letterSpacing: '0' }],
      '2sm': ['24px', { lineHeight: '170%', letterSpacing: '0' }],
      '3sm': ['24px', { lineHeight: '130%', letterSpacing: '-0.96px' }],

      xs: ['20px', { lineHeight: '120%', letterSpacing: '-0.8px' }],
      '2xs': ['20px', { lineHeight: '110%', letterSpacing: '-0.8px' }],
      '3xs': ['20px', { lineHeight: '160%', letterSpacing: '-0.8px' }],
      '4xs': ['20px', { lineHeight: '130%', letterSpacing: '-0.96px' }],

      xxs: ['16px', { lineHeight: '110%', letterSpacing: '0px' }],
      '2xxs': ['16px', { lineHeight: '130%', letterSpacing: '-0.64px' }],
      '3xxs': ['16px', { lineHeight: '110%', letterSpacing: '-0.64px' }],
      '4xxs': ['16px', { lineHeight: '160%', letterSpacing: '-0.64px' }],

      xxxs: [
        '12px',
        { lineHeight: '110%', fontWeight: '400', letterSpacing: '0' }
      ],
      '2xxxs': [
        '12px',
        { lineHeight: '130%', fontWeight: '400', letterSpacing: '-0.48px' }
      ],

      tinyxs: ['14px', { lineHeight: '130%', letterSpacing: '-0.96px' }],
      tiny: ['10px']
    },
    // colors: {
    //   primary: '#E50914',
    //   white: '#FFFFFF',
    //   black: '#000000',
    //   dark: '#191919',
    //   secondary: '#141414', //text
    //   transparent: 'rgba(0,0,0,0)',
    //   gray: '#FFFFFF99',
    //   border: '#F5F1F1',
    //   green: '#27AE60'
    // },
    borderRadius: {
      none: '0',
      DEFAULT: '4px',
      xm: '8px',
      sm: '16px',
      md: '20px',
      lg: '24px',
      xl: '32px',
      xxl: '40px',
      full: '9999px'
    },
    extend: {
      flex: {
        2: '2 2 0%',
        3: '3 3 0%'
      },
      rotate: {
        15: '15deg'
      },
      lineHeight: {
        120: '120%',
        130: '130%',
        140: '140%',
        150: '150%',
        160: '160%',
        170: '170%'
      },
      backgroundImage: {
        'streaming-service':
          "url('/images/people-watching-streaming-service-together-indoors.png')",
        checkmark: "url('/images/icons/checkmark.svg')",
        'checkmark-light': "url('/images/icons/checkmark-light.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
        // 'available-devices': "url('/images/devices.png')",
      }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    createThemes({
      light: {
        primary: '#E50914',
        body: '#fff',
        tertiary: '#000',
        white: '#FFFFFF',
        black: '#000000',
        dark: '#F8F8F8',
        secondary: '#141414',
        secondary2: '#8D8D8D', //name change later
        transparent: 'rgba(0,0,0,0)',
        gray: '#FFFFFF99',
        border: '#F5F1F1',
        green: '#27AE60'
      },
      dark: {
        primary: '#E50914',
        body: '#000',
        tertiary: '#FFF',
        white: '#FFFFFF',
        black: '#000000',
        dark: '#191919', //secondary
        secondary: '#fff', //text
        secondary2: '#6F6F6F', //name change later
        transparent: 'rgba(0,0,0,0)',
        gray: '#FFFFFF99',
        border: '#F5F1F1',
        green: '#27AE60'
      }
    })
  ]
};
