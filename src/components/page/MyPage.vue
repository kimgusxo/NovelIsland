<template>
    <div>
        <h1>북마크 목록</h1>
    </div>
    
    <BookMarkComponent/>
    
    <div>
        <h2 @click="goToInfomationPage">정보수정</h2>    
    </div>

</template>

<script>
  import BookMarkComponent from '../component/BookMarkComponent.vue'; // PageCarousel 컴포넌트 import
  export default {
    components: {
        BookMarkComponent,
    },
    methods: {
        goToInfomationPage() {
            this.$router.push('/infomation');
        },
    },
  };
</script>

<style>

</style>