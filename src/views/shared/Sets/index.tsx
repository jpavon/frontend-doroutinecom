import * as React from 'react'
import { connect } from 'react-redux'

import { RootState } from 'data/types'
import { postSet, putSet, deleteSet } from 'data/sets/actions'
import { userSelector } from 'data/user/selectors'
import {
    setsExerciseSelector,
    previouslyCompletedSetsSelector
} from 'data/sets/selectors'
import { statusConstants } from 'data/constants'
import Button from 'components/Button'
import AutoSaveForm from 'components/AutoSaveForm'
import Input from 'components/AutoSaveForm/Input'
import Checkbox from 'components/AutoSaveForm/Checkbox'
import Label from 'components/Form/Label'
import {
    SetTransition,
    SetsHeader,
    SetsHeaderItem,
    SetsHeaderItemToggle,
    Set as SetWrapper,
    SetItem,
    SetItemWithAction,
    SetsButtonCreate,
    setHeight
} from './style'

interface OwnProps {
    exerciseId: number
    liftId: number | null
    isWorkout: boolean
    toggleRemoveButtons: () => void
    isRemoveButtonsVisible: boolean
}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class Sets extends React.Component<Props> {
    public componentDidMount() {
        if (this.props.sets.length === 0) {
            this.handleCreate()
        }
    }

    private handleCreate = () => {
        this.props.postSet({
            exerciseId: this.props.exerciseId
        })
    }

    public render() {
        return this.props.user ? (
            <>
                <SetsHeader>
                    <SetsHeaderItem>
                        <small>Set</small>
                    </SetsHeaderItem>
                    <SetsHeaderItem>
                        <small>Reps</small>
                    </SetsHeaderItem>
                    <SetsHeaderItem>
                        <small>{this.props.user.weightMeasure}</small>
                    </SetsHeaderItem>
                    {this.props.isWorkout ? (
                        <SetsHeaderItemToggle>
                            <Button
                                onClick={this.props.toggleRemoveButtons}
                                data-e2e="set-action-toggle-actions"
                            >
                                {this.props.isRemoveButtonsVisible ? '✓' : 'X'}
                            </Button>
                        </SetsHeaderItemToggle>
                    ) : (
                        <SetsHeaderItem />
                    )}
                </SetsHeader>
                <SetTransition e2e="set" animateHeight={setHeight}>
                    {this.props.sets.map((set, index) => {
                        const isDeleting =
                            this.props.entitiesStatus[set.id] ===
                            statusConstants.STATUS_DELETING

                        const isRemoveButtonsVisible =
                            !this.props.isWorkout ||
                            this.props.isRemoveButtonsVisible

                        const previousSet =
                            this.props.previouslyCompletedSets &&
                            this.props.previouslyCompletedSets[index]

                        return (
                            <AutoSaveForm
                                key={set.id}
                                initialValues={set}
                                update={this.props.putSet}
                                render={({ values }) => (
                                    <SetWrapper
                                        isCompleted={values.isCompleted}
                                    >
                                        <SetItem>
                                            <small>#{index + 1}</small>
                                        </SetItem>
                                        <SetItem data-e2e="set-reps">
                                            <Input
                                                type="number"
                                                name="reps"
                                                placeholder={
                                                    previousSet &&
                                                    previousSet.reps
                                                        ? '' + previousSet.reps
                                                        : 'Reps'
                                                }
                                                data-e2e="set-input-reps"
                                            />
                                        </SetItem>
                                        <SetItem data-e2e="set-weight">
                                            <Input
                                                type="number"
                                                name="weight"
                                                placeholder={
                                                    previousSet &&
                                                    previousSet.weight
                                                        ? '' +
                                                          previousSet.weight
                                                        : 'Weight'
                                                }
                                                data-e2e="set-input-weight"
                                            />
                                        </SetItem>
                                        <SetItemWithAction>
                                            {!isRemoveButtonsVisible && (
                                                <Label
                                                    htmlFor={`set-checkbox${
                                                        values.id
                                                    }`}
                                                    title="Mark as Completed"
                                                    data-e2e="set-action-checkbox"
                                                >
                                                    <Checkbox
                                                        id={`set-checkbox${
                                                            values.id
                                                        }`}
                                                        name="isCompleted"
                                                    />
                                                </Label>
                                            )}
                                            {isRemoveButtonsVisible && (
                                                <Button
                                                    icon="remove"
                                                    danger={true}
                                                    onClick={() =>
                                                        this.props.deleteSet(
                                                            set.id
                                                        )
                                                    }
                                                    disabled={isDeleting}
                                                    title="Delete Set"
                                                    data-e2e="set-action-remove"
                                                />
                                            )}
                                        </SetItemWithAction>
                                    </SetWrapper>
                                )}
                            />
                        )
                    })}
                </SetTransition>
                <SetsButtonCreate>
                    <Button
                        onClick={this.handleCreate}
                        data-e2e="sets-button-create"
                    >
                        Add Set
                    </Button>
                </SetsButtonCreate>
            </>
        ) : null
    }
}

const mapStateToProps = (state: RootState, props: OwnProps) => ({
    sets: setsExerciseSelector(props.exerciseId)(state),
    entitiesStatus: state.sets.entitiesStatus,
    user: userSelector(state),
    previouslyCompletedSets: props.liftId
        ? previouslyCompletedSetsSelector(props.liftId)(state)
        : []
})

const mapDispatchToProps = {
    postSet,
    putSet,
    deleteSet
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sets)
