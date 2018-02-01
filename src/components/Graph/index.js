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

        const datasetMax = this.props.data.datasetMax

        const stepSize = datasetMax < 9 ? 1 :
            datasetMax < 21 ? 2 :
            Math.round((datasetMax/4) / 10) * 10

        const max = datasetMax < 21 ? Math.round(datasetMax/2) * 2 + stepSize :
            Math.round(datasetMax/10) * 10 + stepSize

        const options = {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        min: 0,
                        max: max < 5 ? 5 : max,
                        stepSize: stepSize,
                    },
                }],
                xAxes: [{
                    stacked: false,
                    ticks: {
                        autoSkip: false,
                        // maxTicksLimit: 1
                    },
                    gridLines: {
                        display: false
                    }
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
                    tension: 0.1
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
                // enabled: this.props.type === 'bar' ? false : true,
                displayColors: false,
                backgroundColor: 'rgba(76, 144, 194, .8)',
                cornerRadius: 2,
                bodyFontSize: 20,
                bodySpacing: 20,
                xPadding: 20,
                yPadding: 10,
                titleSpacing: 20,
                callbacks: {
                    label: (tooltipItem, data) => {
                        const reps = data.meta && data.meta.reps
                        return reps ?
                            `${reps[tooltipItem.index]}x${tooltipItem.yLabel}kg` :
                            `${tooltipItem.yLabel}`
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
