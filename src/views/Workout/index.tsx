import * as React from 'react'
import { RouteComponentProps } from 'react-router'

import Layout from 'views/Layout'
import Form from 'views/Workout/Form'
import DeleteButton from 'views/Workout/DeleteButton'
import NavBar from 'components/NavBar'
import CompletedRestartButton from './CompletedRestartButton'
import Button from 'components/Button'
import CreateAgainNavButton from 'views/Workout/CreateAgainNavButton'
import WorkoutRoutineName from 'views/Workout/WorkoutRoutineName'
import Exercises from 'views/shared/Exercises'
import Alert from 'views/Workout/Alert'

interface Params {
    workoutId: string
}

const Workout: React.SFC<RouteComponentProps<Params>> = (props) => {
    const workoutId = Number(props.match.params.workoutId)
    return (
        <Layout header={<title>Edit Workout</title>} e2e="workout">
            <Alert workoutId={workoutId} />
            <NavBar
                title="Edit workout"
                leftButton={
                    <Button to="/workouts" icon="back">
                        Back
                    </Button>
                }
                rightButton={<CompletedRestartButton workoutId={workoutId} />}
            />
            <CreateAgainNavButton workoutId={workoutId} />
            <WorkoutRoutineName workoutId={workoutId} />
            <Form workoutId={workoutId}>
                <Exercises id={workoutId} entity="workout" />
            </Form>
            <NavBar rightButton={<DeleteButton workoutId={workoutId} />} />
        </Layout>
    )
}

export default Workout
