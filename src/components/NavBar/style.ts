import styled, { css } from 'styled-components'

import { theme } from 'styles'

interface TopNav {
    noTitle: boolean
}

export const TopNav = styled.div<TopNav>`
    position: relative;
    margin: 0 ${theme.spacing}px;

    ${(props) =>
        props.noTitle &&
        css`
            height: 56px;
        `};
`

export const TopNavTitle = styled.h1`
    width: 100%;
    padding: ${theme.spacing}px ${theme.spacing * 4}px;
    margin-bottom: 0;

    font-size: 1.1rem;
    text-align: center;
`

const topNavLeftRight = css`
    position: absolute;
    top: 0;
`

export const TopNavLeft = styled.div`
    ${topNavLeftRight};
    left: 0;

    svg {
        margin-right: ${theme.spacing / 2}px;
    }
`

export const TopNavRight = styled.div`
    ${topNavLeftRight};
    right: 0;
`
