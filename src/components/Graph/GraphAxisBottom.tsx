import * as React from 'react'
import { AxisBottom } from '@vx/axis'

// tslint:disable:no-any
interface Props {
    scale: any
    top: number
}

const GraphAxisBottom: React.SFC<Props> = (props) => (
    <AxisBottom
        scale={props.scale}
        top={props.top}
        left={0}
        axisClassName="axis-class"
        labelClassName="axis-label-class"
        tickClassName="tick-label-class"
        stroke={null}
        tickStroke={null}
        tickLabelProps={() => ({
            textAnchor: 'middle',
            fontFamily: 'inherit',
            fontSize: 13,
            fill: '#444'
        })}
    />
)

export default GraphAxisBottom
