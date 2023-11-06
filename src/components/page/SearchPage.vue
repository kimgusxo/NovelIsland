<template>
  <h1>
    소설 검색
  </h1>
  <span>
    여기에 원하는 소설을 적어주세요 인공지능이 알맞은 도서를 찾아줍니다!
  </span>
  <div>
    <TextAreaComponent />
  </div>
  <div v-if="resultNovels.length > 0">
    <SearchResultComponent :resultNovels="resultNovels"/>
  </div>
</template>

<script>
import SearchResultComponent from '../component/SearchResultComponent.vue';
import TextAreaComponent from '../component/TextAreaComponent.vue'; // PageCarousel 컴포넌트 import

import { mapState } from 'vuex';

export default {
  components: {
    TextAreaComponent,
    SearchResultComponent,
  },
  computed: {
    ...mapState(['resultNovels']),
  },

};
</script>
