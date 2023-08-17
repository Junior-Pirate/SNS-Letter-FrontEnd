<template>
  <html>
  <body>
  <div>
    <h1 id="title">Snsletter</h1>
    <div>
      <button id="button" @click="movetologin">로그인</button>
      <button id="button" @click="movetoregister">회원가입</button>
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
export default {
  methods: {
    // 페이지 이동시 params로 게시판 구분, query로 페이지 구분
    movetologin() {
      window.location.href = '/login'
    },
    movetoregister() {
      window.location.href = '/register'
    },
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