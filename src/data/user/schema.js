import validateData from 'utils/validateData'

const User = validateData({
    id: 'number',
    name: 'string',
    email: 'string',
    apiToken: 'string',
    weightMeasure: 'string',
    precision: 'number',
    trainingMax: 'number',
    createdAt: 'string',
    updatedAt: 'string'
})

export default User
