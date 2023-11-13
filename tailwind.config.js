// const { Manrope } = require("next/font/google");

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
        { lineHeight: '130%', fontWeight: '800', letterSpacing: '-4%' }
      ],
      h2: [
        '64px',
        { lineHeight: '130%', fontWeight: '600', letterSpacing: '-4%' }
      ],
      '2h2': [
        '64px',
        { lineHeight: '130%', fontWeight: '600', letterSpacing: '-2.56px' }
      ],
      cardHeading: [
        '68px',
        { lineHeight: '90%', fontWeight: '700', letterSpacing: '-4%' }
      ],
      xxxl: [
        '56px',
        { lineHeight: '140%', fontWeight: '500', letterSpacing: '-4%' }
      ],
      xxl: [
        '48px',
        { lineHeight: '130%', fontWeight: '600', letterSpacing: '-4%' }
      ],
      xl: [
        '40px',
        { lineHeight: '130%', fontWeight: '600', letterSpacing: '-4%' }
      ],
      lg: [
        '36px',
        { lineHeight: '130%', fontWeight: '500', letterSpacing: '-4%' }
      ],
      md: [
        '32px',
        { lineHeight: '130%', fontWeight: '600', letterSpacing: '-4%' }
      ],
      packageTitle: [
        '28px',
        { lineHeight: '130%', fontWeight: '400', letterSpacing: '-4%' }
      ],
      sm: [
        '24px',
        { lineHeight: '120%', fontWeight: '500', letterSpacing: '0' }
      ],
      '2sm': [
        '24px',
        { lineHeight: '170%', fontWeight: '400', letterSpacing: '0' }
      ],
      xs: [
        '20px',
        { lineHeight: '120%', fontWeight: '400', letterSpacing: '-4%' }
      ],
      '2xs': [
        '20px',
        { lineHeight: '110%', fontWeight: '600', letterSpacing: '-4%' }
      ],
      '3xs': [
        '20px',
        { lineHeight: '160%', fontWeight: '400', letterSpacing: '-4%' }
      ],
      xxs: [
        '16px',
        { lineHeight: '110%', fontWeight: '400', letterSpacing: '0px' }
      ],
      xxxs: [
        '12px',
        { lineHeight: '110%', fontWeight: '400', letterSpacing: '0' }
      ],
      tiny: ['10px']
    },
    colors: {
      primary: '#E50914',
      white: '#FFFFFF',
      black: '#000000',
      dark: '#191919',
      secondary: '#141414', //text
      transparent: 'rgba(0,0,0,0)',
      gray: '#FFFFFF99',
      border: '#F5F1F1',
      green: '#27AE60'
    },
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
      backgroundImage: {
        'streaming-service': "url('/images/streaming-service.png')",
        'checkmark': "url('/images/icons/checkmark.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
        // 'available-devices': "url('/images/devices.png')",
      }
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
};
