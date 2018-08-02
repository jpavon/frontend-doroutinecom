import styled, { css } from 'styled-components'
import { rgba } from 'polished'

import { theme, mixins } from 'styles'

export const inputStyles = css`
    position: relative;
    margin-bottom: 0;
    padding: ${theme.spacing / 2}px 0;
    width: 100%;

    font-size: 0.9rem;
    border-radius: 3px;
    background-color: transparent;
    color: ${theme.colorFont};
    border: 0;

    ${mixins.inputBackgroundColor('transparent')};

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill {
        -webkit-text-fill-color: ${theme.colorFont};
    }

    &:focus {
        outline: 0;
    }

    &[type='number']::-webkit-outer-spin-button,
    &[type='number']::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &[type='number'] {
        -moz-appearance: textfield;
        -webkit-appearance: textfield;
        appearance: textfield;
    }

    ${mixins.placeholder(rgba(theme.colorFont, 0.5))};
`

export const Input = styled.input`
    ${inputStyles};
`
