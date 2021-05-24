<template>
  <div>Board
    <div>bid : {{bid}}</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      bid:0
    }
  }
  ,
  created(){
    // 라우팅 종류 받을 수 있음
    this.bid = this.$route.params.bid
  }
}
</script>

<style>

</style>