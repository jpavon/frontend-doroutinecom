import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { updateUser, unauthUser } from 'data/user/actions'
import { userSelector } from 'data/user/selectors'

import Settings from 'components/Settings'

class SettingsContainer extends Component {

    static propTypes = {
        user: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.object
        ]).isRequired,
        unauthUser: PropTypes.func.isRequired,
        updateUser: PropTypes.func.isRequired,
    }

    handleLogoutUser = (event) => {
        event.preventDefault()

        this.props.unauthUser()
    }

    render() {
        return (
            this.props.user &&
                <div>
                    <Settings
                        user={this.props.user}
                        updateUser={this.props.updateUser}
                        unauthUser={this.handleLogoutUser}
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
    unauthUser
}


export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer)
