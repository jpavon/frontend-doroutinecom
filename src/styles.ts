import { createGlobalStyle, css } from 'styled-components'
import styledNormalize from 'styled-normalize'

export const theme = {
    fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    colorBackground: '#fff',
    colorBackgroundLight: '#fff',

    colorFont: '#444',

    colorPrimary: '#4c90c2',
    colorDanger: '#d05151',
    colorSuccess: '#6ec36e',
    colorInfo: '#ecca51',

    colorBorder: '#f1f1f1',

    colorInputBackground: 'rgba(#000, 0.2)',
    colorBorderInput: '#aaa',
    colorBorderInputActive: 'lighten(#ddd, 10%)',

    spacing: 18,
    spacingSmall: 5,

    zIndexTooltip: 100
}

export const mixins = {
    placeholder: (color: string) => css`
        &::-webkit-input-placeholder {
            color: ${color};

            &:-webkit-autofill,
            &:-webkit-autofill:hover,
            &:-webkit-autofill:focus,
            &:-webkit-autofill {
                -webkit-text-fill-color: ${color};
            }
        }
        &:-moz-placeholder {
            color: ${color};
        }
        &::-moz-placeholder {
            color: ${color};
        }
        &:-ms-input-placeholder {
            color: ${color};
        }
        &::-ms-input-placeholder {
            color: ${color};
        }
        &::placeholder {
            color: ${color};
        }
    `,
    inputBackgroundColor: (color: string) => css`
        background-color: ${color};

        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill {
            -webkit-box-shadow: 0 0 0 50px transparent inset,
                0 0 0 50px ${color} inset;
            box-shadow: 0 0 0 50px transparent inset, 0 0 0 50px ${color} inset;
        }
    `
}

export const GlobalStyles = createGlobalStyle`
    ${styledNormalize}

    html {
        box-sizing: border-box;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-kerning: auto;
        -webkit-text-size-adjust: 100%;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
        text-rendering: inherit;
        -webkit-font-smoothing: inherit;
        -moz-osx-font-smoothing: inherit;
        font-kerning: inherit;
        -webkit-text-size-adjust: inherit;
    }

    body {
        font-family: ${theme.fontFamily};
        color: ${theme.colorFont};
        overflow-y: scroll;
        background-color: ${theme.colorBackground};
        font-weight: 400;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: 400;
        margin: 0;
        margin-bottom: 0.4rem;
    }

    h2 {
        font-size: 1.1rem;
    }

    img, svg {
        max-width: 100%;
        height: auto;
    }

    p {
        font-size: 1rem;
    }

    a {
        font-size: 0.9rem;
        color: ${theme.colorFont};
        text-decoration: none;

        transition: 0.2s all;

        &:hover,
        &:focus {
            color: ${theme.colorPrimary};
        }
    }

    small {
        font-size: 0.8rem;
        font-weight: 400;
        letter-spacing: 0.05rem;
        color: #777777;
    }
`
