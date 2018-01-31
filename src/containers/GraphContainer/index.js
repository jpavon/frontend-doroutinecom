import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Chartist from 'chartist'

import { graphDataSelector } from 'data/graphs/selectors'

class GraphContainer extends Component {

    static propTypes = {
        graphData: PropTypes.object.isRequired
    }

    componentDidMount() {
        new Chartist.Bar(this.graph, {
                labels: this.props.graphData.labels,
                series: [
                    this.props.graphData.series
                ]
            },
            {
                high: this.props.graphData.maxSerie + 2,
                low: 0,
                axisY: {
                    onlyInteger: true,
                },
                axisX: {
                    showGrid: false,
                }
        })
    }

    render() {
        return (
            <div className="ct-chart" ref={(ref) => this.graph = ref} />
        )
    }
}

const mapStateToProps = (state, props) => ({
    graphData: graphDataSelector(props.routineId)(state),
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(GraphContainer)
