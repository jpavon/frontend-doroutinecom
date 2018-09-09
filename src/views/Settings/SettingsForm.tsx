import * as React from 'react'
import { connect } from 'react-redux'

import { RootState } from 'data/types'
import { putUserRequest } from 'data/user/actions'
import { userSelector } from 'data/user/selectors'
import Field from 'components/Field'
import AutoSaveForm from 'components/AutoSaveForm'
import Select from 'components/AutoSaveForm/Select'

interface OwnProps {}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class SettingsForm extends React.Component<Props> {
    public render() {
        return (
            this.props.user && (
                <AutoSaveForm
                    initialValues={this.props.user}
                    update={this.props.putUserRequest}
                    render={() => (
                        <>
                            <Field label="Weight measure" id="weightMeasure">
                                <Select
                                    id="weightMeasure"
                                    name="weightMeasure"
                                    options={[
                                        { id: 'kg', name: 'kg' },
                                        { id: 'lbs', name: 'lbs' }
                                    ]}
                                />
                            </Field>
                            <Field label="Start of week" id="startOfWeek">
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
)(SettingsForm)
