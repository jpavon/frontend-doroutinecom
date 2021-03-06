import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import Layout from 'views/shared/Layout'
import NavBar from 'components/NavBar'
import Button from 'components/Button'
import Footer from 'components/Footer'
import SettingsForm from './SettingsForm'
import UserForm from './UserForm'
import UnauthButton from './UnauthButton'

const Settings: React.SFC<RouteComponentProps<{}>> = () => (
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
