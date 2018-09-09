import * as React from 'react'
import { connect } from 'react-redux'

import { pendingWorkoutsSelector } from 'data/workouts/selectors'
import { RootState } from 'data/types'
import Badge from 'components/Badge'

interface OwnProps {}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class PengindBadge extends React.Component<Props> {
    public render() {
        return <Badge value={this.props.workouts.length} />
    }
}

const mapStateToProps = (state: RootState, props: OwnProps) => ({
    workouts: pendingWorkoutsSelector(state)
})

const mapDispatchToProps = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PengindBadge)
