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
            <div>Date</div>
            {props.showLiftColumn && <div>Lift</div>}
            <div className="sets-table-number sets-table-right">Reps</div>
            <div className="sets-table-number sets-table-right">
                {props.weightMeasure}
            </div>
            {!props.showLiftColumn && (
                <div className="sets-table-right">Estimated 1RM</div>
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
