import * as React from 'react'
import { connect } from 'react-redux'

import { RootState } from 'data/types'
import { putUserRequest } from 'data/user/actions'
import { userSelector } from 'data/user/selectors'
import Field from 'components/Field'
import AutoSaveForm from 'components/AutoSaveForm'
import Input from 'components/AutoSaveForm/Input'

interface OwnProps {}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class UserForm extends React.Component<Props> {
    public render() {
        return (
            this.props.user && (
                <AutoSaveForm
                    initialValues={this.props.user}
                    update={this.props.putUserRequest}
                    render={() => (
                        <>
                            <Field label="Name" id="name">
                                <Input id="name" name="name" />
                            </Field>
                            <Field label="Email" id="email">
                                <Input id="email" name="email" />
                            </Field>
                        </>
                    )}
                />
            )
        )
    }
}

const mapStateToProps = (state: RootState, props: OwnProps) => ({
    user: userSelector(state)
})

const mapDispatchToProps = {
    putUserRequest
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserForm)
