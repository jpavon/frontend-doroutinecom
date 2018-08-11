import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import {
    pendingWorkoutsSelector,
    completedWorkoutsSelector
} from 'data/workouts/selectors'
import NavBar from 'components/NavBar'
import Layout from 'views/Layout'
import List from './List'
import PendingBadge from './PendingBadge'

const Workouts: React.SFC<RouteComponentProps<{}>> = () => (
    <Layout header={<title>Workouts</title>} e2e="workouts">
        <NavBar
            title={
                <>
                    In progress <PendingBadge />
                </>
            }
        />
        <List
            selector={pendingWorkoutsSelector}
            noDataText="You can start a workout from a routine or an already completed workout."
        />
        <NavBar title="Completed" />
        <List
            selector={completedWorkoutsSelector}
            noDataText="No completed workouts."
        />
    </Layout>
)

export default Workouts
