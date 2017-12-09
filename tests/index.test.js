import puppeteer from 'puppeteer'
import faker from 'faker'

import {
    expectSelectorToHaveText,
    expectSelectToHaveText,
    selectOption,
    goTo
} from './utils'

export const APP_URL = 'http://localhost:3000'

export let page
export let browser

beforeAll(async () => {
    const width = 1200
    const height = 800
    browser = await puppeteer.launch({
        headless: false,
        slowMo: 0,
        args: [`--window-size=${width},${height}`]
    })
    page = await browser.newPage()
    await page.goto(APP_URL)
    await page.setViewport({ width, height })
})

afterAll(() => {
    browser.close()
})

describe('auth', async () => {
    const user = {
        name: 'TEST_USER_' + faker.name.firstName(),
        email: 'TEST_USER_EMAIL_' + faker.internet.email(),
        password: '123123',
    }

    test('user can register', async () => {
        await goTo(page, '/register')
        await page.click('input[id=name]')
        await page.type('input[id=name]', user.name)
        await page.click('input[id=email]')
        await page.type('input[id=email]', user.email)
        await page.click('input[id=password]')
        await page.type('input[id=password]', user.password)
        await page.click('input[id=passwordConfirmation]')
        await page.type('input[id=passwordConfirmation]', user.password)
        await page.click('input[type=submit]')
        await expectSelectorToHaveText(page, '.routines', 'Routines')
    }, 16000)

    test('user can logout', async () => {
        await goTo(page, '/settings')
        await page.waitForSelector('.logout')
        await page.click('.logout')
        await expectSelectorToHaveText(page, '.login', 'Login')
    }, 16000)

    test('user can login', async () => {
        await goTo(page, '/login')
        await page.click('input[id=email]')
        await page.type('input[id=email]', user.email)
        await page.click('input[id=password]')
        await page.type('input[id=password]', user.password)
        await page.click('input[type=submit]')
        await expectSelectorToHaveText(page, '.routines', 'Routines')
    }, 16000)
})


describe('routines', async () => {
    const routine = {
        name: faker.lorem.words()
    }

    test('create a routine', async () => {
        await goTo(page, '/')
        await page.waitForSelector('button')
        await page.click('button')
        await page.waitForSelector('.routine-single')
        await page.click('.routine-single input')
        await page.type('.routine-single input', routine.name)
    }, 16000)

    const lift = {
        name: faker.lorem.words(),
        rm: String(faker.random.number())
    }

    test('create a lift', async () => {
        await page.click('.lifts-button-create')
        await page.waitForSelector('.lift')
        await page.click('.lift input[name=name]')
        await page.type('.lift input[name=name]', lift.name)
        await page.waitFor(1000)
        await page.click('.lift input[name=rm]')
        await page.type('.lift input[name=rm]', lift.rm)
    }, 16000)

    const workout = {
        name: faker.lorem.words()
    }

    test('create a workout', async () => {
        await page.click('.workouts-button-create')
        await page.waitForSelector('.workout')
        await page.click('.workout input')
        await page.type('.workout input', workout.name)
    }, 16000)

    test('create a exercise', async () => {
        await page.click('.exercises-button-create button')
        await page.waitForSelector('.exercise')
        await selectOption(page, '.exercise select', lift.name)
    }, 16000)

    const set = {
        rmPercentage: String(faker.random.number()),
        reps: String(faker.random.number())
    }

    test('create a set', async () => {
        await page.click('.sets-button-create button')
        await page.waitForSelector('.set')
        await page.click('.set-rmPercentage input')
        await page.type('.set-rmPercentage input', set.rmPercentage)
        await page.waitFor(1000)
        await page.click('.set-reps input')
        await page.type('.set-reps input', set.reps)
    }, 16000)

    test('routine is saved on reload', async () => {
        await page.waitFor(1000)
        await page.reload()

        await page.waitForSelector('.routine-single')
        await expectSelectorToHaveText(page, '.routine-single', routine.name)

        await expectSelectorToHaveText(page, '.lift-name', lift.name)
        await expectSelectorToHaveText(page, '.lift-rm', lift.rm)

        await expectSelectorToHaveText(page, '.workout', workout.name)

        await expectSelectorToHaveText(page, '.exercise select', lift.name)

        await expectSelectorToHaveText(page, '.set-rmPercentage', set.rmPercentage)
        await expectSelectorToHaveText(page, '.set-reps', set.reps)
    }, 16000)
})
