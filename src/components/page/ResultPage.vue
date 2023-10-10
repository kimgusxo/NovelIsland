<template>
    <h1>구르미 그린 달빛</h1>
    <div class="novel-info">
        <div class="novel-info-content">
            <img :src="images[0]" class="result-image" />
        </div>
        <div class="novel-details">
            <h2>작가이름: Adop</h2>
            <h2>장르: 로맨스</h2>
            <h2>연재처: 네이버</h2>
        </div>
    </div>
    <p class="result-link">
        바로가기
    </p>
</template>
      
<script>
export default {
    data() {
    return {
      images: [
        'https://comicthumb-phinf.pstatic.net/20141010_110/pocket_1412915784499GktmY_JPEG/cloud.jpg?type=m600x314',
      ],
    };
  },
}
</script>
      
<style>
.novel-info {
    display: flex;
    align-items: center;
}

.novel-info-content {
    flex: 1;
    padding-right: 20px; /* 이미지 오른쪽 여백 설정 */
}

.result-image {
    width: 400px;
}

.novel-details {
    flex: 1;
    text-align: left;
}
.result-link {
    margin-top: 10px; /* 바로가기 위쪽 여백 5px 설정 */
    margin-bottom: 10px; /* 바로가기 아래쪽 여백 5px 설정 */
}
</style>