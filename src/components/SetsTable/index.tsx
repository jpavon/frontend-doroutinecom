import * as React from 'react'

import { ITopSet } from 'data/sets/types'

import { SetsTableTop, SetsTableItem } from './style'

interface ILiftSetsTable {
    sets: ITopSet[]
    weightMeasure: string
    showLiftColumn: boolean
}

const LiftSetsTable: React.SFC<ILiftSetsTable> = (props) => (
    <>
        <SetsTableTop>
            <div>Date</div>
            {props.showLiftColumn && <div>Lift</div>}
            <div className="sets-table-number sets-table-right">Reps</div>
            <div className="sets-table-number sets-table-right">
                {props.weightMeasure}
            </div>
            {!props.showLiftColumn && (
                <div className="sets-table-right">Estimated 1RM</div>
            )}
        </SetsTableTop>
        {props.sets.map((set, i) => (
            <SetsTableItem
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
            </SetsTableItem>
        ))}
    </>
)

export default LiftSetsTable
