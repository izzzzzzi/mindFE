<template>
  <div>Hello Home
    <div>
      Board List:
      <ul>
        <li class="list">
          <router-link to="/b/1">Board 1</router-link>
          <router-link to="/b/2">Board 2</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.list{
  display: inline-block;
}
</style>