import React from 'react'
import Layout from 'pages/Layout'
import SettingsContainer from 'containers/SettingsContainer'

const Settings = () => (
    <Layout
        header={(
            <title>Settings</title>
        )}
    >
        <SettingsContainer />
    </Layout>
)

export default Settings
