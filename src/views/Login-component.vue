<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      <input type="email" v-model="email" placeholder="이메일을 입력해주세요.">
      <span v-if="!emailFilled" style="color: red;">이메일이 비어있습니다!</span>
    </div>
    <div>
      <input type="password" v-model="pw" placeholder="비밀번호를 입력해주세요.">
      <span v-if="!pwFilled" style="color: red;">비밀번호가 비어있습니다!</span>
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
      email: '',
      emailFilled: true,
      pw: '',
      pwFilled: true,
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
        email: this.email,
        pw: this.pw,
      };
      // 입력란이 채워져있는지 확인.
      if (this.email.trim() === '') {
        this.emailFilled = false;
      } else {
        this.emailFilled = true;
        console.log('Email:', this.email);
      }
      if (this.pw.trim() === '') {
        this.pwFilled = false;
      } else {
        this.pwFilled = true;
      }

      try {
        // POST 요청을 보냅니다.
        await axios.post('http://localhost:9000/login', payload);

        // 응답 데이터를 처리합니다.
        this.fetchItems();

        alert("로그인에 성공하셨습니다!")
      } catch (error) {
        // 오류 처리
        console.error(error);
      }
    },
    //GET 요청
    async fetchItems() {
      try {
        // GET 요청을 보냅니다.
        const response = await axios.get('http://localhost:9000/login');

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
