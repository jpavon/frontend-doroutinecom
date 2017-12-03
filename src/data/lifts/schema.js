import validateData from 'utils/validateData'

const Lift = validateData({
    id: 'number',
    userId: 'number',
    routineId: 'number',
    name: 'string',
    rm: 'number|null',
    createdAt: 'string',
    updatedAt: 'string'
})

export default Lift
