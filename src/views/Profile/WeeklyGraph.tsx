import * as React from 'react'
import { connect } from 'react-redux'
import { Bar } from '@vx/shape'
import { Group } from '@vx/group'
import { scaleBand, scaleLinear } from '@vx/scale'
import { GridRows } from '@vx/grid'
import { max } from 'd3-array'

import { RootState } from 'data/types'
import { weeklyWorkoutsSelector } from 'data/graphs/selectors'
import GraphWrapper from 'components/Graph/GraphWrapper'
import GraphAxisBottom from 'components/Graph/GraphAxisBottom'

interface OwnProps {}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

const x = (d: Props['weeklyWorkouts'][0]) => d.week
const y = (d: Props['weeklyWorkouts'][0]) => d.completed

class WeeklyGraph extends React.Component<Props> {
    public render() {
        const data = this.props.weeklyWorkouts
        return (
            <GraphWrapper
                render={({ width, height }) => {
                    // margins
                    const marginLeft = 2
                    const marginRight = 2
                    const marginBottom = 60
                    const marginTop = 20

                    // bounds
                    const xMax = width - marginLeft - marginRight
                    const yMax = height - marginBottom

                    // scales
                    const xScale = scaleBand({
                        rangeRound: [0, xMax],
                        domain: data.map(x),
                        paddingInner: 0.3
                    })

                    const yScale = scaleLinear({
                        rangeRound: [yMax, 0],
                        domain: [0, max(data, y)! + 1]
                    })

                    return (
                        <>
                            <svg width={width} height={height}>
                                <Group
                                    left={marginLeft}
                                    right={marginRight}
                                    top={marginTop}
                                >
                                    <GridRows
                                        scale={yScale}
                                        width={xMax}
                                        numTicks={max(data, y)! + 1}
                                    />
                                    <GraphAxisBottom
                                        scale={xScale}
                                        top={yMax}
                                    />
                                    {data.map((d, i) => {
                                        if (y(d) === 0) {
                                            return null
                                        }
                                        const barHeight = yMax - yScale(y(d))
                                        return (
                                            <Group key={`bar-${x(d)}`}>
                                                <Bar
                                                    width={xScale.bandwidth()}
                                                    height={barHeight}
                                                    x={xScale(x(d))}
                                                    y={yScale(y(d))}
                                                    fill="rgba(76, 144, 194, .6)"
                                                />
                                            </Group>
                                        )
                                    })}
                                </Group>
                            </svg>
                            {data.map((d, i) => {
                                if (y(d) === 0) {
                                    return null
                                }
                                return (
                                    <div
                                        key={i}
                                        style={{
                                            position: 'absolute',
                                            top: yScale(y(d)) + 26,
                                            left:
                                                xScale(x(d)) + marginLeft - 12,
                                            width: xScale.bandwidth(),
                                            textAlign: 'right',
                                            backgroundColor: 'transparent',
                                            boxShadow: 'none',
                                            color: '#fff',
                                            fontSize: width > 600 ? 26 : 20,
                                            textShadow:
                                                '0px 1px 2px rgba(0,0,0,.2)'
                                        }}
                                    >
                                        {y(d)}
                                    </div>
                                )
                            })}
                        </>
                    )
                }}
            />
        )
    }
}

const mapStateToProps = (state: RootState, props: OwnProps) => ({
    weeklyWorkouts: weeklyWorkoutsSelector(state)
})

const mapDispatchToProps = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WeeklyGraph)
