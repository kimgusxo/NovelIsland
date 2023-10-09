<template>
    <div>
      <PageCarousel /> <!-- PageCarousel 컴포넌트를 직접 사용 -->
      <NovelPage /> <!-- AnotherComponent 컴포넌트를 직접 사용 -->
    </div>
  </template>
  
  <script>
  import PageCarousel from '../component/PageCarousel.vue'; // PageCarousel 컴포넌트 import
  import NovelPage from './NovelPage.vue'; // AnotherComponent 컴포넌트 import
  
  export default {
    components: {
      PageCarousel, // PageCarousel 컴포넌트 등록
      NovelPage, // AnotherComponent 컴포넌트 등록
    },
  };
  </script>
  