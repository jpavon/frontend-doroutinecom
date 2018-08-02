import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { lighten } from 'polished'

import { theme } from 'styles'

const buttonColor = (color: string) => css`
    color: ${color};

    &:hover {
        color: ${lighten(0.15, color)};
    }
`

const DefaultButton = styled.base<{ danger?: boolean }>`
    ${buttonColor(theme.colorPrimary)};
    display: flex;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    border: 0;
    padding: ${theme.spacing}px 0;
    font-size: 0.9rem;
    border-radius: 0;
    text-decoration: none;
    letter-spacing: 0.05rem;
    cursor: pointer;
    outline: none;
    text-shadow: none;
    background-color: transparent;
    transition: color 0.2s;

    line-height: 1.5;
    -webkit-appearance: none;

    input + & {
        margin-top: 1rem;
    }

    &:focus {
        outline: none;
    }

    &.disabled,
    &[disabled] {
        cursor: default;
        opacity: 0.7;
        box-shadow: none;
    }

    ${(props) =>
        props.danger &&
        css`
            ${buttonColor(theme.colorDanger)};
        `};
`

export const Button = DefaultButton.withComponent('button')

export const AnchorButton = DefaultButton.withComponent('a')

export const LinkButton = DefaultButton.withComponent(Link)
