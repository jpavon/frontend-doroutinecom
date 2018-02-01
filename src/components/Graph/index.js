import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Chart from 'chart.js'

import './style.css'

class Graph extends Component {

    static propTypes = {
        type: PropTypes.oneOf(['line', 'bar']),
        data: PropTypes.shape({
            labels: PropTypes.array.isRequired,
            dataset: PropTypes.array.isRequired,
            datasetMax: PropTypes.number.isRequired,
            meta: PropTypes.object
        }).isRequired
    }

    static defaultProps = {
        type: 'bar'
    }

    componentDidMount() {

        const ctx = this.graph.getContext('2d')

        const stepSize = Math.round((this.props.data.datasetMax/5) / 10) * 10
        const max = stepSize < 7 ? 7 : Math.round(this.props.data.datasetMax / stepSize) * stepSize + stepSize

        console.log(stepSize, max)

        const options = {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        min: 0,
                        max: max,
                        stepSize: stepSize,
                    },
                }],
                xAxes: [{
                    display: true,
                    stacked: false,
                    ticks: {
                        autoSkip: false
                    },
                    gridLines: {
                        display: false
                    },
                    // time: {
                    //   unit: 'week'
                    // }
                }]
            },
            legend: { display: false },
            responsive: true,
            animation: false,
            elements: {
                line: {
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(76, 144, 194, .6)',
                    borderWidth: 2,
                },
                point: {
                    radius: 5,
                    hoverRadius: 7,
                    backgroundColor: 'rgba(76, 144, 194, 1)',
                    borderWidth: 0,
                    hitRadius: 20
                },
                rectangle: {
                    backgroundColor: 'rgba(76, 144, 194, .6)',
                    borderWidth: 1
                },
            },
            tooltips: {
                enabled: this.props.type === 'bar' ? false : true,
                displayColors: false,
                backgroundColor: 'rgba(76, 144, 194, .8)',
                cornerRadius: 2,
                bodyFontSize: 20,
                bodySpacing: 20,
                xPadding: 20,
                yPadding: 10,
                callbacks: {
                    label: (tooltipItem, data) => {
                        const reps = data.meta && data.meta.reps
                        return `${reps[tooltipItem.index]}x${tooltipItem.yLabel}kg`
                    }
                }
            }
        }

        new Chart(ctx, {
            type: this.props.type,
            data: {
                labels: this.props.data.labels,
                datasets: [{
                    data: this.props.data.dataset,
                }],
                meta: this.props.data.meta
            },
            options
        })
    }

    render() {
        return (
            <canvas ref={(ref) => this.graph = ref} />
        )
    }
}

export default Graph
