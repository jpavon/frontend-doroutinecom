import * as React from 'react'

import Transition from 'components/Transition'
import Button from 'components/Button'

import './style.scss'

interface IProps {
    create: () => void
}

const Exercises: React.SFC<IProps> = ({children, create}) => (
    <>
        <div className="exercises">
            <Transition className="exercise">
                { // tslint:disable-next-line:no-any
                    children as React.ReactElement<any>}
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
