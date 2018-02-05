const faker = require('faker')

var envConfig = {
    production: {
        APP_URL: 'https://app.doroutine.com',
        HOME_URL: 'https://doroutine.com'
    },
    development: {
        APP_URL: 'http://localhost:3000',
        HOME_URL: 'http://localhost:8001'
    }
}

var env = envConfig[process.env.ENV]

module.exports = {
    globalSetup: './tests/config/setup.js',
    globalTeardown: './tests/config/teardown.js',
    testEnvironment: './tests/config/puppeteer_environment.js',
    globals: {
        APP_URL: env.APP_URL,
        TIMEOUT: 10000,
        USER: {
            name: '_T_' + faker.name.firstName(),
            email: '_T_' + faker.internet.email(),
            password: '123123',
            weightMeasure: 'lbs',
            startOfWeek: 'Sunday'
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
    }
}
