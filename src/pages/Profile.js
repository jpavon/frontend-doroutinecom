import React from 'react'
import Layout from 'pages/Layout'
import ProfileContainer from 'containers/ProfileContainer'

const Profile = ({match}) => (
    <Layout
        header={(
            <title>Profile</title>
        )}
    >
        <ProfileContainer />
    </Layout>
)

export default Profile
