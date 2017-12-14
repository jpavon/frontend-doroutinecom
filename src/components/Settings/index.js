import React from 'react'

import Form from 'components/Settings/Form'

const Settings = ({user, updateUser, handleLogoutUser}) => (
    <div className="settings">
        <h1>Settings</h1>
        <a className="logout" href="/logout" onClick={handleLogoutUser}>
            Logout
        </a>
        <h1>Hello {user.name}!</h1>
        <Form
            data={user}
            update={updateUser}
        />
    </div>
)

export default Settings
