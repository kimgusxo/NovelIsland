<template>
  <div class="sort">
    <select v-model="selectedItem" class="custom-select">
      <option value="option1">오름차순</option>
      <option value="option2">내림차순</option>
    </select>
  </div>
      
  <div class="grid-container">
    <div v-for="(author, index) in paginatedAuthors" :key="index" class="grid-item">
      <div class="grid-item-content">
        <img :src="require('@/assets/authorProfile.webp')" class="image" />
        <p class="title" @click="goToAuthorDetailPage(author)">{{ author.authorName }}</p>
      </div>
    </div>
  </div>


  <div class="pagination">
      <div class="page-bar">
        <button @click="prevTotalPage" :disabled="this.authorPageNum === 0 || this.isSearch">
          <font-awesome-icon :icon="['fas', 'angles-left']" />
        </button>
        <button @click="prevPage" :disabled="currentPage === 1">
          <font-awesome-icon :icon="['fas', 'angle-left']" />
        </button>
        <div class="page" v-for="page in totalPages" :key="page">
          <button @click="goToPage(page)" :class="{ active: currentPage === page }">{{ page + this.authorPageNum }}</button>
        </div>
        <button @click="nextPage" :disabled="currentPage === totalPages">
          <font-awesome-icon :icon="['fas', 'angle-right']" />
        </button>
        <button @click="nextTotalPage" :disabled="this.isSearch">
          <font-awesome-icon :icon="['fas', 'angles-right']" />
        </button>
      </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      selectedItem: 'option1',
      currentPage: 1,
      itemsPerPage: 24, // 페이지당 아이템 수를 4개로 설정
    };
  },
  computed: {
    paginatedAuthors() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.sortingAuthors.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.sortingAuthors.length / this.itemsPerPage);
    },
    ...mapState(['sortingAuthors', 'authorPageNum', 'authorSizeNum', 'isSearch']),
  },
  methods: {
    ...mapActions(['fetchSortingAuthors']),
    prevTotalPage() {
      if (this.authorPageNum > 0) {
        this.$store.commit('setAuthorPageNum', this.authorPageNum - 1);
        this.fetchSortingAuthors();
      }
    },
    nextTotalPage() {
      this.$store.commit('setAuthorPageNum', this.authorPageNum + 1);
      this.fetchSortingAuthors();
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage += 1;
      }
    },
    goToPage(page) {
      this.currentPage = page;
    },
    goToAuthorDetailPage(author) {
      this.$store.commit('setAuthor', author);
      this.$router.push('/authordetail');
    },
  },
};
</script>
  
<style scoped>
  .sort {
    text-align: left;
    margin-bottom: 10px;
  }

  .custom-select {
    padding: 10px 20px; /* 위아래로 10px, 좌우로 20px의 패딩 추가 */
    font-size: 16px; /* 텍스트 크기 설정 */
    border: 1px solid #ccc; /* 테두리 추가 */
    border-radius: 5px; /* 모서리를 둥글게 만듭니다. */
    background-color: white; /* 배경색 설정 */
    color: red;
    width: 200px; /* 원하는 너비로 설정 */
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
  
  .image {
    max-width: 100%; /* 이미지를 그리드 아이템 내에 맞춥니다. */
  }
  
  .title {
    margin-top: 5px;
    cursor: pointer;
  }

.bookmarkIcon {
  position: absolute;
  font-size: 40px;
  color: #333;
  margin: 5px;
}

.bookmarked {
  color: red; /* 북마크된 아이콘의 다른 색상 */
}

.pagination {
  text-align: center;
  margin-top: 20px;
}

.pagination button {
  background-color: white;
  color: red;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 18px;
}

.pagination button:disabled {
  background-color: white;
  color: gray;
  cursor: not-allowed;
}

.page-bar {
  display: flex;
  align-items: center;
  justify-content: center;
}

.page {
  margin: 0 5px;
}

.page button {
  font-family: 'bmjua';
  
  background-color: transparent;
  color: #333;
  padding: 5px 10px;
  cursor: pointer;
}

.page button.active {
  font-family: 'bmjua';

  background-color: white;
  color: red;
}

.page-bar button {
  margin: 0 10px;
}
</style>
  