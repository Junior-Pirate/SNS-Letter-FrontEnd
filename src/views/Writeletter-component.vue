<template>
  <html>
  <body>
  <h1 id="title">Snsletter</h1><br>
  <h2 id="letterbox-owner">홍길동의 편지함</h2>
  <div>
    <div>
      <button id="button" @click="logout">로그아웃</button>
    </div>
    <div id="summary">
      <a>Test page</a><br>
      <a>Test page</a><br>
      <a>Test page</a><br>
      <a>Test page</a><br>
      <a>Test page</a><br>
      <a>Test page</a><br>
      <a>Test page</a>
    </div>
  </div>
  </body>
  </html>
</template>

<script>

import axios from "axios";

export default {
  data() {
    return {
      accessToken: '',
    };
  },
  methods: {
    //POST 요청
    async logout() {
      // 요청 페이로드를 준비합니다.
      const payload = {
        accessToken: this.accessToken,
      };
      try {
        // POST 요청을 보냅니다.
        const response = await axios.post('http://localhost:9000/user/logout', payload)
        if (response.data.loginSuccess === false) {
          alert(response.data.message);
        } else if (response.status === 200) {

          const accessToken = response.data.accessToken;

          this.setAccessTokenCookie(accessToken);
          alert("로그인 성공!")

          this.$router.push('/test');
        }

      } catch (error) {
        // 오류 처리
        console.error(error);
      }
    },
  },
};
</script>

<style>
#letterbox-owner {
  position: relative;
  font-family: titlefont;
  font-size: 70px;
  bottom: 70px;
}
</style>