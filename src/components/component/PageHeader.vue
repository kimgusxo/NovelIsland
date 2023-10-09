<template>
  <header class="header">
    <div class="main">
      <h1 @click="goToMainPage">
        <font-awesome-icon :icon="['fas', 'plane-departure']" />
        NovelIsland
      </h1>
    </div>
    <div class="nav-links">
      <div>
        <font-awesome-icon :icon="['fas', 'book']" />
        <span @click="goToNovelPage">소설</span>
      </div>
      <div>
        <font-awesome-icon :icon="['fas', 'user']" />
        <span @click="goToAuthorPage">작가</span>
      </div>
      <div>
        <font-awesome-icon :icon="['fas', 'layer-group']" />
        <span @click="goToGenrePage">장르</span>
      </div>
      <div>
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        <span @click="goToSearchPage">검색</span>
      </div>
    </div>
    <div class="auth-links">
      <div><span @click="goToSignInPage">로그인</span></div>
      <div><span @click="goToSignUpPage">회원가입</span></div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    goToMainPage() {
      this.$router.push('/');
    },
    goToNovelPage() {
      this.$router.push('/novel');
    },
    goToAuthorPage() {
      this.$router.push('/author');
    },
    goToGenrePage() {
      this.$router.push('/genre');
    },
    goToSearchPage() {
      this.$router.push('/search');
    },
    goToSignInPage() {
      this.$router.push('/signin');
    },
    goToSignUpPage() {
      this.$router.push('/signup');
    },
  },
};
</script>

<style>
.header {
  top: 0;
  left: 0;
  right: 0;
  height: 75px; /* 헤더의 높이 설정 */
  padding: 1rem;
  color: white;
  background: red;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 40px; /* 간격을 더 넓게 조절 */
}

.auth-links {
  display: flex;
  color: gray;
  height: 100%;
  margin: -16px;
  padding: 1rem;
  background: white; /* 배경을 흰색으로 변경 */
  align-items: center;
  
}

.auth-links div {
  padding: 5px 10px; /* 각 링크의 내부 여백을 추가하여 더 시각적으로 구분 */
}

.main h1,
.nav-links span,
.auth-links span {
  cursor: pointer;
}
</style>
