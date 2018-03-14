import * as React from 'react'

import { IFormatedUser } from 'data/user/types'
import { ISetActionArgs } from 'data/sets/types'

import Transition, { ITransitionProps } from 'components/Transition'
import Button from 'components/Button'

import './style.css'

interface ISetsProps {
    children: ITransitionProps['children']
    user: IFormatedUser
    create: ISetActionArgs['post']
    isWorkout: boolean
    toggleRemoveButtons: () => void
    isRemoveButtonsVisible: boolean
}

const Sets: React.SFC<ISetsProps> = ({
    children,
    create,
    user,
    isWorkout,
    toggleRemoveButtons,
    isRemoveButtonsVisible
}) => (
    <div className="sets">
        <div className="sets-header">
            <div className="sets-header-item"><small>Set</small></div>
            <div className="sets-header-item"><small>Reps</small></div>
            <div className="sets-header-item"><small>{user.weightMeasure}</small></div>
            {isWorkout ?
                <div className="sets-header-item sets-header-item--toggle">
                    <Button onClick={toggleRemoveButtons}>
                        {isRemoveButtonsVisible ? '✓' : 'X'}
                    </Button>
                </div> :
                <div className="sets-header-item" />
            }
        </div>
        <Transition className="set">
            {children}
        </Transition>
        <div className="sets-button-create">
            <Button
                onClick={create}
            >
                Add Set
            </Button>
        </div>
    </div>
)

export default Sets
