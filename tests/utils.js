import { APP_URL } from './index.test'

export const goTo = async (page, url) => {
    return await page.goto(APP_URL + url, { waitUntil: 'networkidle0' })
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

export const expectSelectToHaveText = async (page, selector, text) => {
    await page.waitFor(1000)
    return Promise.all([
        await page.waitForSelector(selector),
        await page.$eval(selector, el => el.options[el.selectedIndex].text)
    ]).then(([_, selectorText]) => {
        expect(selectorText).toContain(text)
    })
}

export const selectOption = async (page, selector, text) => {
    return await page.evaluate((text, selector) => {
        const select = document.querySelector(selector)
        for (let i = 0; i < select.options.length; i++) {
            if (select.options[i].text === text) {
                select.selectedIndex = i
                break
            }
        }
        select.dispatchEvent(new Event('change', { 'bubbles': true }))
    }, text, selector)
}
