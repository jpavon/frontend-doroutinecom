import * as React from 'react'

import { IExerciseActionArgs } from 'data/exercises/types'

import Transition from 'components/Transition'
import Button from 'components/Button'

import './style.css'

interface IProps {
    children: React.ReactNode
    create: IExerciseActionArgs['post']
}

const Exercises = ({children, create}: IProps) => (
    <>
        <div className="exercises">
            <Transition className="exercise">
                {children}
            </Transition>
        </div>
        <div className="exercises-button-create">
            <Button
                onClick={create}
            >
                Add Exercise
            </Button>
        </div>
    </>
)

export default Exercises
