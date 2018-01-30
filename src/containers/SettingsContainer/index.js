import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { updateUser, unauthUser } from 'data/user/actions'
import { userSelector } from 'data/user/selectors'

import Settings from 'components/Settings'
import TopNav from 'components/TopNav'

class SettingsContainer extends Component {

    static propTypes = {
        user: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.object
        ]).isRequired,
        unauthUser: PropTypes.func.isRequired,
        updateUser: PropTypes.func.isRequired,
    }

    handleUnauthUser = (event) => {
        event.preventDefault()

        this.props.unauthUser()
    }

    render() {
        return (
            this.props.user &&
                <Fragment>
                    <TopNav
                        title="General"
                        left={{
                            to: '/'
                        }}
                    />
                    <Settings
                        user={this.props.user}
                        updateUser={this.props.updateUser}
                    />
                    <TopNav
                        rightLabel="Logout"
                        right={{
                            onClick: this.handleUnauthUser,
                            danger: true
                        }}
                    />
                </Fragment>
        )
    }
}

const mapStateToProps = (state, props) => ({
    user: userSelector(state)
})

const mapDispatchToProps = {
    updateUser,
    unauthUser
}


export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer)
