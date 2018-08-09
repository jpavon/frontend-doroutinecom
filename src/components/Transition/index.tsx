import * as React from 'react'
import { Transition as SpringTransition } from 'react-spring'

export interface Props {
    // tslint:disable-next-line:no-any
    children: React.ReactElement<any> | Array<React.ReactElement<any>>
    e2e?: string
    animateHeight?: number
}

class Transition extends React.Component<Props> {
    private mounted: undefined | true

    public componentDidMount() {
        this.mounted = true
    }

    public render() {
        const children = this.props.children

        if (Array.isArray(children)) {
            const childrenArr = children as Array<
                React.ReactElement<{ key: string }>
            >
            return (
                <SpringTransition
                    items={childrenArr}
                    keys={childrenArr.map((item) => item.key)}
                    from={
                        this.mounted && {
                            opacity: 0,
                            height: this.props.animateHeight ? 0 : undefined
                        }
                    }
                    enter={{
                        opacity: 1,
                        height: this.props.animateHeight
                    }}
                    leave={{
                        opacity: 0,
                        height: this.props.animateHeight ? 0 : undefined
                    }}
                >
                    {childrenArr.map((item) => (styles: object) => (
                        <div data-e2e={this.props.e2e} style={styles}>
                            {item}
                        </div>
                    ))}
                </SpringTransition>
            )
        }

        return children
    }
}

export default Transition
