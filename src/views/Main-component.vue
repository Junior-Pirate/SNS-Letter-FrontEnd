<template>
  <html>
  <body>
  <div>
    <h1 id="title">Snsletter</h1>
    <div>
      <button id="button" @click="movetoletterbox">편지함으로 가기</button>
    </div>
    <div>
      <button id="button" @click="checktokenvalue">토큰값확인</button>
      <button id="button" @click="logout">로그아웃 test</button>
    </div>
    <div id="summary">
      <a>진실된 연결을 통해 번성하는 저희 플렛폼에 오신것을 환영합니다♥</a><br>
      <a>Snsletter에서 내면의 생각, 비밀스러운 상상, 소중한 감정을 망설임 없이 표현해보세요.</a><br>
      <a>익명의 편지를 통해 친구들과 솔직하고 소중한 감정을 나눌수 있어요!</a><br>
    </div>
  </div>
  </body>
  </html>
</template>
<script>
import axios from "axios";

export default {
  methods: {
    async movetoletterbox() {
      const token = this.getCookie('accessToken');
      if (token === undefined) {
        alert("로그인 후 이용하시기 바랍니다.");
        this.$router.push('/login');
      } else {
        try {
          console.log(123)
          const response = await axios.get('http://localhost:9000/letter/letterbox', {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
          if (response.status !== 200) {
            alert(response.data.message);
          } else if (response.status === 200) {
            alert("편지함 생성 성공!")

            this.$router.push('/exit')
          }
        } catch (error) {
          console.error(111);
          console.error(error);
        }
      }
    },
    checktokenvalue() {
      const token = this.getCookie('accessToken');
      console.log(token)
    },
    getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    },
    logout() {
      this.$cookies.remove('accessToken')
    }
  },
};
</script>

<style>
@font-face {
  font-family: 'titlefont';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2303@1.0/ARCHISCULPTURE_v200.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'normalfont';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/KCCMurukmuruk.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

body {
  background: #2B2730;
}

#title {
  position: relative;
  top: 20px;
  font-family: titlefont;
  font-size: 80px;
}

#button {
  font-family: normalfont;
  background: #E966A0;
  border: none;
  border-radius: 4px;
  color: white;
  text-align: center;
  font-size: 20px;
  margin-left: 4px;
  margin-bottom: 10px;
}


#summary {
  font-family: normalfont;
  color: white;
  text-align: center;
  position: relative;
  top: 50px;
}
</style>