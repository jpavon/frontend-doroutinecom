import styled, { css } from 'styled-components'
import { rgba } from 'polished'

import { theme } from 'styles'

export const SelectWrapper = styled.span`
    position: relative;

    svg {
        position: absolute;
        top: 7px;
    }
`

interface Props {
    isDefaultOption: boolean
}

export const Select = styled.select<Props>`
    position: relative;
    padding: ${theme.spacing / 2}px 35px ${theme.spacing / 2}px 20px;
    width: 100%;
    max-width: 100%;

    appearance: none;
    font-size: 0.9rem;
    color: ${theme.colorFont};
    border: 0px solid ${theme.colorBorderInput};
    text-overflow: ellipsis;

    background-repeat: no-repeat;
    background-position: left 0 center;
    background-color: transparent;

    ${(props) =>
        props.isDefaultOption &&
        css`
            color: ${rgba(theme.colorFont, 0.6)};
        `};
`
