import React from 'react'

import Button from 'components/Button'
import Section from 'components/Section'
import Input from 'components/Form/Input'
import InputWithItem from 'components/Form/InputWithItem'
import Select from 'components/Form/Select'

import './style.css'

const Routine = ({children, create, createType, isLoading, setRef}) => (
    <Section title="Routines" className="routines">
        <div className="routines-button-create">
            <Button onClick={create} disabled={isLoading}>New routine</Button>
        </div>
        <div className="routines-program">
            <form method="post" onSubmit={createType}>
                <div className="routines-program-row">
                    <div className="routines-program-col">
                        <h3>Max Sets</h3>
                        <br />

                        <h4>Bench Press</h4>
                        <InputWithItem
                            item="Weight"
                        >
                            <Input
                                name="benchWeight"
                                defaultValue="32"
                                inputRef={(ref) => setRef(ref, 'benchWeight')}
                            />
                        </InputWithItem>
                        <InputWithItem
                            item="Reps"
                        >
                            <Input
                                name="benchReps"
                                defaultValue="8"
                                inputRef={(ref) => setRef(ref, 'benchReps')}
                            />
                        </InputWithItem>

                        <br />
                        <h4>Squat</h4>
                        <InputWithItem
                            item="Weight"
                        >
                            <Input
                                name="squatWeight"
                                defaultValue="105"
                                inputRef={(ref) => setRef(ref, 'squatWeight')}
                            />
                        </InputWithItem>
                        <InputWithItem
                            item="Reps"
                        >
                            <Input
                                name="squatReps"
                                defaultValue="3"
                                inputRef={(ref) => setRef(ref, 'squatReps')}
                            />
                        </InputWithItem>

                        <br />
                        <h4>Deadlift</h4>
                        <InputWithItem
                            item="Weight"
                        >
                            <Input
                                name="deadliftWeight"
                                defaultValue="140"
                                inputRef={(ref) => setRef(ref, 'deadliftWeight')}
                            />
                        </InputWithItem>
                        <InputWithItem
                            item="Reps"
                        >
                            <Input
                                name="deadliftReps"
                                defaultValue="5"
                                inputRef={(ref) => setRef(ref, 'deadliftReps')}
                            />
                        </InputWithItem>

                        <br />
                        <h4>OHP</h4>
                        <InputWithItem
                            item="Weight"
                        >
                            <Input
                                name="ohpWeight"
                                defaultValue="55"
                                inputRef={(ref) => setRef(ref, 'ohpWeight')}
                            />
                        </InputWithItem>
                        <InputWithItem
                            item="Reps"
                        >
                            <Input
                                name="ohpReps"
                                defaultValue="3"
                                inputRef={(ref) => setRef(ref, 'ohpReps')}
                            />
                        </InputWithItem>
                    </div>
                    <div className="routines-program-col">
                        <h3>Options</h3>
                        <br />

                        <h4>Programs</h4>
                        <Select
                            name="programId"
                            inputRef={(ref) => setRef(ref, 'programId')}
                            defaultValue="1"
                            options={[
                                {id: '1', name: 'doroutine PPL'},
                                {id: '2', name: '531'},
                            ]}
                        />

                        <br /><br />
                        <h4>Weight Measure</h4>
                        <Select
                            name="weightMeasure"
                            inputRef={(ref) => setRef(ref, 'weightMeasure')}
                            defaultValue="kg"
                            options={[
                                {id: 'kg', name: 'kg'},
                                {id: 'lbs', name: 'lbs'},
                            ]}
                        />

                        <br /><br />
                        <h4>Round to</h4>
                        <Select
                            name="precision"
                            inputRef={(ref) => setRef(ref, 'precision')}
                            defaultValue="5"
                            options={[
                                {id: '5', name: '5'},
                                {id: '2.5', name: '2.5'},
                                {id: '0.5', name: '0.5'},
                            ]}
                        />
                    </div>
                </div>
                <div className="routines-program-button">
                    <Button type="submit">Create</Button>
                </div>
            </form>
        </div>
        {children}
    </Section>
)

export default Routine
