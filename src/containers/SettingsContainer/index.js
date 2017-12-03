import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { updateUser } from 'data/user/actions'
import { userSelector } from 'data/user/selectors'

class SettingsContainer extends Component {

    static propTypes = {
        user: PropTypes.object.isRequired,

        updateUser: PropTypes.func.isRequired,
    }

    render() {
        return (
            <div>
                user {this.props.user.name}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    user: userSelector(state)
})

const mapDispatchToProps = {
    updateUser
}


export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer)
