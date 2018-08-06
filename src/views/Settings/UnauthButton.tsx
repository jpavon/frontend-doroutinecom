import * as React from 'react'
import { connect } from 'react-redux'

import { RootState } from 'data/types'

import { unauthUser } from 'data/user/actions'
import Button from 'components/Button'

interface OwnProps {}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class UnauthButton extends React.Component<Props> {
    private handleUnauthUser = (event: React.FormEvent) => {
        event.preventDefault()

        this.props.unauthUser()
    }

    public render() {
        return (
            <Button
                onClick={this.handleUnauthUser}
                danger={true}
                data-e2e="logout-button"
            >
                Logout
            </Button>
        )
    }
}

const mapStateToProps = (state: RootState, props: OwnProps) => ({})

const mapDispatchToProps = {
    unauthUser
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UnauthButton)
