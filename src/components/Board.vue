<template>

<div>
  <div v-if="loading">Board Loading...!</div>
  <div v-else>
    <div>bid : {{bid}}</div> 
    <router-link :to="`/b/${bid}/c/1`">Card1</router-link>
    <router-link :to="`/b/${bid}/c/2`">Card2</router-link>
  </div>
  <hr/>
    <router-view></router-view>
</div>
</template>

<script>
export default {
  data(){
    return{
      bid:0,
      loading: false
    }
  },
  created(){
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.loading = true
      setTimeout(()=> {
        this.loading = false
        this.bid= this.$route.params.bid          
      }, 500)
    }
  }
}

</script>

<style>

</style>