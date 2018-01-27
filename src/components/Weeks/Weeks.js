import React from 'react'
import classNames from 'classnames'

import Button from 'components/Button'

import './style.css'

const Weeks = ({children, activeTab, weeks, completedWeeks, create, onSelect}) => (
    <div className="weeks-container">
        <div className="weeks">
            {children}
        </div>

        <div className="weeks-button-create">
            <Button onClick={create} className="button-small">Add New Week</Button>
        </div>
    </div>
)

export default Weeks
