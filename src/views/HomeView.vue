<script setup lang="ts">
import { onMounted, ref } from 'vue';
import TheWelcome from '../components/TheWelcome.vue'
import Test from '@/components/Test.vue'
import message from "@/utils/message";
import debounce from "@/utils/debounce";

const show = ref(true)

let count = 0;

function countAdd(): number {
  count++;
  console.log(count);
  
  return count;
}

const dCountAdd = debounce(countAdd)
onMounted(()=> {
  message("hello", ()=>{
    dCountAdd()
  }, ()=> {

  })
})
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <Test v-model="show"/>
  </main>
</template>
