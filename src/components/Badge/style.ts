import styled from 'styled-components'
import { darken, rgba } from 'polished'

import { theme } from 'styles'

export const BadgeWrapper = styled.div`
    display: inline-block;
    width: 22px;
    height: 22px;

    line-height: 22px;
    background: ${rgba(theme.colorPrimary, 0.7)};
    text-align: center;
    border-radius: 50%;
    color: ${theme.colorBackground};
    font-size: 0.8rem;
    font-weight: 500;
    text-shadow: 0 1px 2px ${darken(0.15, rgba(theme.colorPrimary, 0.7))};
`
