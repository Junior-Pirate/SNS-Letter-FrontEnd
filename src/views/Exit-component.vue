<template>
  <html>
  <body>
  <div>
    <h1 id="title">Snsletter</h1>
    <div>
      <button id="button" @click="movetologin">로그인</button>
      <button id="button" @click="movetoregister">회원가입</button>
      <button id="button" @click="movetoletterbox">홈</button>
    </div>
    <div id="summary">
      <a>작성하신 편지를 편지함에 잘 넣어두었습니다.</a><br>
      <a>손쉽게 회원가입을 할 수 있으니, Snsletter에서 편지를 받아보세요!!</a><br>
    </div>
  </div>
  </body>
  </html>
</template>

<script>
export default {
  methods: {
    movetologin() {
      window.location.href = '/login'
    },
    movetoregister() {
      window.location.href = '/register'
    },
    movetoletterbox() {
      window.location.href = '/home'
    }
  },
};
</script>

<style>
</style>