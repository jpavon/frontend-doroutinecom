import * as React from 'react'
import { RouteComponentProps } from 'react-router'

import Layout from 'pages/Layout'
import WorkoutContainer from 'containers/WorkoutContainer'

interface IParams {
    workoutId: string
}

const Workout = ({match}: RouteComponentProps<IParams>) => (
    <Layout
        header={(
            <title>Edit Workout</title>
        )}
    >
        <WorkoutContainer
            workoutId={Number(match.params.workoutId)}
        />
    </Layout>
)

export default Workout
