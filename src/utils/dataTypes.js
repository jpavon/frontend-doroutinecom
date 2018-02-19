const dataTypes = (types, data) => {
    // console.log(types, data)
    if (process.env.NODE_ENV !== 'production') {
        const struct = require('superstruct').struct
        const Struct = struct(types).validate(data)

        const [error] = Struct
        if (error) {
            console.error(error.message, error.data)
        }
    }

    return data
}

export const nullOr = (data) => {
    if (process.env.NODE_ENV !== 'production') {
        const struct = require('superstruct').struct
        return struct.union([data, 'null'])
    }
    return null
}

export const undefinedOr = (data) => {
    if (process.env.NODE_ENV !== 'production') {
        const struct = require('superstruct').struct
        return struct.union([data, 'undefined'])
    }
    return null
}

export const emptyObjectOr = (data) => {
    if (process.env.NODE_ENV !== 'production') {
        const struct = require('superstruct').struct
        return struct.union([data, {}])
    }
    return null
}

export default dataTypes
