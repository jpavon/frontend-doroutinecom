import * as React from 'react'

import Layout from 'views/Layout'
import NavBar from 'components/NavBar'
import Button from 'components/Button'
import StartMessageContainer from 'views/Profile/StartMessageContainer'
import GraphWeeklyWorkoutsContainer from 'views/Profile/GraphWeeklyWorkoutsContainer'
import RecentTopSetsContainer from 'views/Profile/RecentTopSetsContainer'
import { ProfileWrapper } from './style'

const Profile = () => (
    <Layout header={<title>Profile</title>}>
        <ProfileWrapper data-e2e="profile">
            <NavBar
                title="Profile"
                rightButton={<Button to="/settings">Settings</Button>}
            />
            <StartMessageContainer />
            <NavBar title="Weekly workouts" />
            <GraphWeeklyWorkoutsContainer />
            <NavBar title="Recent top sets" />
            <RecentTopSetsContainer />
        </ProfileWrapper>
    </Layout>
)

export default Profile
