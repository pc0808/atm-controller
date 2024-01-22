<script setup lang="ts">
import { ref } from 'vue';
import { useBankStore } from "../stores/bank";
import ChangeMoney from "./ChangeMoney.vue"; 
const { checking, saving } = useBankStore();

const selected = ref<boolean>(false);
const title = ref("");
const money = ref(0); 

function selectAcc(check:boolean){
    selected.value = true;
    isChecking.value = check; 
}
const isChecking = ref(false);
</script>

<template>
    <div v-if="!selected">
        Select Account 
        <button v-on:click="selectAcc(true)">Checking</button>
        <button v-on:click="selectAcc(false)">Saving</button>
    </div>
    <ChangeMoney v-else :isChecking="isChecking"/>
    
</template>

<style scoped>
button{
    margin-left: 10px;
}
</style>