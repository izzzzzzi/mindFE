<template>
  <div id="app">
       <Navbar/>
    <!-- Vue router에 의해 라우팅에 따라 컴포넌트가 대체되는 부분-->
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: {Navbar},
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
