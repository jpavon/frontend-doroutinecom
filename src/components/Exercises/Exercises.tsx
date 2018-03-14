import * as React from 'react'

import Transition, { ITransitionProps } from 'components/Transition'
import Button from 'components/Button'

import './style.css'

interface IProps {
    children: ITransitionProps['children']
    create: () => void
}

const Exercises: React.SFC<IProps> = ({children, create}) => (
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
