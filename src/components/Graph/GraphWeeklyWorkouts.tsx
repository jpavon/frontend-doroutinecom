import * as React from 'react'
import { Bar } from '@vx/shape'
import { Group } from '@vx/group'
import { scaleBand, scaleLinear } from '@vx/scale'
import { GridRows } from '@vx/grid'
import { max } from 'd3-array'

import { WeeklyWorkoutGraph } from 'data/graphs/selectors'

import GraphWrapper from 'components/Graph/GraphWrapper'
import GraphAxisBottom from 'components/Graph/GraphAxisBottom'

// accessors
const x = (d: WeeklyWorkoutGraph) => d.week
const y = (d: WeeklyWorkoutGraph) => d.completed

interface GraphWeeklyWorkouts {
    data: WeeklyWorkoutGraph[]
}
const GraphWeeklyWorkouts: React.SFC<GraphWeeklyWorkouts> = (props) => (
    <GraphWrapper
        render={({ width, height }) => {
            const data = props.data

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
                            <GraphAxisBottom scale={xScale} top={yMax} />
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
                                            fill="rgba(76, 144, 194, .2)"
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
                                    backgroundColor: 'transparent',
                                    boxShadow: 'none',
                                    color: 'rgba(76, 144, 194, .7)',
                                    width: xScale.bandwidth(),
                                    textAlign: 'center',
                                    fontSize: 20,
                                    top: yScale(y(d)) - 16,
                                    left: xScale(x(d)) + marginLeft
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

export default GraphWeeklyWorkouts
