import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { updateUser } from 'data/user/actions'
import { userSelector } from 'data/user/selectors'
import { logoutUser } from 'data/user/actions'

import Input from 'components/Form/Input'
import withForm from 'components/Form/withForm'

const Form = () => (
    <div>
        <Input
            name="name"
        />
        <br />
        <Input
            name="email"
        />
    </div>
)

const Formed = withForm(Form)

class SettingsContainer extends Component {

    static propTypes = {
        user: PropTypes.object.isRequired,

        logoutUser: PropTypes.func.isRequired,
        updateUser: PropTypes.func.isRequired,
    }

    handleLogoutUser = (event) => {
        event.preventDefault()

        this.props.logoutUser()
            .then(() => {
                this.props.history.push('/login')
            })
    }

    render() {
        return (
            <div>
                <h1>Settings</h1>
                <a className="logout" href="/logout" onClick={this.handleLogoutUser}>
                    Logout
                </a>
                <h1>Hello {this.props.user.name}!</h1>
                <Formed
                    data={this.props.user}
                    update={this.props.updateUser}
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SettingsContainer))
