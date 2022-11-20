<template>
  <div>
    <div class="desc">{{ description1 }}</div>
    <table style="width: 50%">
      <thead>
        <th colspan="5">보기 가격 입력</th>
      </thead>
      <tbody>
        <tr>
          <td v-for="(c, index) in cases" :key="index">
            <input type="text" v-model="c.value">
          </td>
        </tr>
      </tbody>
    </table>
    <table style="width: 50%">
      <thead>
        <th colspan="6">무역품 입력</th>
      </thead>
      <tbody>
        <tr><td>검색</td><td>적용</td><td>시세</td></tr>
        <tr v-for="(item, index) in items" :key="index">
          <td><input type="text" :value="item.value" @input="onInput($event, index)"></td>
          <td><input type="text" :value="item.candidate" :disabled="true"></td>
          <td><input type="text" :value="item.price" :disabled="true"></td>
        </tr>
        <tr><td colspan="3"><button @click="onButtonClick">결과 검색</button></td></tr>
        <tr><td colspan="3"><input type="text" :value="strAnswer" :disabled="true"></td></tr>
      </tbody>
    </table>
  </div>
</template>

<script>
/* eslint-disable */
import lima from '../assets/lima.json';

export default {
  name: "LimaFestival",
  data() {
    return {
      description1: `가격에 오차가 있을 수 있습니다.`,
      cases: [], // value : 입력값(가격)
      items: [], // value : 입력값(품목), candidate : 검색한 품목, price : 시세
      prices: lima,
      strAnswer: '',
      combinations: [],
    };
  },
  created() {
    const combs = [];
    for (let i = 0; i < 5; i++) {
      this.cases.push({value: ''});
    }
    for (let i = 0; i < 12; i++) {
      combs.push(i);
      this.items.push({value: ''});
    }
    this.combinations = this.getCombinations(combs, 5);
  },
  methods: {
    getCombinations(set, size) {
      let i, j, combs, head, tailcombs;

      if (set.length < size || size <= 0) {
        return [];
      }

      if (size === set.length) {
        return [set];
      }

      if (size === 1) {
        combs = [];
        for (i = 0; i < set.length; i++) {
          combs.push([set[i]]);
        }
        return combs;
      }

      combs = [];
      for (i = 0; i < set.length - size + 1; i++) {
        head = set.slice(i, i + 1);
        tailcombs = this.getCombinations(set.slice(i + 1), size - 1);
        for (j = 0; j < tailcombs.length; j++) {
          combs.push(head.concat(tailcombs[j]));
        }
      }
      return combs;
    },
    onButtonClick() {
      let minDiff = 999999;
      let cSum = this.cases.reduce((acc, cur) => {
        return { value: Number(acc.value) + Number(cur.value) };
      }, {value: '0'});
      cSum = cSum.value;
      
      for (const comb of this.combinations) {
        let prices = 0;
        for (const c of comb) {
          prices = prices + Number(this.items[c].price);
        }
        let diff = Math.abs(prices - Number(cSum));
        if (diff < minDiff) {
          minDiff = diff;
          this.strAnswer = '';
          let candArr = [];
          for (const c of comb) {
            candArr.push(this.items[c].candidate);
          }
          this.strAnswer = `${candArr.join(', ')} / 오차 : ${diff}`;
        }
      }
    },
    onInput(e, index) {
      let item = this.items[index];
      item.value = e.target.value;
      const filtered = lima.filter(e => e.name === item.value);
      if (filtered.length === 1) {
        item.candidate = filtered[0].name;
        item.price = filtered[0].price;
        return;
      }

      const found = lima.find(e => e.name.includes(item.value));
      if (!found) {
        return;
      }
      item.candidate = found.name;
      item.price = found.price;
    },
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
  width: 90%;
}

table, th, td {
  text-align: center;
}

</style>
