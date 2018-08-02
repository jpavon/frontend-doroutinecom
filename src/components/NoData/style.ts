import styled from 'styled-components'

import { theme } from 'styles'

export const NoData = styled.div`
    width: 100%;
    padding: ${theme.spacing}px;
    border-top: 1px solid ${theme.colorBorder};
    text-align: center;
    color: lighten(${theme.colorFont}, 30%);
`
