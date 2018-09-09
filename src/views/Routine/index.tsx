import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import NavBar from 'components/NavBar'
import Layout from 'views/shared/Layout'
import Button from 'components/Button'
import Exercises from 'views/shared/Exercises'
import Form from './Form'
import DeleteButton from './DeleteButton'
import CreateWorkoutButton from './CreateWorkoutButton'

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
