<template>
    <h1>북마크 목록</h1>
    <div>
        <NovelListComponent :sortingNovels="bookMarkNovels"/>
    </div>
</template>

<script>
import NovelListComponent from '../component/NovelListComponent.vue'; // PageCarousel 컴포넌트 import
import { mapState } from 'vuex'; // Vuex를 가져옴

export default {
    computed: {
      ...mapState(['bookMarkNovels', 'sortingNovels']), // Vuex 스토어의 novels 상태를 computed 속성으로 가져옴
    },
    mounted() {
        this.$store.commit('setSortingNovels', this.bookMarkNovels);
    },
    components: {
        NovelListComponent,
    },
}
</script>

<style>

</style>