import validateData from 'utils/validateData'

const Routine = validateData({
    id: 'number',
    userId: 'number',
    name: 'string',
    slug: 'string',
    weightMeasure: 'string',
    weightRoundTo: 'number',
    createdAt: 'string',
    updatedAt: 'string'
})

export default Routine
