import * as React from 'react'
import { RouteComponentProps } from 'react-router'

import Layout from 'views/Layout'
import NavBar from 'components/NavBar'
import CompletedRestartButton from './CompletedRestartButton'
import Button from 'components/Button'
import Exercises from 'views/Exercises'
import Form from './Form'
import DeleteButton from './DeleteButton'
import CreateAgainNavButton from './CreateAgainNavButton'
import WorkoutRoutineName from './WorkoutRoutineName'
import Alert from './Alert'

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
