import React from 'react'

import Button from 'components/Button'
import Form from 'components/Settings/Form'

import './style.css'

const Settings = ({user, updateUser, handleLogoutUser}) => (
    <div className="settings">
        <div className="settings-button-logout">
            <Button
                className="logout"
                href="/logout"
                onClick={handleLogoutUser}
                align="right"
            >
                Logout
            </Button>
        </div>
        <h1>Settings</h1>

        <h3>Hello {user.name}!</h3>
        <Form
            data={user}
            update={updateUser}
        />
    </div>
)

export default Settings
