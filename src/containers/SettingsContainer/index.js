import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { updateUser } from 'data/user/actions'
import { userSelector } from 'data/user/selectors'

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

        updateUser: PropTypes.func.isRequired,
    }

    render() {
        return (
            <div>
                user {this.props.user.name} {this.props.user.email}
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
    updateUser
}


export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer)
