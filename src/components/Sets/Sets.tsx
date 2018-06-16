import * as React from 'react'

import { IUser } from 'data/user/types'

import Transition from 'components/Transition'
import Button from 'components/Button'

import './style.scss'

interface ISetsProps {
    // tslint:disable-next-line:no-any
    sets: Array<React.ReactElement<any>>
    user: IUser
    create: () => void
    isWorkout: boolean
    toggleRemoveButtons: () => void
    isRemoveButtonsVisible: boolean
}

const Sets: React.SFC<ISetsProps> = (props) => (
    <div className="sets">
        <div className="sets-header">
            <div className="sets-header-item">
                <small>Set</small>
            </div>
            <div className="sets-header-item">
                <small>Reps</small>
            </div>
            <div className="sets-header-item">
                <small>{props.user.weightMeasure}</small>
            </div>
            {props.isWorkout ? (
                <div className="sets-header-item sets-header-item--toggle">
                    <Button onClick={props.toggleRemoveButtons}>
                        {props.isRemoveButtonsVisible ? '✓' : 'X'}
                    </Button>
                </div>
            ) : (
                <div className="sets-header-item" />
            )}
        </div>
        <Transition className="set" render={props.sets} />
        <div className="sets-button-create">
            <Button onClick={props.create}>Add Set</Button>
        </div>
    </div>
)

export default Sets
