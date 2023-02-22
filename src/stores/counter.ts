import { getApiList } from './../server/inedx';
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
    id:'counter',
    state: ()=>({
      list:{}
    }),
    actions: {
      async getList(){
        const result = await getApiList()
        this.list = result
        console.log(result);
        
      }
    }
})
