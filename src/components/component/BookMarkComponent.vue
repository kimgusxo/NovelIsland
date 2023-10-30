<template>
  <div class="grid-container">
    <div v-for="(novel, index) in bookMarkNovels" :key="index" class="grid-item">
      <div class="grid-item-content">
        <img :src="novel.novelThumbnail" alt="Novel Image" class="image" />
        <p class="title">{{ novel.novelName }}</p>
      </div>
    </div>
    <div class="grid-item grid-more">
      <p class="more-text" @click="goToBookMarkPage">더보기</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['bookMarkList', 'bookMarkNovels']),
  },
  methods: {
    goToBookMarkPage() {
      this.$router.push('/bookmark');
    },
  },
};
</script>
  
<style scoped>
  .ranking {
    text-align: left;
    margin: 30px;
  }
  
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 8x8 그리드 생성 */
    gap: 10px; /* 그리드 아이템 간의 간격 설정 */
  }
  
  .grid-item {
    border: 1px solid #ccc; /* 그리드 아이템에 테두리 추가 */
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .grid-item-content {
    text-align: center;
  }
  
  .image {
    max-width: 100%; /* 이미지를 그리드 아이템 내에 맞춥니다. */
  }
  
  .title {
    margin-top: 5px;
  }

/* "더보기" 텍스트 스타일 */
.grid-more {
  color: red; /* 글자색 설정 */
  text-align: center;
  font-weight: bold; /* 글꼴 굵기 설정 */
  cursor: pointer;
}

.more-text {
  margin: 0;
  padding: 10px;
}
</style>
  