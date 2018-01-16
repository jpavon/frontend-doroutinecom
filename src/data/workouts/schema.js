import validateData from 'utils/validateData'

const Workout = validateData({
    id: 'number',
    userId: 'number',
    routineId: 'number',
    blockId: 'number',
    name: 'string|null',
    isCompleted: 'boolean',
    notes: 'string|null',
    createdAt: 'string',
    updatedAt: 'string'
})

export default Workout
