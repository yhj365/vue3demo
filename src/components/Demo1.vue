<template>
  <div>
    <div>
      <span>{{ num }}</span>
      <button @click="changeNum">num++</button>
    </div>
    <div>
      <h3>{{ user.name }}</h3>
      <h3>{{ user.age }}</h3>
      <h3>{{ name }}</h3>
      <h3>{{ age }}</h3>
      <button @click="changeUser">user++</button>
    </div>
    <User :name="user.name" :age="user.age"></User>
    <Student ></Student>
  </div>
</template>

<script>
import { ref, reactive, toRefs, watchEffect,watch,provide  } from 'vue'
import User from './User18.vue'
import Student from './Student.vue'

export default {
  components:{
    User,
    Student,
  },
  setup() {
    const num = ref(0)
    const changeNum = () => {
      num.value++
    }

    const user = reactive({
      name: '叶浩杰',
      age: 30,
    })
    const changeUser = () => {
      user.name += 1
      user.age += 1
    }

    const student = reactive({
      name: '叶浩杰',
      classname: '3年2班',
    })
    provide('student',student)

    watchEffect(()=>{
      console.log(user.name);
    })
    // 单个监听
    watch(num,(newData,prevData) => {
      console.log(prevData);
      console.log(newData);
    })
    // 多个监听
    watch([num,user],(newData,prevData) => {
      console.log(prevData);
      console.log(newData);
    })
    return {
      num,
      changeNum,
      user,
      changeUser,
      ...toRefs(user),
    }
  },
}
</script>

<style>
</style>