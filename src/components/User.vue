<template>
  <h1>{{name}}</h1>
  <h1>{{age}}</h1>
  <h1>{{desc}}</h1>
</template>

<script>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onBeforeUnmounted,
  } from 'vue'

export default {
  name: 'User',
  setup(props,content){
    console.log(content);
    console.log(props);
    const desc = ref(`${props.name}的年龄是${props.age}`)
    return {
      desc
    }
  },
  props: ['name', 'age']
}
</script>

<style>

</style>