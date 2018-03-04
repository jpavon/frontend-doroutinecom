import * as React from 'react'
import { connect } from 'react-redux'
import * as store from 'store'

import { IFormatedUser, IUserData } from 'data/user/types'
import { IRootState, IApiAction } from 'data/types'

import { putUser, unauthUser } from 'data/user/actions'
import { userSelector } from 'data/user/selectors'

import Settings from 'components/Settings'
import TopNav from 'components/TopNav'

interface IOwnProps {
}

interface IStateProps {
    user: IFormatedUser | null,
}

interface IDispatchProps {
    unauthUser: (error?: string) => void
    putUser: (id: number, data: IUserData, resolve: () => void, reject: () => void) => IApiAction
}

interface IProps extends IOwnProps, IStateProps, IDispatchProps {}

class SettingsContainer extends React.Component<IProps> {

    handleUnauthUser = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault()

        this.props.unauthUser()
    }

    componentWillReceiveProps(nextProps: IProps) {
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
                        putUser={this.props.putUser}
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

const mapStateToProps = (state: IRootState, props: IOwnProps): IStateProps => ({
    user: userSelector(state)
})

const mapDispatchToProps: IDispatchProps = {
    putUser,
    unauthUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer)
