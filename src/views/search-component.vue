<template>
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
    //GET 요청
    async search() {
      const payload = {
        email: this.email,
      };

      try {
        // POST
        await axios.get('http://localhost:9000/search', payload);
        this.fetchItems();
      } catch (error) {
        console.error(error);
      }
    },
    async fetchItems() {
      try {
        // GET 요청을 보냅니다.
        const response = await axios.get('http://localhost:9000/search');

        // 응답 데이터를 받아서 items에 저장합니다.
        this.items = response.data;
      } catch (error) {
        // 오류 처리
        console.error(error);
      }
    },
  },
};

</script>