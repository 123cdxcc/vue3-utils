/**
 * 防抖动函数
 * @param fn 待防抖动函数
 * @param delay 时间间隔
 * @returns 实现防抖动的函数
 */
export default function debounce<T extends any[], R>(fn: (...args: T)=>R, delay: number = 500): (...args: T)=> void {
    let last: number
    return function(...args) {
        clearTimeout(last)
        last = setTimeout(()=> {
            fn(...args)
        }, delay)
    }
}