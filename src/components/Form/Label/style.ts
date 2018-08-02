import styled from 'styled-components'
import { lighten } from 'polished'

import { theme } from 'styles'

export const Label = styled.label`
    display: block;
    font-size: 0.8rem;
    font-weight: 400;
    letter-spacing: 0.05rem;
    margin-right: ${theme.spacing}px;
    color: ${lighten(0.2, theme.colorFont)};

    label + * + & {
        margin-top: 1rem;
    }
`
