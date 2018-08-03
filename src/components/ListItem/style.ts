import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { theme } from 'styles'

export const ListItem = styled(Link)`
    position: relative;
    display: block;
    font-size: 1em;
    padding: ${theme.spacing - 4}px ${theme.spacing}px;
    text-decoration: none;
    border-bottom: 1px solid ${theme.colorBorder};
    transition: border-color 0.2s;
    background-color: transparent;
    transition: color 0.2s, background-position 0.2s;

    &:hover,
    &:focus {
        color: ${theme.colorPrimary};
        background-position: right ${theme.spacing / 1.5}px center;

        & [class*='-day'] {
            color: ${theme.colorFont};
        }
    }

    & [class*='-day'] {
        color: ${theme.colorFont};
    }

    &:first-child {
        border-top: 1px solid ${theme.colorBorder};
    }

    svg {
        position: absolute;
        top: 50%;
        margin-top: -10px;
        right: ${theme.spacing}px;
    }
`

export const ListItemInfo = styled.div`
    font-size: 0.9rem;
    margin-top: 0.5rem;
`
