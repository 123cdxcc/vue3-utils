// 用于解决组件v-model的单项数据流问题
import { computed } from 'vue'
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