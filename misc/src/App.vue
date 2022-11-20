<template>
  <div id="app">
    <div v-if="menus">
      <ul>
        <li><router-link :to="{ name: 'DaVincisLock' }">다빈치의 자물쇠</router-link></li>
        <li><router-link :to="{ name: 'BachelorsOfPisa' }">피사의 학사</router-link></li>
        <li><router-link :to="{ name: 'CleverMerchant' }">영리한 상인</router-link></li>
        <li><router-link :to="{ name: 'LimaFestival' }">리마 축제</router-link></li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'App',
  data() {
    return {
      menus: this.$route.query.menus,
    };
  },
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
