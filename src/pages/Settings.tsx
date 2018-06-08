import * as React from 'react'

import Layout from 'pages/Layout'
import SettingsContainer from 'containers/SettingsContainer'
import Footer from 'components/Footer'

const Settings = () => (
    <Layout header={<title>Settings</title>}>
        <SettingsContainer />
        <Footer />
    </Layout>
)

export default Settings
