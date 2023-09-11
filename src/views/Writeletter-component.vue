<template>
  <html>
  <body>
  <h1 id="title">Snsletter</h1><br>
  <div id="div-right">
    <button id="button" @click="logout">로그아웃</button>
  </div>
  <h2 id="letterbox-owner">홍길동의 편지함</h2>
  <div id="letter">
    <div>
      <a id="letter-title-intro">제목 : </a>
      <input id="letter-title" type="text" v-model="title" placeholder="제목을 입력하세요">
    </div>
    <div>
      <a id="letter-nickname-intro">닉네임 : </a>
      <input id="letter-nickname" type="text" v-model="nickname" placeholder="닉네임을 입력하세요">
    </div>
    <div>
      <a id="letter-detail-intro">내용 : </a>
      <input id="letter-detail" type="textarea" style="word-wrap:break-word" v-model="detail" placeholder="내용을 입력하세요">
    </div>
  </div>
  <div>
    <button id="access_button" @click="createletter">편지 등록</button>
  </div>
  </body>
  </html>
</template>

<script>

import axios from "axios";

export default {
  data() {
    return {
      title: '',
      nickname: '',
      detail: '',
    };
  },
  methods: {
    //POST 요청
    async access() {
      // 요청 페이로드를 준비합니다.
      const payload = {
        title: this.title,
        nickname: this.nickname,
        detail: this.detail,
      };
      try {
        // POST 요청을 보냅니다.
        const response = await axios.post('http://localhost:9000/letter/letterCreate', payload)
        if (response.data.LetterCreate === false) {
          alert(response.data.message);
        } else {


          alert("편지 작성 성공!")

          this.$router.push('/exit');
        }

      } catch (error) {
        // 오류 처리
        console.error(error);
      }
    },
  },
};
</script>

<style>
#letterbox-owner {
  position: relative;
  font-family: normalfont;
  color: white;
  font-size: 40px;
  text-align: center;
  bottom: 70px;
  left: 40px;
}

#letter {
  background: #624F80;
  position: relative;
  width: 700px;
  height: 520px;
  border-radius: 50px;
  margin: 0 auto;
  clear: both;
  bottom: 60px;
}

#letter-title-intro {
  font-family: normalfont;
  color: white;
  text-align: center;
  position: relative;
  top: 10px;
}

#letter-title {
  background: white;
  position: relative;
  width: 400px;
  height: 30px;
  border-radius: 50px;
  top: 10px;
}

#letter-nickname-intro {
  font-family: normalfont;
  color: white;
  text-align: center;
  position: relative;
  top: 10px;
}

#letter-nickname {
  background: white;
  position: relative;
  width: 100px;
  height: 30px;
  border-radius: 50px;
  position: relative;
  top: 10px;
}

#letter-detail-intro {
  font-family: normalfont;
  color: white;
  text-align: center;
  position: relative;
  top: 10px;
}

#letter-detail {
  background: white;
  position: relative;
  width: 550px;
  height: 400px;
  border-radius: 50px;
  position: relative;
  top: 10px;
}

#access_button {
  font-family: normalfont;
  background: #E966A0;
  border: none;
  border-radius: 4px;
  color: white;
  text-align: center;
  font-size: 20px;
  margin-left: 4px;
  margin-bottom: 10px;
  bottom: 50px;
  position: relative;
}


</style>