import { struct } from 'superstruct'

const validateData = (schema) => (data) => {
    const Struct = struct(schema).validate(data)

    const [error] = Struct
    if (error) {
        console.error(error.message, error.data)
    }

    return data
}

export default validateData
