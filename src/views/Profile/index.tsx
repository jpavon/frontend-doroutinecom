import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import Layout from 'views/shared/Layout'
import NavBar from 'components/NavBar'
import Button from 'components/Button'
import StartMessage from './StartMessage'
import WeeklyGraph from './WeeklyGraph'
import Table from './Table'

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
