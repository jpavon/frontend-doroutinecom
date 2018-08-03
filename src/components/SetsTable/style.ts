import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { Link } from 'react-router-dom'

import { theme } from 'styles'

const layout = css`
    padding-right: ${theme.spacing / 2}px;
    flex: 1;

    &.right {
        text-align: right;
    }

    @media (max-width: 600px) {
        &.number {
            flex: 0 0 20%;
        }
    }
`

export const SetsTableTop = styled.div`
    display: flex;
    padding: ${theme.spacing / 1.5}px ${theme.spacing}px;

    background-color: ${rgba(theme.colorPrimary, 0.1)};
    border-bottom: 1px solid ${rgba(theme.colorPrimary, 0.15)};

    > div {
        ${layout};
        align-self: flex-end;
        font-size: 13px;
        letter-spacing: 0.1em;

        &:first-letter {
            text-transform: capitalize;
        }
    }
`

export const SetsTableItem = styled(Link)`
    display: flex;
    padding: ${theme.spacing / 2}px ${theme.spacing}px;
    border-bottom: 1px solid ${theme.colorBorder};
    transition: 0.2s color;

    > div {
        ${layout};
        align-self: center;
    }

    &:hover {
        color: ${theme.colorPrimary};
    }
`
