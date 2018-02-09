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
            datasetMin: PropTypes.number,
            meta: PropTypes.object
        }).isRequired
    }

    static defaultProps = {
        type: 'bar'
    }

    componentDidMount() {

        const ctx = this.graph.getContext('2d')

        const datasetMax = this.props.data.datasetMax
        const datasetMin = this.props.data.datasetMin

        const yAxeStepRange = datasetMax < 8 ? 1 :
            datasetMax < 20 ? 2 :
            datasetMax < 50 ? 5 :
            10

        const stepSize = Math.max(1, Math.round((datasetMax/5) / yAxeStepRange) * yAxeStepRange)

        const max = datasetMax < 5 ? 5 :
            Math.round(datasetMax/stepSize) * stepSize + stepSize

        const min = datasetMin && Math.max(0, Math.round(datasetMin/stepSize) * stepSize - stepSize * 2)

        const options = {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        min: min || 0,
                        max,
                        stepSize: stepSize,
                        autoSkip: false,
                    },
                    // scaleLabel: {
                    //     display: this.props.type === 'line',
                    //     labelString: 'Estimated 1RM'
                    // }
                }],
                xAxes: [{
                    stacked: false,
                    ticks: {
                        autoSkip: false,
                    },
                    gridLines: {
                        display: false
                    }
                }]
            },
            legend: { display: false },
            responsive: true,
            animation: false,
            barThickness: 1,
            elements: {
                line: {
                    backgroundColor: 'rgba(76, 144, 194, .1)',
                    borderColor: 'rgba(76, 144, 194, .4)',
                    borderWidth: 2,
                    tension: 0.1
                },
                point: {
                    radius: 5,
                    hoverRadius: 4,
                    backgroundColor: 'rgba(76, 144, 194, 1)',
                    borderWidth: 0,
                    hitRadius: 20
                },
                rectangle: {
                    backgroundColor: 'rgba(76, 144, 194, .4)',
                    borderWidth: 1,
                },
            },
            tooltips: {
                displayColors: false,
                backgroundColor: 'rgba(76, 144, 194, .95)',
                cornerRadius: 2,
                bodyFontSize: 20,
                bodySpacing: 20,
                xPadding: 20,
                yPadding: 10,
                titleSpacing: 20,
                callbacks: {
                    label: (tooltipItem, data) => {
                        const reps = data.meta && data.meta.reps
                        const weight = data.meta && data.meta.weight
                        return (reps && weight) ?
                            `${reps[tooltipItem.index]}x${weight[tooltipItem.index]}${data.meta.weightMeasure}` :
                            `${tooltipItem.yLabel} Workout${(Number(tooltipItem.yLabel) > 1) ? 's' : ''}`
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
            <div className="graph">
                {this.props.data.dataset.length === 0 &&
                    <div className="graph-no-data">
                        Complete a workout to start tracking your progress.
                    </div>
                }
                <canvas width="800" height="320" ref={(ref) => this.graph = ref} />
            </div>
        )
    }
}

export default Graph
