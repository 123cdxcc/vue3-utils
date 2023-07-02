<script setup lang="ts">
import { onMounted } from 'vue';
import TheWelcome from '../components/TheWelcome.vue'
import message from "@/utils/message";
import debounce from "@/utils/debounce";

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
  </main>
</template>
