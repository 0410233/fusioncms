const defaultTheme = require('tailwindcss/defaultTheme')
const { colors } = require('tailwindcss/defaultTheme')

const cursors = {
    auto: 'auto',
    default: 'default',
    pointer: 'pointer',
    wait: 'wait',
    text: 'text',
    move: 'move',
    'not-allowed': 'not-allowed',
    'ns-resize': 'ns-resize',
}

const screens = {
    'xs': '320px',
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    'xxl': '1600px',
    'xxxl': '1800px',
}

const spacing = {
    '28': '7rem',
    // '32': '8rem',

    '45px': '45px',
    '50px': '50px',
    '60px': '60px',
    '75px': '75px',
    '90px': '90px',
    '100px': '100px',
    '250px': '250px',
    '300px': '300px',
    '400px': '400px',

    'full-sidebar-open': 'calc(100% - 250px)',
    'full-sidebar-collapsed': 'calc(100%)',
}

module.exports = {
    theme: {
        cursors: cursors,

        screens: screens,

        boxShadow: {
            'default': '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)',
            'md': ' 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)',
            'lg': ' 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)',
            'xl': ' 0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, .25)',
            '3xl': '0 35px 60px -15px rgba(0, 0, 0, .3)',
            'inner': 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
            'focus': '0 0 0 3px rgba(160,174,192,0.5)',
            'focus-success': '0 0 0 3px rgba(72,187,120,0.5)',
            'focus-danger': '0 0 0 3px rgba(245,101,101,0.5)',
            'none': 'none',
        },

        colors: {
            'transparent': 'rgba(0, 0, 0, 0)',
            'black': '#000000',
            'white': '#ffffff',
            'emoji': '#fbd043',

            'smoke': {
                100: 'rgba(35, 42, 60, 0.1)',
                200: 'rgba(35, 42, 60, 0.2)',
                300: 'rgba(35, 42, 60, 0.3)',
                400: 'rgba(35, 42, 60, 0.4)',
                500: 'rgba(35, 42, 60, 0.5)',
                600: 'rgba(35, 42, 60, 0.6)',
                700: 'rgba(35, 42, 60, 0.7)',
                800: 'rgba(35, 42, 60, 0.8)',
                900: 'rgba(35, 42, 60, 0.9)',
            },

            'brand': {
                100: '#FFEEE9',
                200: '#FFD5C8',
                300: '#FFBCA7',
                400: '#FF8964',
                500: '#FF5722',
                600: '#E64E1F',
                700: '#993414',
                800: '#73270F',
                900: '#4D1A0A',
            },

            'primary': {
                100: '#FFEEE9',
                200: '#FFD5C8',
                300: '#FFBCA7',
                400: '#FF8964',
                500: '#FF5722',
                600: '#E64E1F',
                700: '#993414',
                800: '#73270F',
                900: '#4D1A0A',
            },

            'secondary': {
                100: '#EDFAFC',
                200: '#D3F3F8',
                300: '#B8ECF3',
                400: '#82DEEA',
                500: '#4DD0E1',
                600: '#45BBCB',
                700: '#2E7D87',
                800: '#235E65',
                900: '#173E44',
            },

            'gray': {
                50: '#f9faf',
                ...colors.gray
            },
            'info': colors.blue,
            'success': colors.green,
            'warning': colors.yellow,
            'danger': colors.red,
        },

        extend: {
            fontFamily: {
                sans: [
                    'Source Sans Pro',
                    ...defaultTheme.fontFamily.sans,
                ],

                serif: [
                    'Montserrat',
                    ...defaultTheme.fontFamily.serif,
                ],
            },

            spacing: {
                ...spacing,
            },

            width: {
                ...screens,
                ...spacing,
            },

            minWidth: {
                ...screens,
                ...spacing,
            },

            maxWidth: {
                ...screens,
                ...spacing,
            },

            height: {
                ...screens,
                ...spacing,
            },

            minHeight: {
                ...screens,
                ...spacing,
            },

            maxHeight: {
                ...screens,
                ...spacing,
            },

            padding: {
                ...spacing,
            },
        }
    },

    plugins: [
        // require('@tailwindcss/ui')
    ],
}