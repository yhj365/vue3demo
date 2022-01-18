<template>
  <div >
    <span>{{count}}</span>
    <button type="button" @click="add">加1</button>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  data() {
    return {
      count: 0
    }
  },
  method: {
    add() {
      this.count++;
    }
  },
  setup(){
    const num = ref(0)

    return {
      num,
    }
  }
}
</script>

<style>

</style>