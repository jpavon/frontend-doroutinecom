import React from 'react'

import Button from 'components/Button'
import Form from 'components/Settings/Form'

import './style.css'

const Settings = ({user, updateUser, handleLogoutUser}) => (
    <div className="settings">
        <h1 className="global-header">Settings</h1>
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
        <Form
            data={user}
            update={updateUser}
        />
    </div>
)

export default Settings
