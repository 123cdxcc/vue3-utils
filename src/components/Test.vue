<template>
    <div v-show="show" @click="hide">1111</div>
</template>
<script setup lang="ts">
import {useRef} from '@/utils/useVModel'

interface Prop {
    modelValue: boolean
}
const props = defineProps<Prop>()
const emit = defineEmits(['update:modelValue'])

const show = useRef(props, 'modelValue', emit)

function hide() {
    show.value = false
}

</script>