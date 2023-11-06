<template>
    <div>
      <h1>장르별</h1>
      <div class="grid-container">
        <div v-for="genre in sortingGenres" :key="genre.id" class="grid-item">
          <font-awesome-icon
          :icon="['fas', 'check']"
          :class="{ checked: genre.checked }"
          @click="toggleCheckbox(genre)"
          />
          {{ genre.tagClassification }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';

  export default {
    computed: {
      selectedItems() {
        return this.sortingGenres.filter(genre => genre.checked).map(genre => genre.tagClassification);
      },
      ...mapState(['sortingGenres']),
    },
    methods: {
      toggleCheckbox(genre) {
        genre.checked = !genre.checked;
        const selectedGenreIds = this.sortingGenres
          .filter((genre) => genre.checked)
          .map((genre) => genre.tagId);
        this.$store.dispatch('updateSelectedGenres', selectedGenreIds);
      },
    },
  };
  </script>
  
  <style scoped>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(6, 1fr); /* 4x4 그리드 생성 */
    gap: 10px; /* 그리드 아이템 간의 간격 설정 */
  }
  
  .grid-item {
    border: 1px solid #ccc; /* 그리드 아이템에 테두리 추가 */
    padding: 10px;
  }

  .grid-item .checked {
  color: red; /* 체크된 상태의 색상 (예: 녹색) */
  cursor: pointer;
}

  </style>
  