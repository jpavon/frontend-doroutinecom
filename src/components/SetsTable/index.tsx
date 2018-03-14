import * as React from 'react'
import { Link } from 'react-router-dom'

import { ITopSet } from 'data/sets/types'

import './style.css'

interface ILiftSetsTable {
    sets: ITopSet[]
    weightMeasure: string
    showLift?: boolean
}

const LiftSetsTable: React.SFC<ILiftSetsTable> = ({sets, weightMeasure, showLift = false}) => (
    <div className="sets-table">
        <div className="sets-table-top">
            <div><small>Date</small></div>
            {showLift &&
                <div><small>Lift</small></div>
            }
            <div className="sets-table-number sets-table-right"><small>Reps</small></div>
            <div className="sets-table-number sets-table-right"><small>{weightMeasure}</small></div>
            {!showLift &&
                <div className="sets-table-right"><small>Estimated 1RM</small></div>
            }
        </div>
            {sets.map((set, i) => (
                <Link
                    key={i}
                    to={showLift ? `/lifts/${set.liftId}` : `/workouts/${set.workoutId}`}
                    className="sets-table-item"
                >
                    <div>{set.completedAt}</div>
                    {showLift &&
                        <div>{set.lift}</div>
                    }
                    <div className="sets-table-number sets-table-right">{set.reps}</div>
                    <div className="sets-table-number sets-table-right">{set.weight}</div>
                    {!showLift &&
                        <div className="sets-table-right">{set.rm}</div>
                    }
                </Link>
            ))}
    </div>
)

export default LiftSetsTable
