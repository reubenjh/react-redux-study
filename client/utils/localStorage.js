const localStorage = global.window.localStorage

export const set = (key, value) => {
    value === null 
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, value)
}