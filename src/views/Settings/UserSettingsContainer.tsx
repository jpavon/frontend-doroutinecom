import * as React from 'react'
import { connect } from 'react-redux'
import * as store from 'store'

import { RootState } from 'data/types'

import { putUser, unauthUser } from 'data/user/actions'
import { userSelector } from 'data/user/selectors'
import NavBar from 'components/NavBar'
import Button from 'components/Button'
import Field from 'components/Field'
import AutoSaveForm from 'components/AutoSaveForm'
import Select from 'components/AutoSaveForm/Select'
import Input from 'components/AutoSaveForm/Input'
import { Settings } from './style'

interface OwnProps {}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class UserSettingsContainer extends React.Component<Props> {
    private handleUnauthUser = (event: React.FormEvent) => {
        event.preventDefault()

        this.props.unauthUser()
    }

    public componentWillReceiveProps(nextProps: Props) {
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
            <>
                {this.props.user && (
                    <Settings data-e2e="settings">
                        <AutoSaveForm
                            initialValues={this.props.user}
                            update={this.props.putUser}
                            render={() => (
                                <>
                                    <Field
                                        label="Weight measure"
                                        id="weightMeasure"
                                    >
                                        <Select
                                            id="weightMeasure"
                                            name="weightMeasure"
                                            options={[
                                                { id: 'kg', name: 'kg' },
                                                { id: 'lbs', name: 'lbs' }
                                            ]}
                                        />
                                    </Field>
                                    <Field
                                        label="Start of week"
                                        id="startOfWeek"
                                    >
                                        <Select
                                            id="startOfWeek"
                                            name="startOfWeek"
                                            options={[
                                                {
                                                    id: 'monday',
                                                    name: 'Monday'
                                                },
                                                { id: 'sunday', name: 'Sunday' }
                                            ]}
                                        />
                                    </Field>
                                    <Field label="Date format" id="dateFormat">
                                        <Select
                                            id="dateFormat"
                                            name="dateFormat"
                                            options={[
                                                {
                                                    id: 'DD/MM/YYYY',
                                                    name: 'DD/MM/YYYY'
                                                },
                                                {
                                                    id: 'YYYY/MM/DD',
                                                    name: 'YYYY/MM/DD'
                                                },
                                                {
                                                    id: 'MM/DD/YYYY',
                                                    name: 'MM/DD/YYYY'
                                                }
                                            ]}
                                        />
                                    </Field>
                                </>
                            )}
                        />
                        <NavBar title="User" />
                        <AutoSaveForm
                            initialValues={this.props.user}
                            update={this.props.putUser}
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
                    </Settings>
                )}
                <NavBar
                    rightButton={
                        <Button
                            onClick={this.handleUnauthUser}
                            danger={true}
                            data-e2e="logout-button"
                        >
                            Logout
                        </Button>
                    }
                />
            </>
        )
    }
}

const mapStateToProps = (state: RootState, props: OwnProps) => ({
    user: userSelector(state)
})

const mapDispatchToProps = {
    putUser,
    unauthUser
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserSettingsContainer)
