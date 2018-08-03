import * as React from 'react'

import { TopSet } from 'data/sets/types'

import { SetsTableTop, SetsTableItem } from './style'

interface Props {
    sets: TopSet[]
    weightMeasure: string
    showLiftColumn: boolean
}

const LiftSetsTable: React.SFC<Props> = (props) => (
    <>
        <SetsTableTop>
            <div>Date</div>
            {props.showLiftColumn && <div>Lift</div>}
            <div className="number right">Reps</div>
            <div className="number right">{props.weightMeasure}</div>
            {!props.showLiftColumn && (
                <div className="right">Estimated 1RM</div>
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
                data-e2e="sets-table-item"
            >
                <div>{set.completedAt}</div>
                {props.showLiftColumn && <div>{set.lift}</div>}
                <div className="number right">{set.reps}</div>
                <div className="number right">{set.weight}</div>
                {!props.showLiftColumn && <div className="right">{set.rm}</div>}
            </SetsTableItem>
        ))}
    </>
)

export default LiftSetsTable
