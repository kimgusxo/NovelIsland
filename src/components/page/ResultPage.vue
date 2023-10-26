<template>
    <h1>{{ getNovel.novelName }}</h1>
    <div class="novel-info">
        <div class="novel-info-content">
            <img :src="getNovel.novelThumbnail" class="result-image" />
        </div>
        <div class="novel-details">
            <h2>작가이름: {{getNovel.authorId}}</h2>
            <h2>장르: {{getNovel.tagId}}</h2>
            <h2>소설설명: {{getNovel.novelExplanation}}</h2>
        </div>
    </div>
    <p class="result-link">
        바로가기
    </p>
</template>
      
<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getNovel']),
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