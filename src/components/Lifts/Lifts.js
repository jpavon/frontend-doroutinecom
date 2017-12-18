import React, { Fragment } from 'react'
import Button from 'components/Button'

import './style.css'

const Lifts = ({children, handleCreate}) => (
    <Fragment>
        <h1 className="global-header">Lifts</h1>
        <div className="lifts-container">
            <div className="lifts">
                {children}
            </div>
            <div className="lifts-button-create">
                <Button
                    small
                    onClick={handleCreate}
                >
                    Create a new lift
                </Button>
            </div>
        </div>
    </Fragment>
)

export default Lifts
