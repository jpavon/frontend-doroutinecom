import React from 'react'
import Layout from 'pages/Layout'
import WorkoutContainer from 'containers/WorkoutContainer'

const Workout = ({match}) => (
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
