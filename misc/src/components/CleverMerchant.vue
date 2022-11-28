<template>
  <div>
    <div class="desc">{{ description1 }}
    (검색) <input type="text" :value="searchText" @input="onInput" />
    </div>
    <table style="width: 100%">
      <tbody>
        <tr>
          <td style="width: 15%">{{ summer.NW }}</td>
          <td style="width: 15%">{{ summer.N }}</td>
          <td style="width: 15%">{{ summer.NE }}</td>
          <td style="width: 10%; border: none;">     </td>
          <td style="width: 15%">{{ winter.NW }}</td>
          <td style="width: 15%">{{ winter.N }}</td>
          <td style="width: 15%">{{ winter.NE }}</td>
        </tr>
        <tr>
          <td style="width: 15%">{{ summer.W }}</td>
          <td style="width: 15%">여름</td>
          <td style="width: 15%">{{ summer.E }}</td>
          <td style="width: 10%; border: none;">     </td>
          <td style="width: 15%">{{ winter.W }}</td>
          <td style="width: 15%">겨울</td>
          <td style="width: 15%">{{ winter.E }}</td>
        </tr>
        <tr>
          <td style="width: 15%">{{ summer.SW }}</td>
          <td style="width: 15%">{{ summer.S }}</td>
          <td style="width: 15%">{{ summer.SE }}</td>
          <td style="width: 10%; border: none;">     </td>
          <td style="width: 15%">{{ winter.SW }}</td>
          <td style="width: 15%">{{ winter.S }}</td>
          <td style="width: 15%">{{ winter.SE }}</td>
        </tr>
      </tbody>
    </table>
    <div style="margin-top: 10px" class="desc">{{ description4 }}</div>
    <div><input type="text" :value="development" @input="onInputDevel" /> : 발전도 </div>
    <div><input type="text" :value="diff" @input="onInputDiff" /> : 점유율 차이 (%) </div>
    <div><input type="text" :value="investAmount" :disabled="true" /> : 정답 </div>
    <div style="margin-top: 10px" class="desc">{{ description5 }}</div>
    <div><input type="text" v-model="now" /> : 현재시간 </div>
    <div><input type="text" :value="cases" @input="onInputCases" /> : 보기 </div>
    <div><input type="text" :value="timeAnswer" :disabled="true" /> : 정답 </div>
  </div>
</template>

<script>
/* eslint-disable */
import wind from '../assets/wind.json';

export default {
  name: "CleverMerchant",
  data() {
    return {
      description1: `1. 풍향 `,
      description4: `4. 발전도`,
      description5: `5. 시계`,
      searchText: '',
      summer: {},
      winter: {},
      development: '',
      diff: '',
      investAmount: '',
      now: '',
      cases: '',
      timeAnswer: '',
    };
  },
  created() {
    this.updateItems();
  },
  methods: {
    windToStr(item) {
      const ret = {};
      for (const [key, value] of Object.entries(item)) {
        ret[key] = value.join('\n');
      }
      return ret;
    },
    filterWind(item, searchText) {
      const ret = {};
      for (const [key, value] of Object.entries(item)) {
        ret[key] = value.filter(v => v.includes(searchText));
      }
      return ret;
    },
    updateItems() {
      let summerData = wind.summer;
      let winterData = wind.winter;

      if (this.searchText) {
        summerData = this.filterWind(wind.summer, this.searchText);
        winterData = this.filterWind(wind.winter, this.searchText);
      }

      this.summer = this.windToStr(summerData);
      this.winter = this.windToStr(winterData);
    },
    onInput(e) {
      this.searchText = e.target.value;
      this.updateItems();
    },
    onInputDevel(e) {
      this.development = e.target.value;
      this.investAmount = Number(this.development) * Number(this.diff) * 400;
    },
    onInputDiff(e) {
      this.diff = e.target.value;
      this.investAmount = Number(this.development) * Number(this.diff) * 400;
    },
    onInputCases(e) {
      this.cases = e.target.value;
      if (Number.isNaN(this.cases)) {
        return;
      }
      const solution = this.getTimeSolution(this.cases, this.now);
      this.timeAnswer = solution ? solution.join(',') : '입력오류';
    },
    getTimeSolution(strNumbers, now = 0) {
      const arr = this.strToArr(strNumbers);
      for (const a of arr) {
        for (const b of arr) {
          for (const c of arr) {
            for (const d of arr) {
              for (const e of arr) {
                if ((Number(a) + Number(b) + Number(c) + Number(d) + Number(e) + Number(now)) % 12 === 0) {
                  return [a, b, c, d, e];
                }
              }
            }
          }
        }
      }
      return null;
    },
    strToArr(str) {
      const ret = [];
      for (let i = 0; i < str.length; i++) {
        ret.push(str.charAt(i));
      }
      return ret;
    },
  },
};
</script>

<style scoped>
.desc {
  margin-bottom: 10px;
}

td {
  text-align: center;
  white-space: pre-line;
}

input {
  margin-bottom: 10px;
}

td {
  border: 1px solid black;
  border-collapse: collapse;
}

</style>
