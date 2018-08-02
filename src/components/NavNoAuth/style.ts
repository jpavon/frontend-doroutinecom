import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { theme } from 'styles'

export const NavNoAuthLogo = styled.div`
    margin: ${theme.spacing * 2}px 0 ${theme.spacing * 3}px;
    text-align: center;
`

export const NavNoAuthLinks = styled.div`
    width: 100%;
    margin: 0 auto;
    text-align: center;
    margin-bottom: ${theme.spacing * 2}px;
`

export const NavNoAuthLink = styled(NavLink)`
    font-size: 0.9rem;
    margin: 0 ${theme.spacing * 2}px;
    display: inline-block;
    letter-spacing: 0.05rem;
    color: ${theme.colorFont};

    &:hover,
    &.active {
        color: ${theme.colorPrimary};
    }
`
