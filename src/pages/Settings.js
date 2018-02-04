import React, { Fragment } from 'react'
import Layout from 'pages/Layout'
import SettingsContainer from 'containers/SettingsContainer'
import Footer from 'components/Footer'

const Settings = () => (
    <Fragment>
        <Layout
            header={(
                <title>Settings</title>
            )}
        >
            <SettingsContainer />
            <Footer />
        </Layout>
    </Fragment>
)

export default Settings
