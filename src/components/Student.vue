<template>
  <h3>学生组件</h3>
  <h3>{{student.name}}</h3>
  <h3>{{student.classname}}</h3>
</template>

<script>
import {
  ref,
  inject,
  } from 'vue'

export default {
  name: 'Student',
  setup(props,content){
    const student = inject('student')
    return {
      student
    }
  },
  props: ['name', 'age']
}
</script>

<style>

</style>