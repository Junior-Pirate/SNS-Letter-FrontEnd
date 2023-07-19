<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <input type="text" v-model="name" placeholder="Enter your name">
    </div>
    <div>
      <input type="text" v-model="email" placeholder="Enter your email">
    </div>
    <div>
      <input type="text" v-model="pw" placeholder="Enter your pw">
    </div>
    <div>
      <input type="text" v-model="again_pw" placeholder="Check your pw">
    </div>
    <button @click="submit">Submit</button>
  </div>
  <!--
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">
        ID: {{ item.id }} | Name: {{ item.name }}
      </li>
    </ul>
  </div>
  -->
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      pw: '',
      again_pw: '',
      items: [], // 빈 배열로 초기화하여 받은 아이템을 저장합니다.
    };
  },
  created() {
    // 컴포넌트가 생성될 때 데이터를 가져옵니다.
    this.fetchItems();
  },
  methods: {
    //POST 요청
    async submit() {
      // 요청 페이로드를 준비합니다.
      const payload = {
        name: this.name,
        email: this.email,
        pw: this.pw,
        again_pw: this.again_pw,
      };

      try {
        // POST 요청을 보냅니다.
        await axios.post('http://localhost:9000/test', payload);

        // 응답 데이터를 처리합니다.
        this.fetchItems();
      } catch (error) {
        // 오류 처리
        console.error(error);
      }
    },
    //GET 요청
    async fetchItems() {
      try {
        // GET 요청을 보냅니다.
        const response = await axios.get('http://localhost:9000/test');

        // 응답 데이터를 받아서 items에 저장합니다.
        this.items = response.data;
      } catch (error) {
        // 오류 처리
        console.error(error);
      }
    },
  },
};
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
