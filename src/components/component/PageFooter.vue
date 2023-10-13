<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; 2023 Your Company Name. All Rights Reserved.</p>
    </div>
    <div class="footer-link">
      <div class="footer-link-item" @click="navigateToNaver">
        <font-awesome-icon :icon="['fas', 'n']" class="footer-icon" />
        <p>네이버</p>
      </div>
      <div class="footer-link-item" @click="navigateToKakao">
        <font-awesome-icon :icon="['fas', 'k']" class="footer-icon" />
        <p>카카오</p>
      </div>
      <div class="footer-link-item" @click="navigateToNovelPia">
        <font-awesome-icon :icon="['fas', 'feather-pointed']" class="footer-icon" />
        <p>노벨피아</p>
      </div>
      <div class="footer-link-item" @click="navigateToMunPia">
        <font-awesome-icon :icon="['fas', 'm']" class="footer-icon" />
        <p>문피아</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    navigateToNaver() {
      window.open('https://novel.naver.com', 'naver');
    },
    navigateToKakao() {
      window.open('https://page.kakao.com', 'kakao');
    },
    navigateToNovelPia() {
      window.open('https://novelpia.com', 'novelpia');
    },
    navigateToMunPia() {
      window.open('https://www.munpia.com', 'munpia');
    },
  }
}
</script>


<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px 0;
  height: 150px;
  margin-top: 5px;
}

.container {
  max-width: 100%;
  margin: 0 auto;
}

.footer-link {
  display: flex; /* Flexbox를 사용하여 수평 정렬 */
  justify-content: center; /* 가운데 정렬 */
}

.footer-link-item {
  margin: 10px; /* 아이콘 간격 조정 */
  text-align: center;
  cursor: pointer;
}
</style>
