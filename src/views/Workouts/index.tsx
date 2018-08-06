import * as React from 'react'

import {
    pendingWorkoutsSelector,
    completedWorkoutsSelector
} from 'data/workouts/selectors'
import Layout from 'views/Layout'
import List from 'views/Workouts/List'
import NavBar from 'components/NavBar'
import PendingBadge from 'views/Workouts/PendingBadge'
// import Badge from 'components/Badge'

const Workouts: React.SFC = () => (
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
