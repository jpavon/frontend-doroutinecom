import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { updateUser, logoutUser } from 'data/user/actions'
import { userSelector } from 'data/user/selectors'

import Settings from 'components/Settings'

class SettingsContainer extends Component {

    static propTypes = {
        user: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.object
        ]).isRequired,
        logoutUser: PropTypes.func.isRequired,
        updateUser: PropTypes.func.isRequired,
    }

    handleLogoutUser = (event) => {
        event.preventDefault()

        this.props.logoutUser()
    }

    render() {
        return (
            this.props.user &&
                <div>
                    <Settings
                        user={this.props.user}
                        updateUser={this.props.updateUser}
                        logoutUser={this.handleLogoutUser}
                    />
                </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    user: userSelector(state)
})

const mapDispatchToProps = {
    updateUser,
    logoutUser
}


export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer)
