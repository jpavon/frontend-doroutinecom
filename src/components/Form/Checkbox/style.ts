import styled, { css } from 'styled-components'
import { rgba } from 'polished'

import { theme } from 'styles'

export const Checkbox = styled.input`
    display: none;
`

interface Props {
    checked: boolean | undefined
}

export const CheckboxTick = styled.span<Props>`
    display: flex;
    width: 30px;
    height: 30px;
    border: 2px solid ${theme.colorBorder};
    user-select: none;
    cursor: pointer;
    transition: border 0.2s;
    border-radius: 50%;
    align-items: center;
    justify-content: center;

    &:hover {
        border-color: ${rgba(theme.colorPrimary, 0.5)};
    }

    ${(props) =>
        props.checked &&
        css`
            border-color: ${theme.colorPrimary};
        `};
`
