import React from 'react'

import Button from 'components/Button'
import Form from 'components/Settings/Form'
import Section from 'components/Section'

import './style.css'

const Settings = ({user, updateUser, handleLogoutUser}) => (
    <Section title="Settings" className="settings">
        <Form
            data={user}
            update={updateUser}
        />
        <div className="settings-button-logout">
            <Button
                className="logout"
                href="/logout"
                onClick={handleLogoutUser}
                align="right"
                danger
            >
                Logout
            </Button>
        </div>
    </Section>
)

export default Settings
