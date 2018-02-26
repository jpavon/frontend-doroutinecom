import * as React from 'react'
import { connect } from 'react-redux'
import store from 'store'

import { updateUser, unauthUser } from 'data/user/actions'
import { userSelector } from 'data/user/selectors'
import { FormatedUser } from 'data/user/types'
import { RootState } from 'data/types'

import Settings from 'components/Settings'
import TopNav from 'components/TopNav'

interface OwnProps {
}

interface StateProps {
    user: FormatedUser | null,
}

interface DispatchProps {
    unauthUser: (error?: string) => void
    updateUser: (id: number, user: {}) => void
}

interface Props extends OwnProps, StateProps, DispatchProps {}

class SettingsContainer extends React.Component<Props> {

    handleUnauthUser = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault()

        this.props.unauthUser()
    }

    componentWillReceiveProps(nextProps: Props) {
        if (!nextProps.user || !this.props.user) {
            return
        }

        if (nextProps.user.startOfWeek && nextProps.user.startOfWeek !== this.props.user.startOfWeek) {
            store.set('startOfWeek', nextProps.user.startOfWeek)
            window.location.reload(true)
        }

        if (nextProps.user.dateFormat && nextProps.user.dateFormat !== this.props.user.dateFormat) {
            store.set('dateFormat', nextProps.user.dateFormat)
            window.location.reload(true)
        }
    }

    render() {
        return this.props.user &&
            (
                <>
                    <TopNav
                        title="General"
                        left={{
                            to: '/'
                        }}
                    />
                    <Settings
                        user={this.props.user}
                        updateUser={this.props.updateUser}
                    />
                    <TopNav
                        rightLabel="Logout"
                        right={{
                            onClick: this.handleUnauthUser,
                            danger: true,
                            className: 'logout'
                        }}
                    />
                </>
            )
    }
}

const mapStateToProps = (state: RootState, props: Props): StateProps => ({
    user: userSelector(state)
})

const mapDispatchToProps: DispatchProps = {
    updateUser,
    unauthUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer)
