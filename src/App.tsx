import * as React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { IRootState } from 'data/types'

import { fetchAppData } from 'data/globals'

import NavContainer from 'containers/NavContainer'

import Routes from 'Routes'
import ErrorApp from 'components/ErrorApp'
import Loading from 'components/Loading'
import Head from 'components/Head'
import Offline from 'components/Offline'

interface IOwnProps {
}

interface IStateProps {
    isAuth: boolean
    isLoading: boolean
    isServerError: boolean
    isOffline: boolean
}

interface IDispatchProps {
    fetchAppData: () => void
}

interface IProps extends IOwnProps, IStateProps, IDispatchProps {}

interface IState {
    isErrorApp: boolean
}

class App extends React.Component<IProps, IState> {

    state = {
        isErrorApp: false
    }

    constructor(props: IProps) {
        super(props)

        if (props.isAuth) {
            props.fetchAppData()
        }
    }

    componentWillReceiveProps(nextProps: IProps) {
        if (nextProps.isServerError && nextProps.isServerError !== this.props.isServerError) {
            this.setState({ isErrorApp: true })
        }
    }

    componentDidCatch(error: Error/*, info*/) {
        this.setState({ isErrorApp: true })
    }

    render() {
        if (this.props.isOffline) {
            return (<Offline />)
        }

        return (
            <>
                <Head />
                <NavContainer />
                {this.props.isLoading ?
                    <Loading /> :
                    this.state.isErrorApp ?
                        <ErrorApp /> :
                        <>
                            <Routes isAuth={this.props.isAuth} />
                        </>
                }
            </>
        )
    }
}

const mapStateToProps = (state: IRootState, props: IOwnProps): IStateProps => ({
    isAuth: state.user.isAuth,
    isLoading: state.ui.isLoading,
    isServerError: state.ui.isServerError,
    isOffline: state.ui.isOffline
})

const mapDispatchToProps: IDispatchProps = {
    fetchAppData
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(App)
