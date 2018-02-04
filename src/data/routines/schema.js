import validateData from 'utils/validateData'

const Routine = validateData({
    id: 'number',
    userId: 'number',
    program: 'object|null',
    name: 'string|null',
    notes: 'string|null',
    createdAt: 'string',
    updatedAt: 'string'
})

export default Routine
