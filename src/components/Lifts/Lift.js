import React, { Fragment } from 'react'

import ButtonIcon from 'components/ButtonIcon'
import AutoSaveForm from 'components/AutoSaveForm'
import Input from 'components/AutoSaveForm/Input'
import InputWithItem from 'components/Form/InputWithItem'
import Label from 'components/Form/Label'
import Tooltip from 'components/Tooltip'
import RMTable from 'components/RMTable'

const Lift = ({lift, ui, weightMeasure, remove, update}) => (
    <div className="lift">
        <div className="lift-inner">
            <AutoSaveForm
                initialValues={lift}
                update={update}
                render={({values}) => (
                    <div className="lift-form">
                        <div className="lift-title">
                            <Label htmlFor={`lift${values.id}`}>
                                Lift
                            </Label>
                            <Tooltip
                                text="RM Info"
                                content={(
                                    <RMTable
                                        weightMeasure={weightMeasure}
                                        rm={values.rm}
                                    />
                                )}
                            />
                        </div>
                        <div className="lift-name">
                            <Input
                                id={`lift${values.id}`}
                                name="name"
                                placeholder="Name"
                            />
                        </div>
                        <div className="lift-rm">
                            <InputWithItem
                                item={(
                                    <Fragment>
                                        {weightMeasure}
                                        <span title="Rep Max"> RM</span>
                                    </Fragment>
                                )}
                            >
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
