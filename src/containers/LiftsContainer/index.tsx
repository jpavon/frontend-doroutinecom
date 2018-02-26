import * as React from 'react'
import { connect } from 'react-redux'

import { RootState } from 'data/types'
import { FormatedLift } from 'data/lifts/types'

// import history from 'utils/history'
import { liftsSelector } from 'data/lifts/selectors'
import { createLift } from 'data/lifts/actions'
import { STATUS_LOADING } from 'data/utils'

import Lifts from 'components/Lifts/Lifts'
import Lift from 'components/Lifts/Lift'
import NoData from 'components/NoData'
import TopNav from 'components/TopNav'

interface OwnProps {
    isAuth: boolean
}

interface StateProps {
    lifts: FormatedLift[]
    isLoading: boolean
}

interface DispatchProps {
    createLift: () => void
}

interface Props extends OwnProps, StateProps, DispatchProps {}

class LiftsContainer extends React.Component<Props> {

    static propTypes = {

    }

    handleCreate = () => {
        this.props.createLift()
            // .then((resp) => {
            //     history.push(`/lifts/${resp.payload.id}`)
            // })
    }

    render() {
        return (
            <>
                <TopNav
                    title="Lifts"
                    rightLabel="Create"
                    right={{
                        onClick: this.handleCreate,
                        disabled: this.props.isLoading,
                        className: 'lift-button-create'
                    }}
                />
                <Lifts>
                    {this.props.lifts.length > 0 ?
                        this.props.lifts.map((lift, i) => (
                            <Lift
                                key={lift.id}
                                lift={lift}
                            />
                        )) :
                        <NoData
                            text="No lift created"
                        />
                    }
                </Lifts>
            </>
        )
    }
}

const mapStateToProps = (state: RootState, props: OwnProps): StateProps => ({
    lifts: liftsSelector(state),
    isLoading: state.lifts.fetchStatus === STATUS_LOADING,
})

const mapDispatchToProps: DispatchProps = {
    createLift,
}

export default connect(mapStateToProps, mapDispatchToProps)(LiftsContainer)
