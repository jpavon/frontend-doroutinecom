import * as React from 'react'
import { connect } from 'react-redux'

import { loginUser } from 'data/user/actions'
import { showAlert } from 'data/ui/actions'

import Login from 'components/Auth/Login'

// interface Response {
//     error: { errors: string[] }
//     payload: { token: string }
// }

interface IOwnProps {
}

interface IStateProps {
}

interface IDispatchProps {
    loginUser: (data: {email: string, password: string}) => void
    showAlert: (type: string, message: string[]) => void
}

interface IProps extends IOwnProps, IStateProps, IDispatchProps {}

class LoginContainer extends React.Component<IProps> {

    email: HTMLInputElement
    password: HTMLInputElement

    handleSubmit = (event: React.FormEvent<HTMLInputElement>): void => {
        event.preventDefault()

        this.props.loginUser({
            email: this.email.value,
            password: this.password.value
        })

        // }).then((resp) => {
        //            if (resp.error) {
        //                this.password.value = ''
        //                this.props.showAlert('error', resp.error.errors)
        //            } else {
        //                this.props.auth(resp.payload.token)
        //            }
        //        })
    }

    setRef = (ref: HTMLInputElement, name: 'email' | 'password'): void => {
        this[name] = ref
    }

    render() {
        return (
            <>
                <Login
                    handleSubmit={this.handleSubmit}
                    setRef={this.setRef}
                />
            </>
        )
    }
}

// const mapStateToProps = () => ({
// })

const mapDispatchToProps: IDispatchProps = {
    loginUser,
    showAlert
}

export default connect(null, mapDispatchToProps)(LoginContainer)
