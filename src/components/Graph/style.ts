import styled from 'styled-components'
import { rgba } from 'polished'

import { theme } from 'styles'

export const GraphEmpty = styled.div`
    padding: ${theme.spacing}px ${theme.spacing * 2}px;
    margin-bottom: ${theme.spacing}px;

    background-color: ${rgba(theme.colorPrimary, 0.5)};
    color: #fff;
    text-align: center;

    @media (max-width: 500px) {
        padding: ${theme.spacing / 2}px ${theme.spacing}px;
    }
`
