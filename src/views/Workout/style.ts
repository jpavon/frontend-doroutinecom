import styled from 'styled-components'

import { theme } from 'styles'

export const Workout = styled.div``

export const WorkoutRoutineName = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacing}px;
    background-color: rgba(76, 144, 194, 0.05);
    font-size: 1.1rem;

    .button {
        display: inline-block;
        padding: 0;
        margin-left: ${theme.spacing}px;
        font-size: 1.2rem;
        font-weight: 500;
    }
`

export const WorkoutRoutineNameDeleted = styled.div`
    margin-left: ${theme.spacing}px;
    margin-top: 3px;
    color: ${theme.colorDanger};
    font-size: 0.8rem;
`

export const WorkoutDates = styled.div`
    margin-top: ${theme.spacing}px;
`
