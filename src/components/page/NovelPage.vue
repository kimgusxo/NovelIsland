<template>
  <h1>
    소설
  </h1>
  <div>
    <SearchComponent />
  </div>
  <div>
    <NovelListComponent/>
  </div>
</template>

<script>
import SearchComponent from '../component/SearchComponent.vue'; // PageCarousel 컴포넌트 import
import NovelListComponent from '../component/NovelListComponent.vue'; // PageCarousel 컴포넌트 import

export default {
  components: {
    SearchComponent,
    NovelListComponent,
  },
};
</script>
