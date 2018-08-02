import styled from 'styled-components'

import { theme, mixins } from 'styles'
import { Auth } from 'components/Auth/style'

export const Field = styled.div`
    position: relative;
    padding: ${theme.spacing / 1.5}px ${theme.spacing}px ${theme.spacing / 2}px;
    align-items: center;
    background-color: #fff;
    border-top: 1px solid ${theme.colorBorder};

    > div {
        width: 100%;
    }

    > label {
    }

    &:last-child {
        margin-bottom: ${theme.spacing}px;
        border-bottom: 1px solid ${theme.colorBorder};
    }

    ${Auth} & {
        border: none;
        &:last-child {
            border: none;
        }
        label {
            margin-bottom: ${theme.spacing / 3}px;
        }
        input {
            ${mixins.inputBackgroundColor('#fff')};
            border: 1px solid #eee;
            padding: ${theme.spacing}px ${theme.spacing / 1.5}px;
            border-radius: 4px;
        }
    }
`
