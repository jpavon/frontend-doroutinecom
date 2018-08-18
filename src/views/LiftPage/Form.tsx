import * as React from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

import { RootState } from 'data/types'
import history from 'utils/history'
import { liftSelector } from 'data/lifts/selectors'
import { putLift } from 'data/lifts/actions'
import { Status } from 'data/types'
import AutoSaveForm from 'components/AutoSaveForm'
import Input from 'components/AutoSaveForm/Input'
import Field from 'components/Field'
import { Lift } from './style'

interface OwnProps {
    liftId: number
}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class LiftContainer extends React.Component<Props> {
    public componentDidMount() {
        if (this.props.isStatusLoaded && !this.props.lift) {
            history.replace('/lifts')
        }
    }

    public render() {
        return this.props.lift ? (
            <>
                {this.props.lift.name && (
                    <Helmet>
                        <title>{this.props.lift.name}</title>
                    </Helmet>
                )}
                <Lift>
                    <AutoSaveForm
                        initialValues={this.props.lift}
                        update={this.props.putLift}
                        render={() => (
                            <Field label="Name" id="name">
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="Type the lift name"
                                    data-e2e="lift-input-name"
                                />
                            </Field>
                        )}
                    />
                </Lift>
            </>
        ) : null
    }
}

const mapStateToProps = (state: RootState, props: OwnProps) => ({
    lift: liftSelector(state, props.liftId),
    isStatusLoaded: state.lifts.status === Status.STATUS_LOADED
})

const mapDispatchToProps = {
    putLift
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LiftContainer)
