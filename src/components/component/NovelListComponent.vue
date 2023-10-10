<template>
      <div class="grid-container">
        <div v-for="(novel, index) in novels" :key="index" class="grid-item">
          <div class="grid-item-content">
            <img :src="novel.imageUrl" alt="Novel Image" class="image" />
            <p class="title">{{ novel.title }}</p>
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
        // 필요한 만큼 소설 데이터를 추가합니다.
      ],
    };
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
    grid-template-columns: repeat(8, 1fr); /* 8x8 그리드 생성 */
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
  