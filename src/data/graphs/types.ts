export interface IGraph {
    dataset: number[]
    datasetMax: number
    datasetMin: number | null
    labels: string[]
    meta: {
        reps: number[]
        weight: number[]
        weightMeasure: string | null
    } | null
}
