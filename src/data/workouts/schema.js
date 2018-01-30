import validateData from 'utils/validateData'

const Workout = validateData({
    id: 'number',
    userId: 'number',
    routineId: 'number',
    name: 'string|null',
    isCompleted: 'string|null',
    isPending: 'boolean',
    notes: 'string|null',
    createdAt: 'string',
    updatedAt: 'string'
})

export default Workout
