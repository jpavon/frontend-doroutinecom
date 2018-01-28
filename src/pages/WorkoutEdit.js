import React from 'react'
import Layout from 'pages/Layout'
import WorkoutEditContainer from 'containers/WorkoutEditContainer'

const WorkoutEdit = ({match}) => (
    <Layout
        header={(
            <title>Edit Workout</title>
        )}
    >
        <WorkoutEditContainer
            routineId={Number(match.params.routineId)}
            workoutId={Number(match.params.workoutId)}
        />
    </Layout>
)

export default WorkoutEdit
