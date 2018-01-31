import validateData from 'utils/validateData'

const Lift = validateData({
    id: 'number',
    userId: 'number',
    name: 'string|null',
    createdAt: 'string',
    updatedAt: 'string'
})

export default Lift
