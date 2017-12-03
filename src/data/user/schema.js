import validateData from 'utils/validateData'

const User = validateData({
    id: 'number',
    name: 'string',
    email: 'string',
    apiToken: 'string',
    createdAt: 'string',
    updatedAt: 'string'
})

export default User
