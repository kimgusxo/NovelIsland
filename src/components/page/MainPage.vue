<template>
    <div>
      <PageCarousel :randomNovels="randomNovels" /> <!-- PageCarousel 컴포넌트를 직접 사용 -->
      <RankingComponent :rankingNovels="rankingNovels" /> <!-- AnotherComponent 컴포넌트를 직접 사용 -->
    </div>
  </template>
  
  <script>
  import PageCarousel from '../component/PageCarousel.vue'; // PageCarousel 컴포넌트 import
  import RankingComponent from '../component/RankingComponent.vue';
  import { mapState, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapState(['randomNovels', 'rankingNovels']), // Vuex 스토어의 novels 상태를 computed 속성으로 가져옴
    },
    methods: {
      ...mapActions(['fetchRandomNovels', 'fetchRankingNovels']), // Vuex 스토어의 fetchNovels 액션을 methods로 가져옴
    },
    mounted() {
      // 페이지가 로드될 때 서버에서 소설 데이터 요청
      this.fetchRandomNovels();
      this.fetchRankingNovels();
    },
    components: {
      PageCarousel,
      RankingComponent,
    },
  };
  </script>

  <style>
</style>
  