import * as React from 'react'
import { connect } from 'react-redux'

import { IRootState } from 'data/types'
import { IFormatedRoutine } from 'data/routines/types'

// import history from 'utils/history'
import { createRoutine } from 'data/routines/actions'
import { routinesSelector, defaultRoutinesSelector } from 'data/routines/selectors'
import { STATUS_LOADING } from 'data/constants'

import Routines from 'components/Routines/Routines'
import Routine from 'components/Routines/Routine'
import NoData from 'components/NoData'
import TopNav from 'components/TopNav'
import Info from 'components/Info'

interface IOwnProps {
}

interface IStateProps {
    routines: IFormatedRoutine[]
    defaultRoutines: IFormatedRoutine[]
    isLoading: boolean
}

interface IDispatchProps {
    createRoutine: () => void
}

interface IProps extends IOwnProps, IStateProps, IDispatchProps {}

class RoutinesContainer extends React.Component<IProps> {

    handleCreate = () => {
        this.props.createRoutine()
            // .then((resp) => {
            //     history.push(`/routines/${resp.payload.id}`)
            // })
    }

    render() {
        return (
            <>
                <TopNav
                    title="Your Routines"
                    rightLabel="Create"
                    right={{
                        onClick: this.handleCreate,
                        disabled: this.props.isLoading,
                        className: 'routine-button-create'
                    }}
                />
                <Routines>
                    {this.props.routines.length > 0 ?
                        this.props.routines.map((routine, i) => (
                            <Routine
                                key={routine.id}
                                routine={routine}
                            />
                        )) :
                        <NoData
                            text="No routine created."
                        />
                    }
                </Routines>
                {this.props.defaultRoutines.length > 0 &&
                    <>
                        <TopNav
                            title="PPL"
                        />
                        <Info name="ppl" />
                        <Routines>
                            {this.props.defaultRoutines.map((routine, i) => (
                                <Routine
                                    key={routine.id}
                                    routine={routine}
                                />
                            ))}
                        </Routines>
                    </>
                }
            </>
        )
    }
}

const mapStateToProps = (state: IRootState, props: IOwnProps): IStateProps => ({
    routines: routinesSelector(state),
    defaultRoutines: defaultRoutinesSelector(state),
    isLoading: state.routines.fetchStatus === STATUS_LOADING,
})

const mapDispatchToProps: IDispatchProps = {
    createRoutine,
}

export default connect(mapStateToProps, mapDispatchToProps)(RoutinesContainer)
