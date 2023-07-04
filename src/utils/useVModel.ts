// 用于解决对象类型单项数据流问题
import { computed, ref, watch } from 'vue'
export default function useModel(prop: any, propName: string, emit: ((...args: any[]) => any) | ((evt: string, ...args: any[]) => void)) {
    return computed({
        get: new Proxy(prop[propName], {
            set: (target, key, value) => {
                emit(`update:${propName}`, {
                    ...target,
                    [key]: value
                })
                return true
            }
        }),
        set: (val) => emit(`update:${propName}`, val)
    })
}
// 解决基本数据类型子组件单项数据流问题
export function useRef(prop: any, propName: string, emit: ((...args: any[]) => any) | ((evt: string, ...args: any[]) => void)) {
    const val = ref(prop[propName])
    watch(
        val,
        (newVal, _oldVal) => {
            emit(`update:${propName}`, newVal)
        }
    )
    return val;
}