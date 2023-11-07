<template>
  <html>
  <body>
  <div>
    <div>
      <button id="button" @click="checktokenvalue">토큰값확인</button>
      <button id="button" @click="logout">로그아웃 test</button>
    </div>
    <div id="summary">
      <h1>편지함</h1>
      <a>사용자 ID: {{ $router.params.userID}}</a>
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
  data() {
    return {
      accessToken: '',
    };
  },
  methods: {
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

</style>