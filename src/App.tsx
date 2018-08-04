import * as React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { RootState } from 'data/types'
import { getAppData } from 'data/actions'
import NavContainer from 'views/Nav'
import Routes from 'Routes'
import ErrorApp from 'components/ErrorApp'
import Loading from 'components/Loading'
import Head from 'components/Head'

interface OwnProps {}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

interface State {
    isError: boolean
}

class App extends React.Component<Props, State> {
    public readonly state = {
        isError: false
    }

    constructor(props: Props) {
        super(props)

        if (props.isAuth) {
            props.getAppData()
        }
    }

    public componentDidCatch() {
        this.setState({ isError: true })
    }

    public render() {
        return (
            <>
                <Head />
                <NavContainer />
                {this.state.isError ? (
                    <ErrorApp />
                ) : this.props.isLoading ? (
                    <Loading />
                ) : (
                    <Routes isAuth={this.props.isAuth} />
                )}
            </>
        )
    }
}

const mapStateToProps = (state: RootState, props: OwnProps) => ({
    isAuth: state.user.isAuth,
    isLoading: state.ui.isLoading
})

const mapDispatchToProps = {
    getAppData
}

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(App)
