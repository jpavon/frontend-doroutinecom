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

const scrollTo = (id: string, options?: {}) => {
    const el = document.getElementById(id)

    if (el && !isElementInViewport(el)) {
        const defaultOptions = {
            tolerance: 15,
            ...options
        }
        const move = new moveTo(defaultOptions)
        move.move(el)
    }
}

export default scrollTo
