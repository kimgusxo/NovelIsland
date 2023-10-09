<template>
  <div>
    <CheckBoxComponent/>
  </div>
  <div>
    <SearchComponent/>
  </div>
  </template>
    
  <script>
  import SearchComponent from '../component/SearchComponent.vue'; // PageCarousel 컴포넌트 import
  import CheckBoxComponent from '../component/CheckBoxComponent.vue'; // PageCarousel 컴포넌트 import


  export default {
      components: {
        SearchComponent,
        CheckBoxComponent,
      },
  };
  </script>
    
  <style>

  </style>