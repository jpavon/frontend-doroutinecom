import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Chart from 'chart.js'
import moment from 'moment'

import { graphDataSelector } from 'data/selectors'

class GraphContainer extends Component {

    static propTypes = {
        graphData: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.graph = new Chart(this.graph, {
            type: 'line',
            data: {
                labels: [
                    moment("2009-04-11").format('MMMM DD, YYYY'),
                    moment("2009-05-16").format('MMMM DD, YYYY'),
                    moment("2009-10-10").format('MMMM DD, YYYY'),
                    moment("2009-11-28").format('MMMM DD, YYYY'),
                    moment("2010-02-14").format('MMMM DD, YYYY'),
                    moment("2015-03-13").format('MMMM DD, YYYY'),
                ],
                datasets: [{
                    label: 'Weight',
                    data: [
                        100,
                        80,
                        90,
                        140,
                        150,
                        160
                    ],
                    backgroundColor: 'rgba(43, 129, 165, 0.1)',
                    borderColor: '#2b82a5',
                    pointBackgroundColor: '#2b82a5',
                    lineTension: 0,
                }]
            },
            options: {
                legend: {
                    display: false
                },
                tooltips: {
                    displayColors: false
                },
                elements: {
                    point: {
                        radius: 5,
                        backgroundColor: '#2b82a5'
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            callback: function(value, index, values) {
                                return value + ' kg';
                            }
                        }
                    }]
                }
            }
        })
    }

    render() {
        console.log('graphData', this.props.graphData)
        return (
            <canvas ref={(ref) => this.graph = ref} />
        )
    }
}

const mapStateToProps = (state, props) => ({
    graphData: graphDataSelector(state),
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(GraphContainer)
