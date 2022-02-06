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
  onBeforeUnmount,
  } from 'vue'

export default {
  name: 'User',
  setup(props,content){
    console.log(content);
    console.log(props);
    const desc = ref(`${props.name}的年龄是${props.age}`)
    onBeforeMount(()=>{
      console.log('onBeforeMount');
    })
    onMounted(()=>{
      console.log('onMounted');
    })
    onBeforeUpdate(()=>{
      console.log('onBeforeUpdate');
    })
    onBeforeUnmount(()=>{
      console.log('onBeforeUnmount');
    })
    return {
      desc
    }
  },
  props: ['name', 'age']
}
</script>

<style>

</style>