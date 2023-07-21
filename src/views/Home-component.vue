<template>
  <v-app>
    <v-app-bar app color="red" dark>
      <v-spacer></v-spacer>
      <v-app-bar-title>
        <div align="center" :style="{fontSize:'xx-large'} ">메인화면</div>
      </v-app-bar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" md="3"></v-col>
          <v-col cols="12" md="2" align="center">
            <v-btn color="light-green" @click="movetologin"
                   :style="{height:'50px', width:'170px', fontWeight:'bold', fontSize:'large'}">로그인</v-btn>
          </v-col>
          <v-col cols="12" md="2" align="center">
            <v-btn color="yellow" @click="movetoregister"
                   :style="{height:'50px', width:'170px', fontWeight:'bold', fontSize:'large'}">회원가입</v-btn>
          </v-col>
          <v-col cols="12" md="3"></v-col>
        </v-row>
      </v-container>

    </v-main>
  </v-app>
  <div>
    <input type="email" v-model="email" placeholder="검색할 사용자의 이메일을 입력하세요.">
    <button @click="search">검색하기</button>
  </div>
  <div>
    <ul>
      <li v-for="item in items" :key="item.email">
        이름: {{ item.name }} | 이메일: {{ item.email }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: '',
      items: []
    };
  },
  created() {
    // 컴포넌트가 생성될 때 데이터를 가져옵니다.
    this.fetchItems();
  },
  methods: {
    // 유저 검색 하기
    async search() {
      const payload = {
        email: this.email
      };
      try {
        await axios.post('http://localhost:9000/home', payload);

        this.fetchItems();
      } catch (error) {
        console.log(error);
      }
    },

    //GET 요청
    async fetchItems() {
      try {
        // GET 요청을 보냅니다.
        const response = await axios.get('http://localhost:9000/home');

        // 응답 데이터를 받아서 items에 저장합니다.
        this.items = response.data;
      } catch (error) {
        // 오류 처리
        console.error(error);
      }
    },
    // 페이지 이동시 params로 게시판 구분, query로 페이지 구분
    movetologin(){
      window.location.href='/login'
    },
    movetoregister(){
      window.location.href='/register'
    },
  },
};

</script>