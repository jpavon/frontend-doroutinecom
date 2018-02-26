import * as React from 'react'
import { connect } from 'react-redux'

import { passwordForgotten } from 'data/user/actions'
import { showAlert } from 'data/ui/actions'

import PasswordForgotten from 'components/Auth/PasswordForgotten'
import TopNav from 'components/TopNav'

interface OwnProps {
}

interface StateProps {
}

interface DispatchProps {
    passwordForgotten: (data: {email: string}) => void
    showAlert: () => void
}

interface Props extends OwnProps, StateProps, DispatchProps {}

class PasswordForgottenContainer extends React.Component<Props> {

    email: HTMLInputElement

    handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault()

        this.props.passwordForgotten({
            email: this.email.value
        })
        // .then((resp) => {
        //     if (resp.error) {
        //         this.props.showAlert('error', resp.error.errors)
        //     } else {
        //         this.props.showAlert('success', 'A password reset email has been sent.')
        //     }
        // })
    }

    setRef = (ref: HTMLInputElement, name: 'email') => {
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

const mapDispatchToProps: DispatchProps = {
    passwordForgotten,
    showAlert
}

export default connect(null, mapDispatchToProps)(PasswordForgottenContainer)
