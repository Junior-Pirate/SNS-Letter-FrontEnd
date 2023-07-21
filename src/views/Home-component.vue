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
    }
  },
};
</script>