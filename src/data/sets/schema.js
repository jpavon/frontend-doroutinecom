import validateData from 'utils/validateData'

const Set = validateData({
    id: 'number',
    userId: 'number',
    exerciseId: 'number',
    reps: 'number|null',
    weight: 'number|null',
    isCompleted: 'boolean',
    createdAt: 'string',
    updatedAt: 'string'
})

export default Set
