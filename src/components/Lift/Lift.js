import React from 'react'
import Button from 'components/Button'
import Form from 'components/Lift/Form'

const Lift = ({lift, ui, handleRemove, updateLift}) => (
    <div className="lift">
        {!ui.isEditing ?
            <div>
                <Form
                    entity={lift}
                    update={updateLift}
                />
                <Button danger onClick={() => handleRemove(lift.id)}>Remove</Button>
                <br />
            </div>
        :
            <div>
                <div className="lift-name">
                    {lift.name}
                </div>
                <div className="lift-rm">
                    {lift.rm} RM
                </div>
            </div>
        }
    </div>
)

export default Lift
