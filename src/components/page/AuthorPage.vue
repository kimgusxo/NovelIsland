<template>
  <div>
    <h1>작가</h1>
  </div>
  <div>
    <SearchComponent searchAction="searchAuthorsInAuthorPage" 
     setSearchQueryMutation="setAuthorSearchQuery"/>
  </div>
  <div>
    <AuthorListComponent :sortingAuthors="sortingAuthors"/>
  </div>
</template>
    
  <script>
  import SearchComponent from '../component/SearchComponent.vue'; // PageCarousel 컴포넌트 import
  import AuthorListComponent from '../component/AuthorListComponent.vue'; // PageCarousel 컴포넌트 import
  import { mapState, mapActions } from 'vuex'; // Vuex를 가져옴
  
  export default {
    computed: {
      ...mapState(['sortingAuthors']), // Vuex 스토어의 novels 상태를 computed 속성으로 가져옴
    },
    methods: {
      ...mapActions(['fetchSortingAuthors']), // Vuex 스토어의 fetchNovels 액션을 methods로 가져옴
    },
    mounted() {
      // 페이지가 로드될 때 서버에서 소설 데이터 요청
      this.fetchSortingAuthors();
    },
    components: {
        SearchComponent,
        AuthorListComponent,
      },
  };
  </script>
    
  <style>

  </style>