const faker = require('faker')

module.exports = {
    globalSetup: './tests/config/setup.js',
    globalTeardown: './tests/config/teardown.js',
    testEnvironment: './tests/config/puppeteer_environment.js',
    globals: {
        APP_URL: 'http://localhost:3000',
        TIMEOUT: 10000,
        USER: {
            name: 'TEST_USER_' + faker.name.firstName(),
            email: 'TEST_USER_EMAIL_' + faker.internet.email(),
            password: '123123',
        },
        ROUTINE: {
            name: faker.lorem.words()
        },
        LIFT: {
            name: faker.lorem.words(),
            rm: String(faker.random.number())
        },
        WORKOUT: {
            name: faker.lorem.words()
        },
        SET: {
            rmPercentage: String(faker.random.number()),
            reps: String(faker.random.number())
        }
    }
}
