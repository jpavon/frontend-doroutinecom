import * as React from 'react'
import { debounce } from 'lodash'

interface Wrapper {
    render: (
        data: {
            width: number
            height: number
        }
    ) => React.ReactNode
}

class GraphWrapper extends React.Component<Wrapper> {
    private ref: React.RefObject<HTMLDivElement> = React.createRef()

    public readonly state = {
        width: window.innerWidth || 800
    }

    public componentDidMount() {
        this.updateWidth()
        window.addEventListener('resize', this.debounceUpdateWidth)
    }

    public componentWillUnmount() {
        window.removeEventListener('resize', this.debounceUpdateWidth)
    }

    private updateWidth = () => {
        if (this.ref && this.ref.current && this.ref.current.parentElement) {
            this.setState({ width: this.ref.current.parentElement.clientWidth })
        }
    }

    private debounceUpdateWidth = debounce(this.updateWidth, 500)

    public render() {
        const width = this.state.width
        const height = width / 2.3
        return (
            <div style={{ position: 'relative' }} ref={this.ref}>
                {this.props.render({ width, height })}
            </div>
        )
    }
}

export default GraphWrapper
