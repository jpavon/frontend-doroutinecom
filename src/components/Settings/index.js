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
                        label="Weight Measurement"
                        id="name"
                        name="name"
                    />
                    <FieldGroup
                        label="Training Max"
                        id="email"
                        name="email"
                    />
                </Fragment>
            )}
        />
        <TopNav
            title="Profile"
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
