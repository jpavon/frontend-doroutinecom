import * as React from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

import { RootState } from 'data/types'
import history from 'utils/history'
import { putRoutine } from 'data/routines/actions'
import { routineSelector } from 'data/routines/selectors'
import { Status } from 'data/types'
import AutoSaveForm from 'components/AutoSaveForm'
import Input from 'components/AutoSaveForm/Input'
import Textarea from 'components/AutoSaveForm/Textarea'
import Field from 'components/Field'

interface OwnProps {
    routineId: number
}

type Props = OwnProps &
    ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps

class Form extends React.Component<Props> {
    public componentDidMount() {
        if (this.props.isStatusLoaded && !this.props.routine) {
            history.replace('/routines')
        }
    }

    public render() {
        return this.props.routine ? (
            <>
                {this.props.routine.name && (
                    <Helmet>
                        <title>{this.props.routine.name}</title>
                    </Helmet>
                )}
                <AutoSaveForm
                    initialValues={this.props.routine}
                    update={this.props.putRoutine}
                    render={({ values }) => (
                        <Field label="Name" id={`name${values.id}`}>
                            <Input
                                id={`name${values.id}`}
                                name="name"
                                placeholder="Type your routine name"
                                data-e2e="routine-input-name"
                            />
                        </Field>
                    )}
                />
                {this.props.children}
                <AutoSaveForm
                    initialValues={this.props.routine}
                    update={this.props.putRoutine}
                    render={({ values }) => (
                        <Field
                            label="Additional Notes"
                            id={`notes${values.id}`}
                        >
                            <Textarea
                                id={`notes${values.id}`}
                                name="notes"
                                placeholder="Type any extra exercises or annotations"
                                data-e2e="routine-input-notes"
                            />
                        </Field>
                    )}
                />
            </>
        ) : null
    }
}

const mapStateToProps = (state: RootState, props: OwnProps) => ({
    routine: routineSelector(state, props.routineId),
    isStatusLoaded: state.routines.status === Status.STATUS_LOADED
})

const mapDispatchToProps = {
    putRoutine
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form)
