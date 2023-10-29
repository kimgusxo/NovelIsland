<template>
    <h1>{{ getNovel.novelName }}</h1>
    <div class="novel-info">
        <div class="novel-info-content">
            <img :src="getNovel.novelThumbnail" class="result-image" />
        </div>
        <div class="novel-details">
            <h2>작가이름: {{author.authorName}}</h2>
            <h2>장르: {{tag.tagClassification}}</h2>
            <h2>소설설명: {{getNovel.novelExplanation}}</h2>
        </div>
    </div>
    <p class="result-link">
        바로가기
    </p>
</template>
      
<script>
import { mapGetters, mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getNovel']),
    ...mapState(['tag', 'author', 'tagId', 'authorId'])
  },
  methods: {
      ...mapActions(['searchAuthor', 'searchTag']),
    },
  mounted() {
    this.$store.commit('setAuthorId', this.getNovel.authorId);
    this.$store.commit('setTagId', this.getNovel.tagId);
    this.searchAuthor(this.authorId);
    this.searchTag(this.tagId);
  }
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