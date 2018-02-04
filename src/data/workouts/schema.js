import validateData from 'utils/validateData'

const Workout = validateData({
    id: 'number',
    userId: 'number',
    routineId: 'number|null',
    name: 'string|null',
    startedAt: 'string',
    completedAt: 'string|null',
    notes: 'string|null',
    createdAt: 'string',
    updatedAt: 'string',

    duration: 'string|null',
    day: 'string|null'
})

export default Workout
