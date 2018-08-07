import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import NavBar from 'components/NavBar'
import Layout from 'views/Layout'
import Form from 'views/Routine/Form'
import DeleteButton from 'views/Routine/DeleteButton'
import CreateWorkoutButton from 'views/Routine/CreateWorkoutButton'
import Button from 'components/Button'
import Exercises from 'views/shared/Exercises'

interface Params {
    routineId: string
}

const Routine: React.SFC<RouteComponentProps<Params>> = (props) => {
    const routineId = Number(props.match.params.routineId)
    return (
        <Layout header={<title>Routine</title>} e2e="routine">
            <NavBar
                title="Edit routine"
                leftButton={
                    <Button to="/routines" icon="back">
                        Back
                    </Button>
                }
                rightButton={<CreateWorkoutButton routineId={routineId} />}
            />
            <Form routineId={routineId}>
                <Exercises id={routineId} entity="routine" />
            </Form>
            <NavBar rightButton={<DeleteButton routineId={routineId} />} />
        </Layout>
    )
}

export default Routine
