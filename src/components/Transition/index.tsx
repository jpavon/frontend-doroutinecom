import * as React from 'react'
import { Transition as SpringTransition, animated } from 'react-spring'

// tslint:disable-next-line:no-any
type SFC<P = {}> = (props: P) => React.ReactElement<any> | null

export interface Transition {
    // tslint:disable-next-line:no-any
    children: React.ReactElement<any> | Array<React.ReactElement<any>>
    e2e?: string
}

const Transition: SFC<Transition> = (props) => {
    if (Array.isArray(props.children) && props.children.length > 0) {
        return (
            <SpringTransition
                native={true}
                keys={props.children.map((item) => item.key)}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}
            >
                {props.children.map((item) => (styles: object) => (
                    <animated.div data-e2e={props.e2e} style={{ ...styles }}>
                        {item}
                    </animated.div>
                ))}
            </SpringTransition>
        )
    } else if (!Array.isArray(props.children)) {
        return props.children
    }

    return null
}

export default Transition
