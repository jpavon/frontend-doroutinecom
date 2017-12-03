import validateData from 'utils/validateData'

const Set = validateData({
    id: 'number',
    userId: 'number',
    exerciseId: 'number',
    reps: 'number|null',
    rmPercentage: 'number|null',
    weight: 'number',
    isRmPercentageRequired: 'boolean',
    createdAt: 'string',
    updatedAt: 'string'
})

export default Set
