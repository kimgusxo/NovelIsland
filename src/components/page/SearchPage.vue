<template>
  <h1>
    소설 검색
  </h1>
  <span>
    여기에 원하는 소설을 적어주세요 인공지능이 알맞은 도서를 찾아줍니다!
  </span>
  <div>
    <SearchComponent />
  </div>
</template>

<script>
import SearchComponent from '../component/SearchComponent.vue'; // PageCarousel 컴포넌트 import

export default {
  components: {
    SearchComponent,
  },
};
</script>
