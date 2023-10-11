<template>
  <div class="ranking">
    <h1>
      <font-awesome-icon style="color: red;" :icon="['fas', 'crown']" />
      랭킹순
    </h1>
    <div class="grid-container">
      <div v-for="(novel, index) in paginatedNovels" :key="index" class="grid-item">
        <div class="grid-item-content">
          <img :src="novel.imageUrl" alt="Novel Image" class="image" />
          <p class="title">{{ novel.title }}</p>
        </div>
      </div>
    </div>
    <div class="pagination">
      <div class="page-bar">
        <button @click="prevPage" :disabled="currentPage === 1">
          <font-awesome-icon :icon="['fas', 'angle-left']" />
        </button>
        <div class="page" v-for="page in totalPages" :key="page">
          <button @click="goToPage(page)" :class="{ active: currentPage === page }">{{ page }}</button>
        </div>
        <button @click="nextPage" :disabled="currentPage === totalPages">
          <font-awesome-icon :icon="['fas', 'angle-right']" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      novels: [
        { title: '소설 1', imageUrl: 'https://comicthumb-phinf.pstatic.net/20141010_110/pocket_1412915784499GktmY_JPEG/cloud.jpg?type=m600x314' },
        { title: '소설 2', imageUrl: 'https://comicthumb-phinf.pstatic.net/20160216_216/pocket_14556178273891qpTh_JPEG/h300.jpg?type=m600x314' },
        { title: '소설 3', imageUrl: 'https://comicthumb-phinf.pstatic.net/20230615_64/pocket_1686819221240B5JFh_JPEG/cover_.jpg?type=m600x314' },
        { title: '소설 4', imageUrl: 'https://comicthumb-phinf.pstatic.net/20150130_144/pocket_1422603514525Mxe6h_JPEG/%BC%F6%B6%F3%BF%D5_%BD%C5%B1%D4_%C7%A5%C1%F6_%C0%CE%C5%B8%C0%CC%C6%B2.JPG?type=m600x314' },
        { title: '소설 5', imageUrl: 'https://comicthumb-phinf.pstatic.net/20141010_110/pocket_1412915784499GktmY_JPEG/cloud.jpg?type=m600x314' },
        { title: '소설 6', imageUrl: 'https://comicthumb-phinf.pstatic.net/20160216_216/pocket_14556178273891qpTh_JPEG/h300.jpg?type=m600x314' },
        { title: '소설 7', imageUrl: 'https://comicthumb-phinf.pstatic.net/20230615_64/pocket_1686819221240B5JFh_JPEG/cover_.jpg?type=m600x314' },
        { title: '소설 8', imageUrl: 'https://comicthumb-phinf.pstatic.net/20150130_144/pocket_1422603514525Mxe6h_JPEG/%BC%F6%B6%F3%BF%D5_%BD%C5%B1%D4_%C7%A5%C1%F6_%C0%CE%C5%B8%C0%CC%C6%B2.JPG?type=m600x314' },
        { title: '소설 9', imageUrl: 'https://comicthumb-phinf.pstatic.net/20141010_110/pocket_1412915784499GktmY_JPEG/cloud.jpg?type=m600x314' },
        { title: '소설 10', imageUrl: 'https://comicthumb-phinf.pstatic.net/20160216_216/pocket_14556178273891qpTh_JPEG/h300.jpg?type=m600x314' },
        { title: '소설 11', imageUrl: 'https://comicthumb-phinf.pstatic.net/20230615_64/pocket_1686819221240B5JFh_JPEG/cover_.jpg?type=m600x314' },
        { title: '소설 12', imageUrl: 'https://comicthumb-phinf.pstatic.net/20150130_144/pocket_1422603514525Mxe6h_JPEG/%BC%F6%B6%F3%BF%D5_%BD%C5%B1%D4_%C7%A5%C1%F6_%C0%CE%C5%B8%C0%CC%C6%B2.JPG?type=m600x314' },
        // 필요한 만큼 소설 데이터를 추가합니다.
      ],
      currentPage: 1,
      itemsPerPage: 4, // 페이지당 아이템 수를 4개로 설정
    };
  },
  computed: {
    paginatedNovels() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.novels.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.novels.length / this.itemsPerPage);
    },
  },
  methods: {
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
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.grid-item {
  border: 1px solid #ccc;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.grid-item-content {
  text-align: center;
}

.image {
  max-width: 100%;
}

.title {
  margin-top: 5px;
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
  background-color: transparent;
  color: #333;
  padding: 5px 10px;
  cursor: pointer;
}

.page button.active {
  background-color: white;
  color: red;
}

.page-bar button {
  margin: 0 10px;
}
</style>
