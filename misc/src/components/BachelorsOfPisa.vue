<template>
  <div>
    <div class="desc">{{ description1 }}</div>
    <div>
      정답 검색 <input type="text" :value="answer" @input="onInputAnswer" />
      문제 검색 <input type="text" :value="question" @input="onInputQuestion" />
    </div>
    <table style="width: 50%">
      <thead>
        <th style="width: 20%">정답</th>
        <th style="width: 80%">문제</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in selectedItems" :key="index">
          <td>{{ item.answer }}</td>
          <td>{{ item.question }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
/* eslint-disable */
import pisa from '../assets/pisa.json';

export default {
  name: "BachelorsOfPisa",
  data() {
    return {
      answer: '',
      question: '',
      description1: `없는 문제가 있을 수 있습니다.`,
      items: [],
      selectedItems: [],
    };
  },
  created() {
    this.items = pisa;
    this.selectedItems = pisa;
  },
  methods: {
    updateItems() {
      this.selectedItems = this.items;
      if (this.answer) {
        this.selectedItems = this.selectedItems.filter(item => item.answer.includes(this.answer));
      }
      if (this.question) {
        this.selectedItems = this.selectedItems.filter(item => item.question.includes(this.question));
      }
    },
    onInputAnswer(e) {
      this.answer = e.target.value;
      this.updateItems();
    },
    onInputQuestion(e) {
      this.question = e.target.value;
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
