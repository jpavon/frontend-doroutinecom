import React from 'react'

import Label from 'components/Form/Label'

const LiftSetsTable = ({sets}) => (
    <div className="lift-sets-table">
        <div className="lift-sets-table-top">
            <div><Label>Date</Label></div>
            <div><Label>Reps</Label></div>
            <div><Label>Weight</Label></div>
            <div><Label>Estimated 1RM</Label></div>
        </div>
            {sets.map((set, i) => (
                <div key={i} className="lift-sets-table-item">
                    <div>{set.completedAt}</div>
                    <div>{set.reps}</div>
                    <div>{set.weight}</div>
                    <div>{set.rm}</div>
                </div>
            ))}
    </div>
)

export default LiftSetsTable
