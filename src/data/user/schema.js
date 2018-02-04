import validateData from 'utils/validateData'

const User = validateData({
    id: 'number',
    name: 'string',
    email: 'string',
    apiToken: 'string',
    weightMeasure: 'string',
    startOfWeek: 'string',
    createdAt: 'string',
    updatedAt: 'string'
})

export default User
