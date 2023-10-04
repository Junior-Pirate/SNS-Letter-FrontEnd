<template>
  <html>
  <body>
  <h1 id="title">Snsletter</h1>
  <div id="div-right">
    <button id="button" @click="movetohome">홈</button>
    <button id="button" @click="movetologin">로그인</button>
  </div>
  <div id="register-background">
    <div id="register-form1">
      <p>이름</p>
      <p>이메일</p>
      <p>비밀번호</p>
      <p>비밀번호 확인</p>

    </div>
    <div id="register-form2">
      <div>
        <input type="text" v-model="name" placeholder="이름을 입력해주세요.">

        <input type="email" v-model="email" placeholder="이메일을 입력해주세요.">

        <input type="password" v-model="pw" placeholder="비밀번호를 입력해주세요.">

        <input type="password" v-model="again_pw" placeholder="비밀번호 확인">

      </div>
    </div>
  </div>
  <div>
    <button id="submit-button" @click="submit">회원가입 하기</button>
  </div>
  </body>
  </html>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      pw: '',
      again_pw: '',
      items: [], // 빈 배열로 초기화하여 받은 아이템을 저장합니다.
    };
  },
  methods: {
    //POST 요청
    async submit() {
      // 요청 페이로드를 준비합니다.
      const payload = {
        name: this.name,
        email: this.email,
        pw: this.pw,
        again_pw: this.again_pw,
      };
      try {
        // POST 요청을 보냅니다.
        const response = await axios.post('http://localhost:9000/user/register', payload);
        this.items = response.data;

        if (response.data.registerSuccess === false) {
          alert(response.data.message);
        } else if (response.status === 200) {
          alert("회원가입이 성공적으로 완료되었습니다.\n" +
              "로그인 후 이용바랍니다.")
          this.$router.push('/login');
        }

      } catch (error) {
        // 오류 처리
        console.error(error);
      }
    },

    movetologin() {
      window.location.href = '/login'
    },
    movetohome() {
      window.location.href = '/main'
    },
  },
};
</script>

<style>
input {
  width: 90%;
  height: 28px;
  font-family: normalfont;
  margin-bottom: 7px;
  border-radius: 15px;

}
#div-right {
  float: right;
  right: 40px;
  position: relative;
}

#register-background {
  background: #6554AF;
  width: 500px;
  height: 200px;
  border-radius: 50px;
  display: flex;
  margin: 0 auto;
  clear: both;
}

#register-form1 {
  background: gray;
  width: 170px;
  height: 88%;
  border-radius: 50px;
  float: left;
  top: 10px;
  left: 20px;
  position: relative;
}

#register-form2 {
  width: 280px;
  height: 88%;
  border-radius: 50px;
  float: right;
  top: 13px;
  left: 30px;
  position: relative;
}

#submit-button {
  font-family: normalfont;
  background: #E966A0;
  border: none;
  border-radius: 4px;
  color: white;
  text-align: center;
  font-size: 20px;
  margin-left: 4px;
  margin-bottom: 10px;
  top: 10px;
  position: relative;
}

</style>