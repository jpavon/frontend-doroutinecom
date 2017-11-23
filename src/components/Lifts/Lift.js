import React from 'react'
import Button from 'components/Button'
import Form from 'components/Lifts/Form'

const Lift = ({lift, ui, handleRemove, updateLift}) => (
    <div className="lift">
        <div>
            <Form
                data={lift}
                update={updateLift}
            />
            <Button danger onClick={() => handleRemove(lift.id)}>Remove</Button>
            <br />
        </div>
    </div>
)

export default Lift
