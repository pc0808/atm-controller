<script setup lang="ts">
import { ref } from 'vue';

import EnterPin from './EnterPin.vue';

const entered = ref(false); 
async function switchmode(){
    entered.value = true; 
    console.log(entered.value);
}
console.log(entered.value);
</script>
<template>
<body>
    <div v-if="!entered">
        Enter your card! 
        <button v-on:click="switchmode">ENTER</button>
    </div>
    <EnterPin v-else></EnterPin>
</body>
</template>
<style scoped>
    
</style>