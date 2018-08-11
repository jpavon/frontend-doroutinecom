import * as React from 'react'
import { Transition as SpringTransition } from 'react-spring'

export interface Props {
    e2e?: string
}

class Transition extends React.Component<Props> {
    private mounted: undefined | true

    public componentDidMount() {
        this.mounted = true
    }

    public render() {
        const children = this.props.children

        if (Array.isArray(children)) {
            const childrenArr = children as React.ReactNode[]
            return (
                <SpringTransition
                    items={childrenArr}
                    keys={childrenArr.map((item: { key: string }) => item.key)}
                    from={
                        this.mounted && {
                            opacity: 0,
                            height: 0
                        }
                    }
                    enter={{
                        opacity: 1,
                        height: 'auto'
                    }}
                    leave={{
                        opacity: 0,
                        height: 0
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
