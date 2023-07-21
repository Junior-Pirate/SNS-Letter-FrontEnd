<template>
  <div>
    <button @click="movetologin">로그인</button>
    <button @click="movetoregister">회원가입</button>
    <button @click="movetosearch">검색</button>
  </div>
</template>

<script>
export default {
  methods: {
    // 페이지 이동시 params로 게시판 구분, query로 페이지 구분
    movetologin(){
      window.location.href='/login'
    },
    movetoregister(){
      window.location.href='/register'
    },
    movetosearch(){
      window.location.href='/search'
    },
  },
};

</script>