import * as React from 'react'
import { Transition as SpringTransition, animated } from 'react-spring'

export interface ITransitionProps {
    children: React.ReactElement<{ key: string }>
    className?: string
}

const Transition: React.SFC<ITransitionProps> = (props) => {
    if (Array.isArray(props.children) && props.children.length > 0) {
        return (
            <SpringTransition
                native={true}
                keys={(props.children as Array<{ key: string }>).map(
                    (item) => item.key
                )}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}
            >
                {props.children.map((item) => (styles: object) => (
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

    return props.children
}

export default Transition
