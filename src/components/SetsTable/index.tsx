import * as React from 'react'
import { Link } from 'react-router-dom'

import { ITopSet } from 'data/sets/types'

import './style.scss'

interface ILiftSetsTable {
    sets: ITopSet[]
    weightMeasure: string
    showLiftColumn: boolean
}

const LiftSetsTable: React.SFC<ILiftSetsTable> = (props) => (
    <div className="sets-table">
        <div className="sets-table-top">
            <div>
                <small>Date</small>
            </div>
            {props.showLiftColumn && (
                <div>
                    <small>Lift</small>
                </div>
            )}
            <div className="sets-table-number sets-table-right">
                <small>Reps</small>
            </div>
            <div className="sets-table-number sets-table-right">
                <small>{props.weightMeasure}</small>
            </div>
            {!props.showLiftColumn && (
                <div className="sets-table-right">
                    <small>Estimated 1RM</small>
                </div>
            )}
        </div>
        {props.sets.map((set, i) => (
            <Link
                key={i}
                to={
                    props.showLiftColumn
                        ? `/lifts/${set.liftId}`
                        : `/workouts/${set.workoutId}`
                }
                className="sets-table-item"
            >
                <div>{set.completedAt}</div>
                {props.showLiftColumn && <div>{set.lift}</div>}
                <div className="sets-table-number sets-table-right">
                    {set.reps}
                </div>
                <div className="sets-table-number sets-table-right">
                    {set.weight}
                </div>
                {!props.showLiftColumn && (
                    <div className="sets-table-right">{set.rm}</div>
                )}
            </Link>
        ))}
    </div>
)

export default LiftSetsTable
