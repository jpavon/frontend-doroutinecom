import styled, { css } from 'styled-components'
import { darken } from 'polished'
import { theme } from 'styles'

interface Props {
    size: string | undefined
    type: string | undefined
}

export const AlertWrapper = styled.div<Props>`
    display: block;
    padding: 1rem;
    margin-bottom: 1.5rem;
    text-align: center;
    font-size: 1rem;
    color: #fff;
    font-weight: 500;
    line-height: 1.5;
    opacity: 1;

    ${(props) =>
        props.type === 'success' &&
        css`
            background-color: ${theme.colorSuccess};
            text-shadow: 0 1px 2px ${darken(0.15, theme.colorSuccess)};
        `}

    ${(props) =>
        props.type === 'error' &&
        css`
            background-color: ${theme.colorDanger};
            text-shadow: 0 1px 2px ${darken(0.15, theme.colorDanger)};
        `}

    ${(props) =>
        props.type === 'info' &&
        css`
            background-color: ${theme.colorInfo};
            text-shadow: 0 1px 2px ${darken(0.15, theme.colorInfo)};
        `}

    ${(props) =>
        props.size === 'small' &&
        css`
            padding: ${theme.spacingSmall}px;
            font-size: 0.8rem;
            line-height: 1.1;
            margin-bottom: 0;
            border-width: 1px;
        `}
`
