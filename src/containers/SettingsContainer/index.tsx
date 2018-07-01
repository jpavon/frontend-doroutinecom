import * as React from 'react'
import { connect } from 'react-redux'
import * as store from 'store'

import { IUser } from 'data/user/types'
import { IRootState } from 'data/types'

import { putUser, unauthUser } from 'data/user/actions'
import { userSelector } from 'data/user/selectors'

import Settings from 'components/Settings'
import TopNav from 'components/TopNav'
import Button from 'components/Button'

interface IOwnProps {}

interface IStateProps {
    user: IUser | null
}

interface IDispatchProps {
    unauthUser: typeof unauthUser
    putUser: typeof putUser
}

interface IProps extends IOwnProps, IStateProps, IDispatchProps {}

class SettingsContainer extends React.Component<IProps> {
    private handleUnauthUser = (event: React.FormEvent<HTMLAnchorElement>) => {
        event.preventDefault()

        this.props.unauthUser()
    }

    public componentWillReceiveProps(nextProps: IProps) {
        if (!nextProps.user || !this.props.user) {
            return
        }

        if (
            nextProps.user.startOfWeek &&
            nextProps.user.startOfWeek !== this.props.user.startOfWeek
        ) {
            store.set('startOfWeek', nextProps.user.startOfWeek)
            window.location.reload(true)
        }

        if (
            nextProps.user.dateFormat &&
            nextProps.user.dateFormat !== this.props.user.dateFormat
        ) {
            store.set('dateFormat', nextProps.user.dateFormat)
            window.location.reload(true)
        }
    }

    public render() {
        return (
            this.props.user && (
                <>
                    <TopNav
                        title="Settings"
                        leftButton={
                            <Button to="/" backIcon={true}>
                                Back
                            </Button>
                        }
                    />
                    <TopNav title="General" />
                    <Settings
                        user={this.props.user}
                        putUser={this.props.putUser}
                    />
                    <TopNav
                        rightButton={
                            <Button
                                onClick={this.handleUnauthUser}
                                danger={true}
                                className="logout"
                            >
                                Logout
                            </Button>
                        }
                    />
                </>
            )
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SettingsContainer)
