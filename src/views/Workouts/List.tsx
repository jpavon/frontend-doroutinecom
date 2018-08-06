import * as React from 'react'
import { connect } from 'react-redux'
import { OutputSelector } from 'reselect'

import { RootState } from 'data/types'
import NoData from 'components/NoData'
import ListItem from 'views/Workouts/ListItem'
import { Workouts } from './style'
import { Workout } from 'data/workouts/types'

interface OwnProps {
    selector: OutputSelector<
        RootState,
        Workout[],
        (res: Workout[]) => Workout[]
    >
    noDataText: string
}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class List extends React.Component<Props> {
    public render() {
        return (
            <Workouts>
                {this.props.workouts.length > 0 ? (
                    this.props.workouts.map((workout, i) => (
                        <ListItem key={workout.id} workout={workout} />
                    ))
                ) : (
                    <NoData text={this.props.noDataText} />
                )}
            </Workouts>
        )
    }
}

const mapStateToProps = (state: RootState, props: OwnProps) => ({
    workouts: props.selector(state)
})

const mapDispatchToProps = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)
