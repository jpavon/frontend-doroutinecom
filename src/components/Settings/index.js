import React from 'react'

import Field from 'components/Field'
import AutoSaveForm from 'components/AutoSaveForm'
import TopNav from 'components/TopNav'

import './style.css'

const Settings = ({user, updateUser}) => (
    <div className="settings">
        <AutoSaveForm
            initialValues={user}
            update={updateUser}
            render={() => (
                <div className="settings-form">
                    <Field
                        component="select"
                        label="Weight measure"
                        id="weightMeasure"
                        name="weightMeasure"
                        options={[
                            {id: 'kg', name: 'kg'},
                            {id: 'lbs', name: 'lbs'},
                        ]}
                    />
                    <Field
                        component="select"
                        label="Start of week"
                        id="startOfWeek"
                        name="startOfWeek"
                        options={[
                            {id: 'monday', name: 'Monday'},
                            {id: 'sunday', name: 'Sunday'},
                        ]}
                    />
                    {/*<Field
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
                    <div className="routine-settings-item">
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
                </div>
            )}
        />
        <TopNav
            title="User"
        />
        <AutoSaveForm
            initialValues={user}
            update={updateUser}
            render={() => (
                <div className="settings-form">
                    <Field
                        label="Name"
                        id="name"
                        name="name"
                    />
                    <Field
                        label="Email"
                        id="email"
                        name="email"
                    />
                </div>
            )}
        />
    </div>
)

export default Settings
