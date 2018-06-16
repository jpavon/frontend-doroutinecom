import * as React from 'react'
import { Transition as SpringTransition, animated } from 'react-spring'

export interface ITransitionProps {
    // tslint:disable-next-line:no-any
    render: React.ReactElement<any> | Array<React.ReactElement<any>>
    className?: string
}

const Transition: React.SFC<ITransitionProps> = (props) => {
    if (Array.isArray(props.render) && props.render.length > 0) {
        return (
            <SpringTransition
                native={true}
                keys={props.render.map((item) => item.key)}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}
            >
                {props.render.map((item) => (styles: object) => (
                    <animated.div
                        className={props.className}
                        style={{ ...styles }}
                    >
                        {item}
                    </animated.div>
                ))}
            </SpringTransition>
        )
    }

    // tslint:disable-next-line:no-any
    return props.render as React.ReactElement<any>
}

export default Transition
