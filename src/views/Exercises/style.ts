import styled from 'styled-components'

import Transition from 'components/Transition'
import { theme } from 'styles'

export const Exercises = styled.div``

export const Exercise = styled.div`
    position: relative;
    margin-bottom: ${theme.spacing}px;
`

export const ExercisesButtonCreate = styled.div`
    display: flex;
    padding-right: ${theme.spacing}px;
    margin-bottom: ${theme.spacing}px;

    button {
        margin: auto;
    }
`

export const ExerciseTransition = styled(Transition)`
    position: relative;
    margin-bottom: ${theme.spacing * 1.5}px;

    [class*='Field']:last-child {
        margin-bottom: 0;
    }

    &:last-child {
        margin-bottom: 0;
    }
`

export const ExerciseButtonDelete = styled.div`
    position: absolute;
    top: ${theme.spacing / 1.5}px;
    right: 0;

    button {
        padding: ${theme.spacing / 2}px ${theme.spacing}px;
    }
`

export const ExerciseLift = styled.div`
    padding: ${theme.spacing}px;
    padding-bottom: ${theme.spacing / 2}px;

    > div {
        margin-right: 40px;
    }

    select {
        width: auto;
        font-size: 1.1rem;
    }

    a {
        display: inline-block;
        padding: 0;
        margin-bottom: 4px;
        margin-left: ${theme.spacing}px;
        margin-right: ${theme.spacing * 2}px;
    }
`
