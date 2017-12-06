import faker from 'faker'
import puppeteer from 'puppeteer'

const APP_URL = 'http://localhost:3000'

const user = {
    name: 'TEST_USER_' + faker.name.firstName(),
    email: 'TEST_USER_EMAIL_' + faker.internet.email(),
    password: faker.internet.password(),
}

let page
let browser
const width = 1200
const height = 800

beforeAll(async() => {
    browser = await puppeteer.launch({
        headless: false,
        slowMo: 10,
        args: [`--window-size=${width},${height}`]
    })
    page = await browser.newPage()
    await page.goto(APP_URL)
    await page.setViewport({ width, height })
})

afterAll(() => {
    browser.close()
})

describe('auth', () => {
    test('user can register', async() => {
        await page.goto(APP_URL + '/register')
        await page.waitForSelector('form')
        await page.click('input[id=name]')
        await page.type('input[id=name]', user.name)
        await page.click('input[id=email]')
        await page.type('input[id=email]', user.email)
        await page.click('input[id=password]')
        await page.type('input[id=password]', user.password)
        await page.click('input[id=passwordConfirmation]')
        await page.type('input[id=passwordConfirmation]', user.password)
        await page.click('input[type=submit]')
        await page.waitForSelector('.routines')
    }, 16000)

    test('user can logout', async() => {
        await page.goto(APP_URL + '/settings')
        await page.waitForSelector('.logout')
        await page.click('.logout')
        await page.waitForSelector('form')
    }, 16000)

    test('user can login', async() => {
        await page.click('input[id=email]')
        await page.type('input[id=email]', user.email)
        await page.click('input[id=password]')
        await page.type('input[id=password]', user.password)
        await page.click('input[type=submit]')
        await page.waitForSelector('.routines')
    }, 16000)
})
