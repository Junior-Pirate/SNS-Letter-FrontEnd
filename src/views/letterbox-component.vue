<template>
  <body>
  <h1 id="title">Snsletter</h1>
  <div id="div-right">
    <button id="button" @click="movetohome">홈</button>
  </div>
  <div id="login-background">
    <div id="login-form2">
      <a> 이 곳은 개인 편지함 </a><br>

    </div>
  </div>
  </body>
</template>


<script>
export default {
  props: ['userId'],
  methods: {
    // 페이지 이동시 params로 게시판 구분, query로 페이지 구분
    movetohome() {
      window.location.href = '/home'
    },
  },
};
</script>


<style>

</style>
