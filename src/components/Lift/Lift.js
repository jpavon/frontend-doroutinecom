import React from 'react'
import Button from 'components/Button'
import Form from 'components/Lift/Form'

const Lift = ({lift, ui, handleRemove, updateLift}) => (
    <div className="lift">
        <div>
            <Form
                entity={lift}
                update={updateLift}
            />
            <Button danger onClick={() => handleRemove(lift.id)}>Remove</Button>
            <br />
        </div>
    </div>
)

export default Lift
