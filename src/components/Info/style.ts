import styled from 'styled-components'
import { darken, rgba } from 'polished'

import { theme } from 'styles'

export const Info = styled.div`
    margin-bottom: ${theme.spacing}px;

    .button {
        padding: 0;
        margin: auto;
        color: ${darken(0.15, theme.colorInfo)};
    }
`

export const InfoContent = styled.div`
    margin-top: ${theme.spacing}px;
    padding: ${theme.spacing * 2}px;
    background-color: ${rgba(theme.colorInfo, 0.1)};
    border: 1px solid ${rgba(theme.colorInfo, 0.2)};

    h2 {
        font-weight: 500;
    }

    p {
        font-size: 0.95rem;
        margin-bottom: ${theme.spacing * 1.5}px;
        line-height: 1.5;

        &:last-child {
            margin-bottom: 0;
        }
    }
`
