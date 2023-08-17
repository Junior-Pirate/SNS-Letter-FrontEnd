<template>
  <body>
  <h1 id="title">Snsletter</h1>
  <div id="div-right">
    <button id="button" @click="movetohome">홈</button>
    <button id="button" @click="movetoregister">회원가입</button>
  </div>
  <div id="login-background">
    <div id="login-form1">
      <p>이메일</p>
      <p>비밀번호</p>

    </div>
    <div id="login-form2">
      <div>
        <input type="email" v-model="email" placeholder="이메일을 입력해주세요.">
        <span v-if="!emailFilled" style="color: red;">이메일이 비어있습니다!</span>

        <input type="password" v-model="pw" placeholder="비밀번호를 입력해주세요.">
        <span v-if="!pwFilled" style="color: red;">비밀번호가 비어있습니다!</span>

      </div>
    </div>
  </div>
  <div>
    <button id="submit-button" @click="submit">로그인 하기</button>
  </div>
  </body>
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
    movetoregister() {
      window.location.href = '/register'
    },
    movetohome() {
      window.location.href = '/home'
    },
  },
};
</script>


<style>

#login-background {
  background: #6554AF;
  width: 500px;
  height: 110px;
  border-radius: 50px;
  display: flex;
  margin: 0 auto;
  clear: both;
}

#login-form1 {
  background: gray;
  width: 170px;
  height: 80%;
  border-radius: 50px;
  float: left;
  top: 10px;
  left: 20px;
  position: relative;
}

#login-form2 {
  width: 280px;
  height: 50%;
  border-radius: 50px;
  float: right;
  top: 13px;
  left: 30px;
  position: relative;
}

</style>
