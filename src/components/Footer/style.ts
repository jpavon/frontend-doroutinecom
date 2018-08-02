import styled from 'styled-components'

import { theme } from 'styles'
import Button from 'components/Button'

export const Footer = styled.footer`
    position: relative;
    padding-top: 1rem;
    padding-bottom: 6rem;
    text-align: center;
    background-color: ${theme.colorBackgroundLight};

    .app & {
        background-color: transparent;
        padding-top: 0;
    }
`

export const FooterInner = styled.div`
    padding: ${theme.spacing}px;
`

export const FooterItem = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #666;
    margin-bottom: 1rem;
    font-size: 0.8rem;
`

export const FooterButton = styled(Button)`
    display: inline-flex;
    font-size: 0.8rem;
    margin-left: ${theme.spacing / 2}px;
    padding: 0;
`
