import * as React from 'react'
import { connect } from 'react-redux'

import { passwordForgottenUser } from 'data/user/actions'

import PasswordForgotten from 'components/Auth/PasswordForgotten'
import TopNav from 'components/TopNav'

interface IOwnProps {}

interface IStateProps {}

interface IDispatchProps {
    passwordForgottenUser: typeof passwordForgottenUser
}

interface IProps extends IOwnProps, IStateProps, IDispatchProps {}

class PasswordForgottenContainer extends React.Component<IProps> {
    private email = React.createRef<HTMLInputElement>()

    private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        this.props.passwordForgottenUser({
            email: this.email.current!.value
        })
    }

    public render() {
        return (
            <>
                <TopNav title="Password Forgotten" />
                <PasswordForgotten
                    handleSubmit={this.handleSubmit}
                    emailRef={this.email}
                />
            </>
        )
    }
}

// const mapStateToProps = (state, props) => ({
// })

const mapDispatchToProps: IDispatchProps = {
    passwordForgottenUser
}

export default connect(
    null,
    mapDispatchToProps
)(PasswordForgottenContainer)
