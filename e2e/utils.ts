import * as puppeteer from 'puppeteer'

import env from '../src/env'

export const goTo = async (page: puppeteer.Page, url: string) => {
    await page.goto(env.APP_URL + url, { waitUntil: 'load' })
}

export const expectSelectorToContainText = async (
    page: puppeteer.Page,
    selector: string,
    text: string
) => {
    await page.waitForSelector(selector)
    const selectorText = await page.evaluate((selector) => {
        const el = document.querySelector(selector)
        return el.innerHTML
    }, selector)
    expect(selectorText).toContain(text)
}

export const expectSelectOptionToBe = async (
    page: puppeteer.Page,
    selector: string,
    text: string
) => {
    await page.waitForSelector(selector)
    const selectorText = await page.evaluate((selector) => {
        const el = document.querySelector(selector)
        return el.options[el.selectedIndex].text
    }, selector)
    expect(selectorText).toBe(text)
}

export const expectCheckboxToBe = async (
    page: puppeteer.Page,
    selector: string,
    value: string | number
) => {
    await page.waitForSelector(selector)
    const selectorValue = await page.evaluate((selector) => {
        const el = document.querySelector(selector)
        return el.checked
    }, selector)
    expect(selectorValue).toBe(value)
}

export const selectOption = async (
    page: puppeteer.Page,
    selector: string,
    text: string
) => {
    await page.waitForSelector(selector)
    await page.evaluate(
        (selector, text) => {
            const select = document.querySelector(selector)

            for (let i = 0; i < select.options.length; i++) {
                if (select.options[i].text === text) {
                    select.selectedIndex = i
                    break
                }
            }

            const event = new Event('change', { bubbles: true })
            ;(event as any).simulated = true
            select.dispatchEvent(event)
        },
        selector,
        text
    )
}

export const expectElementToBeOfLength = async (
    page: puppeteer.Page,
    selector: string,
    length: number
) => {
    if (length !== 0) {
        await page.waitForSelector(selector)
    }
    const selectorLength = await page.evaluate((selector) => {
        return document.querySelectorAll(selector).length
    }, selector)

    expect(selectorLength).toBe(length)
}

// export const typeUpdate = async (page: puppeteer.Page, selector, updatedText) => {
//     await page.evaluate((selector, updatedText) => {
//         const input = document.querySelector(selector)

//         input.value = input.value + updatedText

//         const event = new Event('change', { bubbles: true })
//         event.simulated = true
//         input.dispatchEvent(event)
//     }, selector, updatedText)
// }
