<template>
  <html>
  <body>
  <div>
    <div>
      <button id="button" @click="movetologin">로그인</button>
      <button id="button" @click="movetoregister">회원가입</button>
      <button id="button" @click="movetoletterbox">편지함</button>
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
export default {
  methods: {
    // 페이지 이동시 params로 게시판 구분, query로 페이지 구분
    movetologin() {
      window.location.href = '/login'
    },
    movetoregister() {
      window.location.href = '/register'
    },
    movetoletterbox() {
      window.location.href = '/letterbox/:userEmail'
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