import puppeteer from 'puppeteer'
import faker from 'faker'

import { expectSelectorToHaveText, goTo } from './utils'

export const APP_URL = 'http://localhost:3000'

let page
let browser

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
        password: faker.internet.password(),
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
        await expectSelectorToHaveText(page, 'h1', 'Routines')
    }, 16000)

    test('user can logout', async () => {
        await goTo(page, '/settings')
        await page.waitForSelector('.logout')
        await page.click('.logout')
        await expectSelectorToHaveText(page, 'h1', 'Login')
    }, 16000)

    test('user can login', async () => {
        await goTo(page, '/login')
        await page.click('input[id=email]')
        await page.type('input[id=email]', user.email)
        await page.click('input[id=password]')
        await page.type('input[id=password]', user.password)
        await page.click('input[type=submit]')
        await expectSelectorToHaveText(page, 'h1', 'Routines')
    }, 16000)
})

describe('routines', async () => {
    const routine = {
        name: faker.lorem.words()
    }

    const lift = {
        name: faker.lorem.words(),
        rm: String(faker.random.number())
    }

    test('create a routine', async () => {
        await goTo(page, '/')
        await page.waitForSelector('button'),
        await page.click('button')
        await expectSelectorToHaveText(page, 'h2', 'Lifts')
    }, 16000)

    test('create a lift', async () => {
        await page.click('.lifts-button-create')
        await page.waitForSelector('.lift'),
        await page.click('.lift input[name=name]')
        await page.type('.lift input[name=name]', lift.name)
        await page.waitFor(1000)
        await page.click('.lift input[name=rm]')
        await page.type('.lift input[name=rm]', lift.rm)
        await page.waitFor(1000)
        await page.reload()
        await page.waitForSelector('.lift'),
        await expectSelectorToHaveText(page, '.lift-name', lift.name)
        await expectSelectorToHaveText(page, '.lift-rm', lift.rm)
    }, 16000)
})
