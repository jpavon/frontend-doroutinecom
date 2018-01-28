import validateData from 'utils/validateData'

const Routine = validateData({
    id: 'number',
    userId: 'number',
    program: 'object|null',
    name: 'string|null',
    weightMeasure: 'string',
    precision: 'number',
    trainingMax: 'number',
    createdAt: 'string',
    updatedAt: 'string'
})

export default Routine
