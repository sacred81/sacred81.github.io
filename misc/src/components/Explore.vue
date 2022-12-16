<template>
  <div>
    <div class="desc">{{ description1 }}</div>
    <div>
      검색 <input type="text" :value="searchText" @input="onInputSearchText" />
    </div>
    <table style="width: 80%">
      <thead>
        <th>탐험 목록</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in selectedItems" :key="index">
          <td>{{ item }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
/* eslint-disable */
import explore from '../assets/explore.json';

export default {
  name: "Explore",
  data() {
    return {
      description1: explore.ref,
      searchText: '',
      items: [],
      selectedItems: [],
    };
  },
  created() {
    this.items = explore.list;
    this.selectedItems = explore.list;
  },
  methods: {
    updateItems() {
      this.selectedItems = this.items;
      if (this.searchText) {
        this.selectedItems = this.selectedItems.filter(item => item.includes(this.searchText));
      }
    },
    onInputSearchText(e) {
      this.searchText = e.target.value;
      this.updateItems();
    },
  },
};
</script>

<style scoped>
.desc {
  margin-bottom: 10px;
}

td {
  text-align: left;
}

input {
  margin-bottom: 10px;
}

table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}

</style>
