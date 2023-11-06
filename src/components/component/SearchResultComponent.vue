<template>
  <div class="grid-container">
    <div v-for="(novel, index) in resultNovels" :key="index" class="grid-item">
      <div class="grid-item-content">
        <img :src="novel.novelThumbnail" alt="Novel Image" class="image" />
        <p class="title" @click="goToResultPage(novel)" >{{ novel.novelName }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState(['resultNovels']),
    },
    methods: {
        goToResultPage(novel) {
            this.$store.commit('setNovel', novel);
            this.$router.push('/result');
        }
    }
}
</script>

<style>
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
</style>