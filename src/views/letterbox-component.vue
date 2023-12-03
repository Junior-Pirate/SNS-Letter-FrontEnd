<template>
  <body>
  <h1 id="title">Snsletter</h1>
  <div id="div-right">
    <button id="button" @click="movetohome">홈</button>
  </div>

  <div v-if="showInput">
    <input v-model="userEmail" placeholder="이메일 입력">
    <button @click="checkUser">확인</button>
  </div>
  <!--showContent가 true이면 본문이 보이도록
  접근한 userid와 입력한 useremail이 같은 사람이라면
  showcontent를 true로 변경-->
  <div v-if="showContent">

    <div id="login-background">
      <div id="login-form2">
        <a> 이 곳은 개인 편지함 </a><br>
      </div>
    </div>
  </div>

  </body>
</template>


<script>
export default {
  props: ['userId'],
  data() {
    return {
      userEmail: '',
      showContent: false,
      showInput: true,
    };
  },
  methods: {
    // 페이지 이동시 params로 게시판 구분, query로 페이지 구분
    movetohome() {
      window.location.href = '/main'
    },
    checkUser() {
      // 백엔드로 useremail 넘기고 확인하는 로직 추가
      this.showContent = true; // 본문은 보이도록 true
      this.showInput = false; // email 입력란은 안보이도록 false
    }
  },
};
</script>


<style>

</style>
