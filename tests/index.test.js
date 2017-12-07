import puppeteer from 'puppeteer'

import { expectSelectorToHaveText } from './utils'

const APP_URL = 'http://localhost:3000'

let page
let browser
const width = 1200
const height = 800

beforeAll(async () => {
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

describe('app loads', () => {
    test('load success', async () => {
        await page.goto(APP_URL)
        await expectSelectorToHaveText(page, 'h1', 'Login')
    }, 16000)
})


export { APP_URL, page, browser }
