<template>
  <div>
    <GenreCheckBoxComponent :sortingGenres="sortingGenres"/>
  </div>
  <div>
    <SearchComponent searchAction="searchNovelsInGenrePage" 
      setSearchQueryMutation="setGenreSearchQuery"/>
  </div>
  <div>
    <NovelListComponent :sortingNovels="sortingNovels"/>
  </div>
</template>
    
  <script>
  import SearchComponent from '../component/SearchComponent.vue'; // PageCarousel 컴포넌트 import
  import GenreCheckBoxComponent from '../component/GenreCheckBoxComponent.vue'; // PageCarousel 컴포넌트 import
  import NovelListComponent from '../component/NovelListComponent.vue'; // PageCarousel 컴포넌트 import
  import { mapState, mapActions } from 'vuex'; // Vuex를 가져옴
  
  export default {
    computed: {
      ...mapState(['sortingNovels', 'sortingGenres']), // Vuex 스토어의 novels 상태를 computed 속성으로 가져옴
    },
    methods: {
      ...mapActions(['fetchSortingNovels','fetchSortingGenres', 'searchNovelsInGenrePage']), // Vuex 스토어의 fetchNovels 액션을 methods로 가져옴
    },
    mounted() {
      // 페이지가 로드될 때 서버에서 소설 데이터 요청
      this.fetchSortingNovels();
      this.fetchSortingGenres();
    },
    components: {
        SearchComponent,
        GenreCheckBoxComponent,
        NovelListComponent,
    },
  };
  </script>
    
  <style>

  </style>