import PropTypes from 'prop-types'
import PropTypesAir from 'airbnb-prop-types'

export const WorkoutsGraphType = PropTypes.shape(PropTypesAir.forbidExtraProps({
    dataset: PropTypes.arrayOf(PropTypes.number).isRequired,
    datasetMax: PropTypes.number.isRequired,
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
}))

export const LiftsGraphType = PropTypes.shape(PropTypesAir.forbidExtraProps({
    dataset: PropTypes.arrayOf(PropTypes.number).isRequired,
    datasetMax: PropTypes.number.isRequired,
    datasetMin: PropTypes.number.isRequired,
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    meta: PropTypes.shape({
        reps: PropTypes.arrayOf(PropTypes.number),
        weight: PropTypes.arrayOf(PropTypes.number),
        weightMeasure: PropTypes.string
    }).isRequired,
}))
