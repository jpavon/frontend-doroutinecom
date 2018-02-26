import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const LiftSetsTable = ({sets, weightMeasure, showLift = false}) => (
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
                <Link to={showLift ? `/lifts/${set.liftId}` : `/workouts/${set.workoutId}`} key={i} className="sets-table-item">
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
