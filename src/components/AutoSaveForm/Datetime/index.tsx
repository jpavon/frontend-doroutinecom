import * as React from 'react'
import { Moment } from 'moment'

import { AutoSaveFormConsumer } from 'components/AutoSaveForm'

import { serverDateFormat } from 'utils/date'

import UncontrolledDatetime, { DatetimeProps } from 'components/Form/Datetime'
import Alert from 'components/Form/Alert'
import Saving from 'components/Saving'

interface AutoSaveDatetimeProps extends DatetimeProps {}

const Datetime: React.SFC<AutoSaveDatetimeProps> = (props) => (
    <AutoSaveFormConsumer>
        {({ values, errors, onChange, updating }) => {
            return (
                <div
                    className={`datetime-${props.name}`}
                    style={{ position: 'relative' }}
                >
                    {updating === props.name && <Saving />}
                    <UncontrolledDatetime
                        name={props.name}
                        value={(values[props.name] as string) || ''}
                        onChange={(moment: Moment) => {
                            onChange({
                                name: props.name,
                                value: moment.format(serverDateFormat),
                                debounced: true
                            })
                        }}
                        {...props}
                    />
                    <Alert message={errors[props.name]} />
                </div>
            )
        }}
    </AutoSaveFormConsumer>
)

export default Datetime
