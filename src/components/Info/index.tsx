import * as React from 'react'

import Button from 'components/Button'

import { Info as StyledInfo, InfoContent } from './style'

interface Props {
    name: string
}

interface State {
    open: boolean
}

class Info extends React.Component<Props, State> {
    public readonly state = {
        open: false
    }

    public render() {
        return (
            <StyledInfo>
                <Button
                    onClick={() =>
                        this.setState((prevState) => ({
                            open: !prevState.open
                        }))
                    }
                >
                    {!this.state.open ? 'Show Information' : 'Hide Information'}
                </Button>

                {this.state.open && (
                    <InfoContent>
                        <h2>The Program</h2>
                        <p>
                            This is a 6 days per week linear progression
                            program, where you increase the weight weekly and do
                            the workouts in the following order PPLPPLR (P=Pull,
                            P=Push, L=Legs, R=Rest). ou can also do PPLRPPLR or
                            rest more than once per week, this will depend on
                            your weekly schedule.
                        </p>
                        <h2>Main Lifts</h2>
                        <p>
                            Main lifts are the first exercise of each workout
                            (Barbell Row, Bench Press and Squat). This are the
                            most important lifts of the program. Increase the
                            weight by 2.5kg or 5lbs each week on this lifts. The
                            starting weight shouldn't be too heavy, start with a
                            weight where you can do 8 reps comfortably and do
                            the 5x5 sets.
                        </p>
                        <h2>Accesory Lifts</h2>
                        <p>
                            The rest of the exercises in the routine. You don't
                            need to increase the weight every week for this
                            lifts. This lifts need to be lightweight comparing
                            to your main lifts and each rep needs to be executed
                            trying to feel the muscle working.
                        </p>
                        <h2>Warmups</h2>
                        <p>
                            3-4 warmups sets are recommended before starting
                            your main lifts. Is also recommended doing light
                            band pull aparts and shoulder dislocations to warmup
                            your shoulders.
                        </p>
                    </InfoContent>
                )}
            </StyledInfo>
        )
    }
}

export default Info
