import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Chartist from 'chartist'
// import moment from 'moment'

import { graphDataSelector } from 'data/graphs/selectors'

class GraphContainer extends Component {

    static propTypes = {
        graphData: PropTypes.object.isRequired
    }

    componentDidMount() {
        // this.graph = new Chart(this.graph, {
        //     type: 'bar',
        //     data: {
        //         labels: [
        //             `${moment("2009-04-11").format('MM/DD')} - ${moment("2009-04-18").format('MM/DD')}`,
        //             moment("2009-05-16").format('ll'),
        //             moment("2009-10-10").format('ll'),
        //             moment("2009-11-28").format('ll'),
        //         ],
        //         datasets: [{
        //             label: 'Weight',
        //             data: [
        //                 1,
        //                 2,
        //                 3,
        //                 2,
        //             ],
        //             backgroundColor: 'rgba(43, 129, 165, 0.1)',
        //             borderColor: '#2b82a5',
        //             pointBackgroundColor: '#2b82a5',
        //             lineTension: 0,
        //         }]
        //     },
        //     options: {
        //         animation: false,
        //         scaleOverride:true,
        //         scaleSteps: 1,
        //         legend: {
        //             display: false
        //         },
        //         tooltips: {
        //             enabled: false
        //         },
        //         elements: {
        //             point: {
        //                 radius: 5,
        //                 backgroundColor: '#2b82a5'
        //             }
        //         },
        //         scales: {
        //             yAxes: [{
        //                 ticks: {
        //                     beginAtZero: true,
        //                     callback: function(value, index, values) {
        //                         return value === 1 ? value + ' day' : value + ' days';
        //                     },
        //                 },
        //                 stacked: true
        //             }],
        //             xAxes: [{
        //                 stacked: true
        //             }]
        //         }
        //     }
        // })
        //

        new Chartist.Bar(this.graph, {
                labels: ['1/10 - 7/10', '1/10 - 7/10', '13/10 - 73/10', '13/10 - 17/10'],
                series: [
                    [5, 4, 3, 6]
                ]
            },
            {
                high: 8,
                low: 0,
                // divisor: 1,
                // seriesBarDistance: 10,
                // reverseData: true,
                // horizontalBars: true,
                axisY: {
                    // offset: 70,
                    onlyInteger: true,
                    // scaleMinSpace: 20,
                    // offset: 60,

                },
                axisX: {
                    // offset: 70,
                    onlyInteger: true,
                    // scaleMinSpace: 20
                    // offset: 60,
                    showGrid: false,
                }
        })

    }

    render() {
        console.log('graphData', this.props.graphData)
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
