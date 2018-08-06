const ROUND_TO = 2.5

const calculateRepMax = (reps: number, weight: number): number => {
    if (reps === 0) {
        return 0
    }

    const rm = Number(weight) * (36 / (37 - Number(reps)))

    const value = Math.ceil(rm / ROUND_TO) * ROUND_TO

    return value
}

export default calculateRepMax
