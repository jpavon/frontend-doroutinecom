import validateData from 'utils/validateData'

const Exercise = validateData({
    id: 'number',
    userId: 'number',
    liftId: 'number|null',
    workoutId: 'number|null',
    routineId: 'number|null',
    order: 'number|null',
    createdAt: 'string',
    updatedAt: 'string'
})

export default Exercise
