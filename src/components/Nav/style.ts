import styled from 'styled-components'
import { darken, rgba, lighten } from 'polished'
import { NavLink as RRDNavLInk } from 'react-router-dom'

import { theme } from 'styles'

export const NavContainer = styled.nav`
    background-color: ${theme.colorBackgroundLight};
    border-bottom: 2px solid ${rgba(theme.colorFont, 0.05)};

    /* &.nav-container--touch {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        z-index: 1000;
        border-top: 2px solid ${rgba(theme.colorFont, 0.05)};
    } */
`

export const Nav = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0 auto;
    width: 100%;
    max-width: 600px;
`

export const NavLogo = styled(RRDNavLInk)`
    display: inline-block;
    line-height: inherit;
    white-space: nowrap;
    padding-left: ${theme.spacing}px;

    svg {
        max-width: none;
    }
`

export const NavList = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 80%;
    padding: 0;
    margin: 0;
    list-style: none;
    justify-content: flex-end;
`

export const NavItem = styled.li`
    position: relative;
    flex: 0 0 25%;
`

export const NavLink = styled(RRDNavLInk)`
    display: flex;
    align-items: center;
    margin: auto;
    flex-direction: column;
    padding: ${theme.spacingSmall * 2}px 0;
    text-decoration: none;
    font-size: 0.7rem;
    letter-spacing: 0.05rem;
    color: ${lighten(0.3, theme.colorFont)};
    border-right: 1px solid transparent;
    border-left: 1px solid transparent;
    transition: color 0.2s, background-color 0.2s, border-color 0.2s;

    svg {
        margin-bottom: 2px;
        opacity: 0.5;
        transition: opacity 0.2s;
    }

    /* .nav-item--unauth & {
        padding: 24px 0;
    } */

    &:visited {
        color: ${lighten(0.3, theme.colorFont)};
    }

    &:hover,
    &.active {
        color: ${theme.colorPrimary};
        background-color: ${rgba(theme.colorPrimary, 0.05)};
        border-color: ${rgba(theme.colorPrimary, 0.07)};

        svg {
            opacity: 1;
        }
    }
`

export const NavLinkHighlight = styled.div`
    position: absolute;
    background-color: ${rgba(theme.colorPrimary, 0.5)};
    width: 8px;
    height: 8px;
    top: ${theme.spacing / 2}px;
    right: 25%;
    border-radius: 50%;
    border: 1px solid ${darken(0.1, rgba(theme.colorPrimary, 0.5))};

    @media (max-width: 514px) {
        width: 7px;
        height: 7px;
    }
`
