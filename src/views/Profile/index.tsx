import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import Layout from 'views/Layout'
import NavBar from 'components/NavBar'
import Button from 'components/Button'
import StartMessage from 'views/Profile/StartMessage'
import WeeklyGraph from 'views/Profile/WeeklyGraph'
import Table from 'views/Profile/Table'

const Profile: React.SFC<RouteComponentProps<{}>> = () => (
    <Layout header={<title>Profile</title>} e2e="profile">
        <NavBar
            title="Profile"
            rightButton={<Button to="/settings">Settings</Button>}
        />
        <StartMessage />
        <NavBar title="Weekly workouts" />
        <WeeklyGraph />
        <NavBar title="Recent top sets" />
        <Table />
    </Layout>
)

export default Profile
