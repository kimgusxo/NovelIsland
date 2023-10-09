<template>
    <div>
      <PageCarousel /> <!-- PageCarousel 컴포넌트를 직접 사용 -->
      <RankingComponent /> <!-- AnotherComponent 컴포넌트를 직접 사용 -->
    </div>
  </template>
  
  <script>
  import PageCarousel from '../component/PageCarousel.vue'; // PageCarousel 컴포넌트 import
  import RankingComponent from '../component/RankingComponent.vue';
  export default {
    components: {
      PageCarousel,
      RankingComponent,
    },
  };
  </script>
  