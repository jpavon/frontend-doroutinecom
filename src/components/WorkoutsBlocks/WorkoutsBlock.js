import React from 'react'

const WorkoutsBlock = ({children, blockId}) => (
    <div className="workouts-block">
        <h2 className="workouts-block-title">Block {blockId}</h2>
        {children}
    </div>
)

export default WorkoutsBlock
