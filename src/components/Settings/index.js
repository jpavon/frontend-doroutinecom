import React, { Fragment } from 'react'

import FieldGroup from 'components/AutoSaveForm/FieldGroup'
import AutoSaveForm from 'components/AutoSaveForm'
import TopNav from 'components/TopNav'

import './style.css'

const Settings = ({user, updateUser}) => (
    <div className="settings">
        <AutoSaveForm
            initialValues={user}
            update={updateUser}
            render={() => (
                <Fragment>
                    <FieldGroup
                        component="select"
                        label="Weight Measure"
                        id="weightMeasure"
                        name="weightMeasure"
                        options={[
                            {id: 'kg', name: 'kg'},
                            {id: 'lbs', name: 'lbs'},
                        ]}
                    />
                    <FieldGroup
                        component="select"
                        label="Training Max"
                        id="trainingMax"
                        name="trainingMax"
                        options={[
                            {id: '100', name: '100%'},
                            {id: '95', name: '95%'},
                            {id: '90', name: '90%'},
                            {id: '85', name: '85%'},
                            {id: '80', name: '80%'},
                            {id: '75', name: '75%'}
                        ]}
                    />
                    {/*<div className="routine-settings-item">
                        <Label htmlFor={`precision${values.id}`}>Precision</Label>
                        <Select
                            id={`precision${values.id}`}
                            name="precision"
                            options={[
                                {id: '5', name: '5'},
                                {id: '2.5', name: '2.5'},
                                {id: '0.5', name: '0.5'},
                            ]}
                        />
                    </div>*/}
                </Fragment>
            )}
        />
        <TopNav
            title="User"
        />
        <AutoSaveForm
            initialValues={user}
            update={updateUser}
            render={() => (
                <Fragment>
                    <FieldGroup
                        label="Name"
                        id="name"
                        name="name"
                    />
                    <FieldGroup
                        label="Email"
                        id="email"
                        name="email"
                    />
                </Fragment>
            )}
        />
    </div>
)

export default Settings
