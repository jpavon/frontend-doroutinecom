import * as React from 'react'
import { connect } from 'react-redux'

import { IPasswordForgottenData, IUserActionArgs } from 'data/user/types'

import { passwordForgottenUser } from 'data/user/actions'

import PasswordForgotten from 'components/Auth/PasswordForgotten'
import TopNav from 'components/TopNav'

interface IOwnProps {
}

interface IStateProps {
}

interface IDispatchProps {
    passwordForgottenUser: IUserActionArgs['passwordForgotten']
}

interface IProps extends IOwnProps, IStateProps, IDispatchProps {}

class PasswordForgottenContainer extends React.Component<IProps> {

    email: HTMLInputElement

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        this.props.passwordForgottenUser({
            email: this.email.value
        })
    }

    setRef = (ref: HTMLInputElement, name: keyof IPasswordForgottenData) => {
        this[name] = ref
    }

    render() {
        return (
            <>
                <TopNav
                    title="Password Forgotten"
                />
                <PasswordForgotten
                    handleSubmit={this.handleSubmit}
                    setRef={this.setRef}
                />
            </>
        )
    }
}

// const mapStateToProps = (state, props) => ({
// })

const mapDispatchToProps: IDispatchProps = {
    passwordForgottenUser,
}

export default connect(null, mapDispatchToProps)(PasswordForgottenContainer)
