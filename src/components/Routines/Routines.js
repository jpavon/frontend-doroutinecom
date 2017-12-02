import React from 'react'
import Button from 'components/Button'

import './style.css'

const Routine = ({children, handleCreate}) => (
    <div className="routines">
        <div className="routines-button-create">
            <Button onClick={handleCreate}>New routine</Button>
        </div>
        {children}
    </div>
)

export default Routine
