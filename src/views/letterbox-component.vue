<template>
  <body>
  <h1 id="title">Snsletter</h1>
  <div id="div-right">
    <button id="button" @click="movetohome">홈</button>
  </div>
  <div id="login-background">
    <div id="login-form2">
    </div>
  </div>
  </body>
</template>


<script>
import axios from 'axios';

export default {
  mounted() {
    axios.post('http://localhost:9000/check', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
        .then(response => {
          // 보호된 데이터 처리
          console.log('success')
          console.log(response.data);
        })
        .catch(error => {
          // 인증 오류 처리
          console.log('fail')
          console.error(error);
        });
  }
}

</script>


<style>

</style>
