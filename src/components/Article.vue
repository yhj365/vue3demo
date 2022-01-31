<template>
  <div>
    <h1>Article</h1>
    <h3>{{$route.params.id}}</h3>
  </div>
</template>

<script>
export default {
  mounted(){
    console.log(this.$route.params.id)
  }
}
</script>

<style>

</style>