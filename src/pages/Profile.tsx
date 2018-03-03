import * as React from 'react'

import Layout from 'pages/Layout'
import ProfileContainer from 'containers/ProfileContainer'

const Profile = () => (
    <Layout
        header={(
            <title>Profile</title>
        )}
    >
        <ProfileContainer />
    </Layout>
)

export default Profile
