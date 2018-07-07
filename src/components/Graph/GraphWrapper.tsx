import * as React from 'react'
import { debounce } from 'lodash'

interface Props {
    render: (
        data: {
            width: number
            height: number
        }
    ) => React.ReactNode
}

interface State {
    width: number | null
}

class GraphWrapper extends React.Component<Props, State> {
    private ref = React.createRef<HTMLDivElement>()

    public readonly state = {
        width: null
    }

    public componentDidMount() {
        this.updateWidth()
        window.addEventListener('resize', this.debounceUpdateWidth)
    }

    public componentWillUnmount() {
        window.removeEventListener('resize', this.debounceUpdateWidth)
    }

    private updateWidth = () => {
        if (this.ref.current && this.ref.current.parentElement) {
            this.setState({ width: this.ref.current.parentElement.clientWidth })
        }
    }

    private debounceUpdateWidth = debounce(this.updateWidth, 500)

    public render() {
        const width = this.state.width
        return (
            <div style={{ position: 'relative' }} ref={this.ref}>
                {width
                    ? this.props.render({
                          width,
                          height: Math.round(width / 2.3)
                      })
                    : null}
            </div>
        )
    }
}

export default GraphWrapper
