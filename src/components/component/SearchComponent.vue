<template>
    <div class="search">
      <input v-model="searchQuery" class="search-box" placeholder="검색어를 입력하세요">
      <button @click="search" class="search-button">검색</button>
      <h1 v-if="searchResult">검색 도서: {{ searchResult }}</h1>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        searchQuery: '',
        searchResult: '',
      };
    },
    methods: {
      search() {
        // 실제 검색 로직을 수행하고 결과를 searchResult에 저장합니다.
        // 여기서는 간단하게 검색어를 그대로 표시하는 예제를 제공합니다.
        this.searchResult = this.searchQuery;
      },
    },
  };
</script>
  
<style scoped>

.search {
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center; /* 텍스트를 가운데 정렬합니다. */
}

.search-box {
  padding: 10px; /* 입력 상자 주위에 패딩을 추가하여 크기를 늘립니다. */
  font-size: 18px; /* 입력 텍스트의 글꼴 크기를 조정합니다. */
  width: 80%; /* 입력 상자의 폭을 조정합니다. */
  max-width: 400px; /* 최대 폭을 설정하여 너무 커지지 않도록 합니다. */
  
}

.search-button {
  padding: 10px 20px; /* 버튼에 패딩을 추가하여 더 크게 만듭니다. */
  font-size: 18px; /* 버튼 텍스트의 글꼴 크기를 조정합니다. */
  border: none; /* 버튼의 테두리를 제거합니다. */
  cursor: pointer; /* 마우스를 올릴 때 커서를 포인터로 변경합니다. */
  margin-left: 5px;
  color: white;
  background: red;
}
</style>