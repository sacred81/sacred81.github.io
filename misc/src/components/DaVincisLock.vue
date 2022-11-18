<template>
  <div>
    <div class="desc">{{ title }}</div>
    <div class="desc">{{ description1 }}</div>
    <div class="desc">{{ description2 }}</div>
    <div class="desc">{{ description3 }}</div>
    <button @click="onReset()">리셋</button>
    <table style="width: 50%">
      <thead>
        <th>추천</th>
        <th>정답 후보(개)</th>
        <th>Strike</th>
        <th>Ball</th>
        <th>확인</th>
      </thead>
      <tbody>
        <tr v-for="(candidate, index) in candidates" :key="index">
          <td><input type="text" v-model="candidate.num" /></td>
          <td>{{ candidate.count }}</td>
          <td><input type="text" v-model="candidate.strike" /></td>
          <td><input type="text" v-model="candidate.ball" /></td>
          <td><button @click="onClick(index)">확인</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "DaVincisLock",
  data() {
    return {
      title: `<< 다섯 자리 숫자 중복 가능한 야구게임 >>`,
      description1: `추천은 정답 후보 중 하나를 임의로 선택한 값으로, 힌트를 얻기 위한 최적의 값은 아닙니다.`,
      description2: `게임에 추천 값을 입력하고 녹색(Strike), 노란색(Ball) 결과를 입력해서 확인 버튼을 누르세요.`,
      description3: `다른 값을 입력하려면 추천칸에 작성하고 녹색(Strike), 노란색(Ball) 결과를 입력해서 확인 버튼을 누르세요.`,
      candidates: [],
    };
  },
  created() {
    this.onReset();
  },
  methods: {
    onReset() {
      this.candidates = [
        {
          num: 12340,
          count: 100000,
          rate: 0.0001,
          strike: '',
          ball: '',
        },
      ];
    },
    onClick(index) {
      this.candidates.splice(index + 1);
      const candidate = this.solution();
      this.candidates.push({
        num: this.pad(candidate.candidateNum),
        count: candidate.candidatesCount,
        strike: '',
        ball: '',
      });
    },
    pad(num, size = 5) {
      if (num === undefined) {
        return '오류';
      }
      num = num.toString();
      while (num.length < size) num = "0" + num;
      return num;
    },
    strToArr(str) {
      const ret = [];
      for (let i = 0; i < str.length; i++) {
        ret.push(str.charAt(i));
      }
      return ret;
    },
    isAvailable(num) {
      for (const b of this.candidates) {
        const strike = Number(b.strike);
        const ball = Number(b.ball);
        let sCount = 0;
        let bCount = 0;
        const numArr = this.strToArr(this.pad(b.num));
        const candArr = this.strToArr(this.pad(num));
        const candArr2 = this.strToArr(this.pad(num));
        const zipArr = numArr.map(function (e, i) {
          return {
            n: e,
            c: candArr[i],
          };
        });

        for (const z of zipArr) {
          if (strike === 0 && ball === 0 && candArr.includes(z.n)) {
            return false;
          }
          if (candArr.includes(z.n)) {
            if (z.n === z.c) {
              sCount++;
            } else {
              bCount++;
            }
          }
          const index = candArr2.indexOf(z.n);
          if (index !== -1) {
            candArr2.splice(index, 1);
          }
        }

        if (candArr2.length !== 5 - (strike + ball)) {
          return false;
        }

        if (strike !== sCount) {
          return false;
        }
      }
      return true;
    },
    solution() {
      const ret = [];
      let candidatesCount = 0;
      for (let i = 0; i < 100000; i++) {
        if (this.isAvailable(i)) {
          candidatesCount++;
          ret.push(i);
        }
      }
      const index = Math.floor(Math.random() * (ret.length - 1));
      return {
        candidatesCount: candidatesCount,
        candidateNum: ret[index],
      };
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
}
</style>
