import React, { Fragment } from 'react'

import Section from 'components/Section'
import Button from 'components/Button'
import Input from 'components/AutoSaveForm/Input'
import AutoSaveForm from 'components/AutoSaveForm'
import Label from 'components/Form/Label'

import './style.css'

const Settings = ({user, updateUser, logoutUser}) => (
    <Section title="Settings" className="settings">
        <AutoSaveForm
            initialValues={user}
            update={updateUser}
            render={() => (
                <Fragment>
                    <Label htmlFor="name">Name</Label>
                    <Input
                        id="name"
                        name="name"
                        size="large"
                    />
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        name="email"
                        size="large"
                    />
                </Fragment>
            )}
        />
        <div className="settings-button-logout">
            <Button
                className="logout"
                onClick={logoutUser}
                danger
            >
                Logout
            </Button>
        </div>
    </Section>
)

export default Settings
