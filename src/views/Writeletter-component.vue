<template>
  <html>
  <body>
  <h1 id="title">Snsletter</h1><br>
  <div id="div-right">
    <button id="button" @click="logout">로그아웃</button>
  </div>
  <h2 id="letterbox-owner">홍길동의 편지함</h2>
  <div id="letter">
    <div>
      <a id="letter-title-intro">제목 : </a>
      <input id="letter-title" type="text" v-model="title" placeholder="제목">
    </div>
    <div>
      <a id="letter-nickname-intro">닉네임 : </a>
      <input id="letter-nickname" type="text" v-model="nickname" placeholder="닉네임">
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
  font-family: normalfont;
  color: white;
  font-size: 40px;
  text-align: center;
  bottom: 70px;
}

#letter {
  background: #624F80;
  position: relative;
  width: 700px;
  height: 450px;
  border-radius: 50px;
  margin: 0 auto;
  clear: both;
  bottom: 60px;
}
#letter-title-intro {
  font-family: normalfont;
  color: white;
  text-align: center;
  position: relative;
  top: 10px;
}

#letter-title {
  background: white;
  position: relative;
  width: 400px;
  height: 30px;
  border-radius: 50px;
  top: 10px;
}

#letter-nickname-intro {
  font-family: normalfont;
  color: white;
  text-align: center;
  position: relative;
  top: 10px;
}

#letter-nickname {
  background: white;
  position: relative;
  width: 100px;
  height: 30px;
  border-radius: 50px;
  position: relative;
  top: 10px;
}

</style>