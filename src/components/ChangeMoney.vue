<script setup lang="ts">
import { ref } from 'vue';
import { useBankStore } from "../stores/bank";
const { checking, saving, changeChecking, changeSaving } = useBankStore();

const props = defineProps(["isChecking"]);
const isChecking = props.isChecking; 
let numMoney = ref((isChecking)? checking: saving);
const title = (isChecking)? "Checkings": "Savings";
const deposit = ref(0);
const withdraw = ref(0); 

function change(){
    if(isChecking){
        changeChecking(numMoney.value+deposit.value);
        changeChecking(numMoney.value-withdraw.value);
    }else{
        changeSaving(numMoney.value+deposit.value);
        changeSaving(numMoney.value-withdraw.value); 
    }
    numMoney.value = numMoney.value -withdraw.value + deposit.value; 
}
</script>
<template>
<h2>Total {{ title }} Left: </h2> {{ numMoney }} Mora
<br>
Withdraw: <input type="number" min="0" :max="numMoney" v-model="withdraw"/>
<br>
Deposit: <input type="number" v-model="deposit">
<br>
<button v-on:click="change">Submit</button>
</template>
<style scoped>
</style>