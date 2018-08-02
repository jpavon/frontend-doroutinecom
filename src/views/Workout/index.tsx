import * as React from 'react'
import { RouteComponentProps } from 'react-router'

import Layout from 'views/Layout'
import WorkoutContainer from 'views/Workout/WorkoutContainer'

interface Params {
    workoutId: string
}

const Workout: React.SFC<RouteComponentProps<Params>> = (props) => (
    <Layout header={<title>Edit Workout</title>}>
        <WorkoutContainer workoutId={Number(props.match.params.workoutId)} />
    </Layout>
)

export default Workout
