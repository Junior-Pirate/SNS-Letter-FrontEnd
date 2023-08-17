<template>
  <html>
  <body>
  <div>
    <h1 id="title">SnsLetter</h1>
    <div id="summary">
      <p>해당 페이지를 찾을 수 없습니다!</p>
      <p>홈 버튼을 눌러 메인 화면으로 돌아갈 수 있어요.</p>
      <p id="error">4 0 4 Error</p>
    </div>
    <button id="error-home-button" @click="movetohome">홈</button>
  </div>
  </body>
  </html>
</template>

<script>
export default {
  methods: {
    // 페이지 이동시 params로 게시판 구분, query로 페이지 구분
    movetohome() {
      window.location.href = '/home'
    },
  },
};
</script>

<style>

#error {
  font-family: normalfont;
  color: white;
  text-align: center;
  position: relative;
  font-size: 100px;
  bottom: 60px;
}


#error-home-button {
  font-family: normalfont;
  background: #E966A0;
  width: 60px;
  border: none;
  border-radius: 4px;
  color: white;
  text-align: center;
  font-size: 20px;
  margin-left: 4px;
  margin-bottom: 10px;
  bottom: 100px;
  position: relative;
}

</style>