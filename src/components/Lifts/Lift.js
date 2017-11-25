import React from 'react'
import ButtonIcon from 'components/ButtonIcon'
import Form from 'components/Lifts/Form'

const Lift = ({lift, ui, handleRemove, updateLift}) => (
    <div className="lift">
        <div>
            <Form
                data={lift}
                update={updateLift}
            />
            <div className="lift-button-delete">
                <ButtonIcon remove danger onClick={() => handleRemove(lift.id)}></ButtonIcon>
            </div>
            <br />
        </div>
    </div>
)

export default Lift
