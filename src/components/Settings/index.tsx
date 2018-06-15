import * as React from 'react'

import { IUser } from 'data/user/types'
import { putUser } from 'data/user/actions'

import Field from 'components/Field'
import AutoSaveForm from 'components/AutoSaveForm'
import Select from 'components/AutoSaveForm/Select'
import Input from 'components/AutoSaveForm/Input'
import TopNav from 'components/TopNav'

import './style.scss'

interface IProps {
    user: IUser
    putUser: typeof putUser
}

const Settings: React.SFC<IProps> = ({ user, putUser }) => (
    <div className="settings">
        <AutoSaveForm
            initialValues={user}
            update={putUser}
            render={() => (
                <div className="settings-form">
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
                                { id: 'monday', name: 'Monday' },
                                { id: 'sunday', name: 'Sunday' }
                            ]}
                        />
                    </Field>
                    <Field label="Date format" id="dateFormat">
                        <Select
                            id="dateFormat"
                            name="dateFormat"
                            options={[
                                { id: 'DD/MM/YYYY', name: 'DD/MM/YYYY' },
                                { id: 'YYYY/MM/DD', name: 'YYYY/MM/DD' },
                                { id: 'MM/DD/YYYY', name: 'MM/DD/YYYY' }
                            ]}
                        />
                    </Field>
                </div>
            )}
        />
        <TopNav title="User" />
        <AutoSaveForm
            initialValues={user}
            update={putUser}
            render={() => (
                <div className="settings-form">
                    <Field label="Name" id="name">
                        <Input id="name" name="name" />
                    </Field>
                    <Field label="Email" id="email">
                        <Input id="email" name="email" />
                    </Field>
                </div>
            )}
        />
    </div>
)

export default Settings
