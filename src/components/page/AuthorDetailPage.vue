<template>
    <div>
      <h2>작가: {{getAuthor.authorName}}</h2>
    </div>
    <div>
      <NovelListComponent :sortingNovels="sortingNovels"/>
    </div>
  </template>
      
    <script>
    import NovelListComponent from '../component/NovelListComponent.vue'; // PageCarousel 컴포넌트 import
    import { mapState, mapActions, mapGetters } from 'vuex'; // Vuex를 가져옴
    
    export default {
      computed: {
        ...mapGetters(['getAuthor']),
        ...mapState(['sortingNovels']), // Vuex 스토어의 novels 상태를 computed 속성으로 가져옴
      },
      methods: {
        ...mapActions(['searchNovelsByAuthorId']), // Vuex 스토어의 fetchNovels 액션을 methods로 가져옴
      },
      mounted() {
        // 페이지가 로드될 때 서버에서 소설 데이터 요청
        this.searchNovelsByAuthorId();
      },
      components: {
          NovelListComponent,
        },
    };
    </script>
      
    <style>
  
    </style>