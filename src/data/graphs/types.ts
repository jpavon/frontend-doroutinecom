export interface ILiftsGraph {
    dataset: number[]
    datasetMax: number
    datasetMin: number
    labels: string[]
    meta: {
        reps: number[]
        weight: number[]
        weightMeasure: string
    }
}

export interface IWorkoutGraphData {
    dataset: number[]
    datasetMax: number
    labels: string[]
}
