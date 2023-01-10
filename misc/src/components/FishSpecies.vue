<template>
  <div>
    <div class="desc">{{ description1 }}</div>
    <div>
      지역 검색 <input type="text" :value="location" @input="onInputLocation" />
      어종 검색 <input type="text" :value="species" @input="onInputSpecies" />
    </div>
    <table style="width: 80%">
      <thead>
        <th style="width: 20%">지역</th>
        <th style="width: 80%">어종</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in selectedItems" :key="index">
          <td>{{ item.location }}</td>
          <td>{{ item.species }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
/* eslint-disable */
import fish from '../assets/fish.json';

export default {
  name: "FishSpecies",
  data() {
    return {
      location: '',
      species: '',
      description1: `없는 지역/어종이 있을 수 있습니다.`,
      items: [],
      selectedItems: [],
    };
  },
  created() {
    this.items = fish;
    this.selectedItems = fish;
  },
  methods: {
    updateItems() {
      this.selectedItems = this.items;
      if (this.location) {
        this.selectedItems = this.selectedItems.filter(item => item.location.includes(this.location));
      }
      if (this.species) {
        this.selectedItems = this.selectedItems.filter(item => item.species.includes(this.species));
      }
    },
    onInputLocation(e) {
      this.location = e.target.value;
      this.updateItems();
    },
    onInputSpecies(e) {
      this.species = e.target.value;
      this.updateItems();
    }
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
