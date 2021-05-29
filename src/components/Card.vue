<template>
  <div>Card
    <div v-if="loading">loading Card...</div>
    <div v-else>cid : {{cid}}</div>
  </div>
</template>

<script>
// watch : 라우팅 감시하고 라우팅될 때마다 
// 컴포넌트가 생성될 때마다 
export default {
  data() {
    return {
      cid: 0,
      loading: false
    }
  },
  watch: {
    '$route': {
      handler: 'fetchData',
      immediate: true
    }
  },
  methods: {
    fetchData() {
      this.loading = true
      setTimeout(()=>{
        this.cid = this.$route.params.cid
        this.loading = false
      }, 500)
    }
  }
}
</script>

<style>

</style>