import validateData from 'utils/validateData'

const Routine = validateData({
    id: 'number',
    userId: 'number',
    program: 'object|null',
    name: 'string|null',
    slug: 'string',
    weightMeasure: 'string',
    precision: 'number',
    trainingMax: 'number',
    createdAt: 'string',
    updatedAt: 'string'
})

export default Routine
