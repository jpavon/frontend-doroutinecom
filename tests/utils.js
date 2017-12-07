import { APP_URL } from './index.test'

export const goTo = async (page, url) => {
    return Promise.all([
        await page.goto(APP_URL + url, { waitUntil: 'networkidle0' })
    ])
}

export const expectSelectorToHaveText = async (page, selector, text) => {
    await page.waitFor(1000)
    return Promise.all([
        await page.waitForSelector(selector),
        await page.$eval(selector, el => el.innerHTML)
    ]).then(([_, selectorText]) => {
        expect(selectorText).toContain(text)
    })
}
