import React from 'react'

import ButtonIcon from 'components/ButtonIcon'
import AutoSaveForm from 'components/AutoSaveForm'
import Input from 'components/AutoSaveForm/Input'
import InputWrapper from 'components/Form/InputWrapper'

const Lift = ({lift, ui, handleRemove, updateLift}) => (
    <div className="lift">
        <div className="lift-inner">
            <AutoSaveForm
                initialValues={lift}
                update={updateLift}
                render={() => (
                    <div className="lift-form">
                        <div className="lift-name">
                            <Input
                                name="name"
                                placeholder="Name..."
                                background="dark"
                            />
                        </div>
                        <div className="lift-rm">
                            <InputWrapper item="kg RM">
                                <Input
                                    name="rm"
                                    item="kg RM"
                                />
                            </InputWrapper>
                        </div>
                    </div>
                )}
            />
            <div className="lift-button-delete">
                <ButtonIcon remove danger onClick={() => handleRemove(lift.id)} />
            </div>
        </div>
    </div>
)

export default Lift
