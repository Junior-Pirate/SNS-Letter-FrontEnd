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
        <span v-if="!nameFilled" style="color: red;">이름이 비어있습니다!</span>

        <input type="email" v-model="email" placeholder="이메일을 입력해주세요.">
        <span v-if="!emailFilled" style="color: red;">이메일이 비어있습니다!</span>

        <input type="password" v-model="pw" placeholder="비밀번호를 입력해주세요.">
        <span v-if="!pwFilled" style="color: red;">비밀번호가 비어있습니다!</span>

        <input type="password" v-model="again_pw" placeholder="비밀번호 확인">
        <span v-if="!checkpwFilled" style="color: red;">비밀번호가 일치하지 않습니다!</span>

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
      nameFilled: true,
      email: '',
      emailFilled: true,
      pw: '',
      pwFilled: true,
      again_pw: '',
      checkpwFilled: true,
      items: [], // 빈 배열로 초기화하여 받은 아이템을 저장합니다.
    };
  },
  created() {
    // 컴포넌트가 생성될 때 데이터를 가져옵니다.
    this.fetchItems();
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
      // 입력란이 채워져있는지 확인.
      if (this.name.trim() === '') {
        this.nameFilled = false;
      } else {
        this.nameFilled = true;
        console.log('Name:', this.name);
      }
      if (this.email.trim() === '') {
        this.emailFilled = false;
      } else {
        this.emailFilled = true;
        console.log('Email:', this.email);
      }
      if (this.pw.trim() === '') {
        this.pwFilled = false;
      } else {
        this.pwFilled = true;
      }
      // 비빈어링 비번확인이랑 다른거 체크
      if (this.pw !== this.again_pw) {
        this.checkpwFilled = false;
      } else {
        this.checkpwFilled = true;
      }


      try {
        // POST 요청을 보냅니다.
        await axios.post('http://localhost:9000/register', payload);

        // 응답 데이터를 처리합니다.
        this.fetchItems();
      } catch (error) {
        // 오류 처리
        console.error(error);
      }
    },
    //GET 요청
    async fetchItems() {
      try {
        // GET 요청을 보냅니다.
        const response = await axios.get('http://localhost:9000/register');

        // 응답 데이터를 받아서 items에 저장합니다.
        this.items = response.data;
      } catch (error) {
        // 오류 처리
        console.error(error);
      }
    },
    movetologin() {
      window.location.href = '/login'
    },
    movetohome() {
      window.location.href = '/home'
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