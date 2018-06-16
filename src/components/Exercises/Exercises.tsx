import * as React from 'react'

import Transition from 'components/Transition'
import Button from 'components/Button'

import './style.scss'

interface IProps {
    create: () => void
    // tslint:disable-next-line:no-any
    exercises: React.ReactElement<any> | Array<React.ReactElement<any>>
}

const Exercises: React.SFC<IProps> = (props) => (
    <>
        <div className="exercises">
            <Transition className="exercise" render={props.exercises} />
        </div>
        <div className="exercises-button-create">
            <Button onClick={props.create}>Add Exercise</Button>
        </div>
    </>
)

export default Exercises
