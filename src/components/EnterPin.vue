<script setup lang="ts">
import ChooseAccount from './ChooseAccount.vue';
import { ref } from 'vue';
import { useBankStore } from "../stores/bank";
const { pin, setPin } = useBankStore();

let input_pin = "";
function checkPin(){
    if(!pin) 
        setPin(Number(input_pin)); 
    
    if(Number(input_pin) === pin){
        correct.value = true; 
    }else{
        alert("Wrong pin");
    }
}
let correct = ref(false);
</script>

<template>
    <div v-if="!correct">
        Enter Pin!
        <input v-model="input_pin"/>
        <button v-on:click="checkPin">Enter</button>
    </div>
    
    <ChooseAccount v-else/>
</template>
<style scoped>
input{
    margin-left: 10px;
}
</style>