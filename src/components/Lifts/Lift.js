import React from 'react'

import ButtonIcon from 'components/ButtonIcon'
import AutoSaveForm from 'components/AutoSaveForm'
import Input from 'components/AutoSaveForm/Input'
import InputWithItem from 'components/Form/InputWithItem'
import Label from 'components/Form/Label'

const Lift = ({lift, ui, remove, updateLift}) => (
    <div className="lift">
        <div className="lift-inner">
            <AutoSaveForm
                initialValues={lift}
                update={updateLift}
                render={({values}) => (
                    <div className="lift-form">
                        <Label htmlFor={`lift${values.id}`}>Lift</Label>
                        <div className="lift-name">
                            <Input
                                id={`lift${values.id}`}
                                name="name"
                                placeholder="Name"
                            />
                        </div>
                        <div className="lift-rm">
                            <InputWithItem item="kg RM">
                                <Input
                                    name="rm"
                                    placeholder="Weight"
                                />
                            </InputWithItem>
                        </div>
                    </div>
                )}
            />
            <div className="lift-button-delete">
                <ButtonIcon remove danger onClick={() => remove(lift.id)} />
            </div>
        </div>
    </div>
)

export default Lift
