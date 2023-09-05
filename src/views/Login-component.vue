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

        <input type="password" v-model="pw" placeholder="비밀번호를 입력해주세요.">

      </div>
    </div>
  </div>
  <div>
    <button id="submit-button" @click="submit">로그인 하기</button>
  </div>
  </body>
</template>


<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      pw: '',
      items: [], // 빈 배열로 초기화하여 받은 아이템을 저장합니다.
    };
  },
  methods: {
    setAccessTokenCookie(accessToken) {
      //쿠키 만료 시간
      const maxAge = 60;

      // 현재 시간에 만료한 시간을 더해 만료 날짜를 계산
      const expires = new Date(Date.now() + maxAge * 1000);

      //쿠키 설정
      document.cookie = `accessToken=${accessToken}; expires=${expires.toUTCString()}; path=/; secure`;
    },
    //POST 요청
    async submit() {
      // 요청 페이로드를 준비합니다.
      const payload = {
        email: this.email,
        pw: this.pw,
      };
      try {
        // POST 요청을 보냅니다.
        const response = await axios.post('http://localhost:9000/user/login', payload)

        const data = await response.json();
        const accessToken = data.accessToken;

        if (response.data.loginSuccess === false) {
          alert(response.data.message);
        } else if (response.status === 200) {
          this.setAccessTokenCookie(accessToken);
          alert("로그인 성공!")

          this.$router.push('letterbox/:userEmail');
        }

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
