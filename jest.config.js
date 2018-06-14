const faker = require('faker')

module.exports = {
    globals: {
        TIMEOUT: 10000,
        USER: {
            name: '_T_' + faker.name.firstName(),
            email: '_T_' + faker.internet.email(),
            password: '123123',
            weightMeasure: 'lbs',
            startOfWeek: 'Sunday',
            dateFormat: 'MM/DD/YYYY'
        },
        ROUTINE: {
            name: faker.lorem.words(),
            notes: faker.lorem.words()
        },
        LIFT: {
            name: faker.lorem.words(),
        },
        SET: {
            weight: String(faker.random.number()),
            reps: String(faker.random.number())
        }
    },
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ],
}
