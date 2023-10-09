<template>
  <div class="carousel">
    <h1>
      <font-awesome-icon :icon="['fas', 'thumbs-up']" />
      오늘의 추천도서
    </h1>
    <div class="carousel-container">
      <button @click="prevSlide" class="carousel-button prev-button"><font-awesome-icon :icon="['fas', 'arrow-left']" /></button>
      <carousel :perPage="1" :loop="true" ref="carouselRef">
        <slide v-for="(image, index) in images" :key="index">
          <div class="slide-content">
            <img :src="image" alt="Carousel Image" class="carousel-image" />
            <h1>소설이름</h1>
          </div>
        </slide>
      </carousel>
      <button @click="nextSlide" class="carousel-button next-button"><font-awesome-icon :icon="['fas', 'arrow-right']" /></button>
    </div>
  </div>

  <div class="ranking">
    <h1>
      <font-awesome-icon :icon="['fas', 'crown']" />
      랭킹순
    </h1>
    <div>
      
    </div>
  </div>

</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      images: [
        'https://comicthumb-phinf.pstatic.net/20141010_110/pocket_1412915784499GktmY_JPEG/cloud.jpg?type=m600x314',
        'https://comicthumb-phinf.pstatic.net/20160216_216/pocket_14556178273891qpTh_JPEG/h300.jpg?type=m600x314',
        'https://comicthumb-phinf.pstatic.net/20230615_64/pocket_1686819221240B5JFh_JPEG/cover_.jpg?type=m600x314',
      ],
    };
  },
  methods: {
    prevSlide() {
      this.$refs.carouselRef.prev();
    },
    nextSlide() {
      this.$refs.carouselRef.next();
    },
  },
};
</script>

<style>

.carousel {
  margin-bottom: 20px;
}

.carousel-image {
  max-width: 100%;
  width: 300px; /* 이미지 최대 너비 설정 */
  height: auto; /* 높이 자동 조절 */
}

/* 버튼 스타일링 */
.carousel-button {
  background-color: white; /* 배경색상 */
  padding: 10px 20px; /* 내부 여백 */
  border: none; /* 테두리 없음 */
  border-radius: 4px; /* 둥근 모서리 */
  cursor: pointer; /* 포인터 커서 효과 */
}

.carousel-button.prev-button {
  margin-right: 50px; /* 이전 버튼과 간격 설정 */
}

.carousel-button.next-button {
  margin-left: 50px; /* 다음 버튼과 간격 설정 */
}

/* prev 아이콘 스타일링 */
.prev-button .svg-inline--fa {
  font-size: 80px; /* 아이콘 크기 조절 */
  color: olive; /* 아이콘 색상 조절 */
}

/* next 아이콘 스타일링 */
.next-button .svg-inline--fa {
  font-size: 80px; /* 아이콘 크기 조절 */
  color: olive; /* 아이콘 색상 조절 */
}

/* 슬라이드 내용 스타일링 */
.slide-content {
  text-align: center; /* 텍스트 중앙 정렬 */
}

.slide-content img {
  max-width: 100%; /* 이미지 최대 너비 설정 */
}

.slide-content h1 {
  margin-top: 10px; /* 소설 이름과 이미지 간격 설정 */
  font-weight: bold; /* 굵은 글꼴 */
}

/* 이미지와 버튼을 감싸는 컨테이너 스타일링 */
.carousel-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.ranking {
  text-align: left;
  margin: 30px;
}

</style>
