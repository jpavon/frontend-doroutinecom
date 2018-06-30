import * as React from 'react'
import { AxisLeft } from '@vx/axis'

// tslint:disable:no-any
interface Props {
    yScale: any
    marginLeft: number
    marginTop: number
    numTicks: number
}

const GraphAxisLeft: React.SFC<Props> = (props) => (
    <AxisLeft
        scale={props.yScale}
        top={props.marginTop}
        left={props.marginLeft}
        hideZero={true}
        numTicks={props.numTicks}
        axisClassName="axis-class"
        labelClassName="axis-label-class"
        tickClassName="tick-label-class"
        stroke={null}
        tickStroke={null}
        tickLabelProps={() => ({
            fill: '#666',
            textAnchor: 'end',
            fontSize: 14,
            fontFamily: 'Arial',
            dx: '-0.25em',
            dy: '0.25em'
        })}
        tickFormat={(val: number, index: number) => val}
    />
)

export default GraphAxisLeft
