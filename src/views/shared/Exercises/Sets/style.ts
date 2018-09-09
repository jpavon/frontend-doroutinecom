import styled, { css } from 'styled-components'
import { rgba } from 'polished'

import Transition from 'components/Transition'
import { theme, mixins } from 'styles'

const Layout = css`
    flex: 1;

    &:first-child {
        flex: 0 0 20%;
    }

    &:last-child {
        flex: 0 0 30px;
    }
`

export const SetTransition = styled(Transition)``

export const SetsButtonCreate = styled.div`
    display: flex;
    padding: ${theme.spacing / 2}px ${theme.spacing}px;

    button {
        margin-left: auto;
        padding: 0;
    }
`

export const SetsHeader = styled.div`
    display: flex;
    padding: ${theme.spacing / 2}px ${theme.spacing}px;
    border-bottom: 1px solid ${theme.colorBorder};
`

export const SetsHeaderItem = styled.div`
    ${Layout} &:first-letter {
        text-transform: capitalize;
    }
`

export const SetsHeaderItemToggle = styled(SetsHeaderItem)`
    button {
        justify-content: center;
        width: 100%;
        padding: 0;
    }
`

export const setHeight = 60

interface SetProps {
    isCompleted: boolean
}

export const Set = styled.div<SetProps>`
    position: relative;
    display: flex;
    border-bottom: 1px solid ${theme.colorBorder};
    align-items: center;
    padding: 0 ${theme.spacing}px;
    height: ${setHeight}px;

    background-color: ${(props) =>
        props.isCompleted ? rgba(theme.colorPrimary, 0.05) : 'transparent'};

    input[name='weight'],
    input[name='reps'] {
        font-size: 1.3rem;

        ${mixins.placeholder(rgba(theme.colorFont, 0.3))};
    }
`

export const SetItem = styled.div`
    ${Layout};
`

// form

export const SetItemWithAction = styled(SetItem)`
    display: flex;

    > label,
    > button {
        cursor: pointer;
        padding: ${theme.spacing / 2}px 0;
        margin: 0;
        margin-left: auto;
    }
`
