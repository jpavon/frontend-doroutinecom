import styled from 'styled-components'
import { rgba } from 'polished'

import { theme } from 'styles'
import Button from 'components/Button'

// start message

export const StartMessage = styled.div`
    padding: ${theme.spacing * 1.5}px;
    background-color: ${rgba(theme.colorPrimary, 0.1)};
    border: 1px solid ${rgba(theme.colorPrimary, 0.15)};

    text-align: center;

    a {
        font-size: 1rem;
        display: inline;
        padding: 0;
    }
`

export const StartMessageTitle = styled.div`
    font-size: 1.4rem;
    margin-bottom: ${theme.spacing * 1.5}px;
`

export const StartMessageList = styled.div`
    svg {
        margin-right: 0.5rem;
        width: 24px;
        height: 24px;
    }

    a {
        margin-left: 1rem;
    }
`

export const StartMessageListItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${theme.spacing / 2}px;
    padding: ${theme.spacing / 2}px 0;

    &:last-child {
        margin-bottom: 0;
    }
`

export const StartMessageHideButton = styled(Button)`
    display: inline;
    margin-top: ${theme.spacing * 2}px;
    padding: 0;
`
