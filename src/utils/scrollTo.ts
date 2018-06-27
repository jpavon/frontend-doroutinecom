import moveTo from 'moveto'

const isElementInViewport = (el: Element) => {
    const rect = el.getBoundingClientRect()

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
    )
}

const scrollTo = (className: string, options?: {}) => {
    setTimeout(() => {
        const elements = document.getElementsByClassName(className)
        const el = elements[elements.length - 1]

        if (el && !isElementInViewport(el)) {
            const defaultOptions = {
                tolerance: 15,
                ...options
            }
            const move = new moveTo(defaultOptions)
            move.move(el)
        }
    }, 100) // wait for element to mount
}

export default scrollTo
