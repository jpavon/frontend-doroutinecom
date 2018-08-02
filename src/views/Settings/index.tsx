import * as React from 'react'

import Layout from 'views/Layout'
import NavBar from 'components/NavBar'
import Button from 'components/Button'
import Footer from 'components/Footer'
import UserSettingsContainer from 'views/Settings/UserSettingsContainer'

const Settings = () => (
    <Layout header={<title>Settings</title>}>
        <NavBar
            title="Settings"
            leftButton={
                <Button to="/" icon="back">
                    Back
                </Button>
            }
        />
        <NavBar title="General" />
        <UserSettingsContainer />
        <Footer />
    </Layout>
)

export default Settings
