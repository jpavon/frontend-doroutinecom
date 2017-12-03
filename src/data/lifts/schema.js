import validateData from 'utils/validateData'

const Lift = validateData({
    id: 'number',
    userId: 'number',
    routineId: 'number',
    name: 'string|null',
    rm: 'number|null',
    createdAt: 'string',
    updatedAt: 'string'
})

export default Lift
