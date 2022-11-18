<template>
  <div id="app">
    <ul>
      <li><router-link :to="{ name: 'DaVincisLock' }">다빈치의 자물쇠</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
