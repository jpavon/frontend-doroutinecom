import validateData from 'utils/validateData'

const Routine = validateData({
    id: 'number',
    userId: 'number',
    name: 'string|null',
    slug: 'string',
    weightMeasure: 'string',
    weightRoundTo: 'number',
    createdAt: 'string',
    updatedAt: 'string'
})

export default Routine
