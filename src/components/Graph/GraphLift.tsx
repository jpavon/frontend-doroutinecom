import * as React from 'react'
import { Group } from '@vx/group'
import { scaleBand, scaleLinear } from '@vx/scale'
import { GridRows } from '@vx/grid'
import { LinePath, AreaClosed } from '@vx/shape'
import { curveMonotoneX } from '@vx/curve'
import { GlyphDot } from '@vx/glyph'
import { max, min } from 'd3-array'

import { LiftSetsGraph } from 'data/graphs/selectors'

import GraphWrapper from 'components/Graph/GraphWrapper'
import GraphAxisLeft from 'components/Graph/GraphAxisLeft'
import GraphAxisBottom from 'components/Graph/GraphAxisBottom'
import GraphEmpty from 'components/Graph/GraphEmpy'

// accessors
const x = (d: LiftSetsGraph) => d.day
const y = (d: LiftSetsGraph) => d.rm

interface GraphLift {
    data: LiftSetsGraph[]
}

const GraphLift: React.SFC<GraphLift> = (props) => {
    const data = props.data

    if (data.length === 0) {
        return <GraphEmpty />
    }

    return (
        <GraphWrapper
            render={({ width, height }) => {
                // margins
                const marginLeft = 40
                const marginRight = 40
                const marginBottom = 60
                const marginTop = 20

                // bounds
                const xMax = width - marginLeft - marginRight
                const yMax = height - marginBottom

                // scales
                const xScale = scaleBand({
                    rangeRound: [0, xMax],
                    domain: data.map(x),
                    paddingInner: 1
                })

                const yDomainMax = max(data, y)! + 20
                const minDomain = min(data, y)! - 20
                const yDomainMin = minDomain > 0 ? minDomain : 0
                const yScale = scaleLinear({
                    rangeRound: [yMax, 0],
                    domain: [yDomainMin, yDomainMax]
                })

                return (
                    <>
                        <svg width={width} height={height}>
                            <GraphAxisLeft
                                yScale={yScale}
                                marginLeft={marginLeft}
                                marginTop={marginTop}
                                numTicks={5}
                            />
                            <Group
                                left={marginLeft}
                                right={marginRight}
                                top={marginTop}
                            >
                                <GridRows
                                    scale={yScale}
                                    width={xMax}
                                    numTicks={5}
                                />
                                <GraphAxisBottom scale={xScale} top={yMax} />
                                <AreaClosed
                                    data={data}
                                    xScale={xScale}
                                    yScale={yScale}
                                    x={x}
                                    y={y}
                                    stroke={null}
                                    strokeWidth={null}
                                    fill={'rgba(76, 144, 194, .05)'}
                                    curve={curveMonotoneX}
                                />
                                <LinePath
                                    data={data}
                                    xScale={xScale}
                                    yScale={yScale}
                                    x={x}
                                    y={y}
                                    stroke="rgba(76, 144, 194, .8)"
                                    strokeWidth={2}
                                    curve={curveMonotoneX}
                                    glyph={(d: LiftSetsGraph, i: number) => (
                                        <g key={`line-point-${i}`}>
                                            <GlyphDot
                                                cx={xScale(x(d))}
                                                cy={yScale(y(d))}
                                                r={6}
                                                fill="#fff"
                                                stroke="rgba(76, 144, 194, .8)"
                                                strokeWidth={2}
                                            />
                                        </g>
                                    )}
                                />
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
                                        color: 'rgba(76, 144, 194, 1)',
                                        fontSize: 14,
                                        top: yScale(y(d)) - 14,
                                        left: xScale(x(d)) + marginLeft - 10,
                                        transform: 'rotate(-20deg)'
                                    }}
                                >
                                    {d.set}
                                </div>
                            )
                        })}
                    </>
                )
            }}
        />
    )
}

export default GraphLift
