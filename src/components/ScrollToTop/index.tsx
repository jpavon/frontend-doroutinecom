import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'

class ScrollToTop extends Component<RouteComponentProps<{}>> {
    public componentDidUpdate(prevProps: RouteComponentProps<{}>) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0)
        }
    }

    public render() {
        return this.props.children
    }
}

export default withRouter(ScrollToTop)
