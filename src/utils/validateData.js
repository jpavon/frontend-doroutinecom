const validateData = (schema) => (data) => {
    if (process.env.NODE_ENV !== 'production') {
        const struct = require('superstruct').struct
        const Struct = struct(schema).validate(data)

        const [error] = Struct
        if (error) {
            console.error(error.message, error.data)
        }
    }

    return data
}

export default validateData
