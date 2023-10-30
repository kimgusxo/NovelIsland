<template>
    <div>
        <h1>북마크 목록</h1>
    </div>
    
    <BookMarkComponent :bookMarkNovels="bookMarkNovels"/>
    
    <div>
        <h2 @click="goToInfomationPage">정보수정</h2>    
    </div>

</template>

<script>
  import BookMarkComponent from '../component/BookMarkComponent.vue'; // PageCarousel 컴포넌트 import
  import { mapState, mapActions } from 'vuex';
  
  export default {
    components: {
        BookMarkComponent,
    },
    computed: {
        ...mapState(['bookMarkList', 'user']),
    },
    methods: {
        ...mapActions(['searchBookMark', 'searchNovelsByNovelIdList']),
        goToInfomationPage() {
            this.$router.push('/infomation');
        },
    },
    mounted() {
        // 페이지가 로드될 때 서버에서 소설 데이터 요청
        this.$store.commit('setUserIndex', this.user.userIndex);
        this.searchBookMark();
        this.$store.commit('setNovelIdList', this.bookMarkList.map(bookMark => bookMark.novelId));
        this.searchNovelsByNovelIdList();
    },
  };
</script>

<style>

</style>