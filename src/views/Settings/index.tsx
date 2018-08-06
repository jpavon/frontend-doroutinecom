import * as React from 'react'

import Layout from 'views/Layout'
import NavBar from 'components/NavBar'
import Button from 'components/Button'
import Footer from 'components/Footer'
import SettingsForm from 'views/Settings/SettingsForm'
import UserForm from 'views/Settings/UserForm'
import UnauthButton from 'views/Settings/UnauthButton'

const Settings = () => (
    <Layout header={<title>Settings</title>} e2e="settings">
        <NavBar
            title="Settings"
            leftButton={
                <Button to="/" icon="back">
                    Back
                </Button>
            }
        />
        <NavBar title="General" />
        <SettingsForm />
        <NavBar title="User" />
        <UserForm />
        <NavBar rightButton={<UnauthButton />} />
        <Footer />
    </Layout>
)

export default Settings
