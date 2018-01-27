import React from 'react'

const Week = ({children, index}) => (
    <div className="week">
        <h3 className="week-title">Week {index}</h3>
        {children}
    </div>
)

export default Week
