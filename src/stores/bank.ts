import { defineStore } from "pinia";
import {ref } from "vue";

export const useBankStore = defineStore(
  "bank",
  () => {
    const pin = ref<number | undefined>(undefined);
    const checking = ref<number>(0);
    const saving = ref<number>(0);

    const setPin = (newpin: number) => {
      pin.value = newpin;   
      console.log("here", pin.value); 
    };
    const changeChecking = (newmoney:number) => {
        checking.value = newmoney; 
    }
    const changeSaving = (newmoney:number) => {
        saving.value = newmoney; 
    }
    return {
      pin,
      checking,
      saving,
      setPin,
      changeChecking,
      changeSaving,
    };
  },
  { persist: true },
);
