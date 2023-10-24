<template>
  <div class="carousel">
    <h1>
      <font-awesome-icon style="color: red;" :icon="['fas', 'thumbs-up']" />
      오늘의 추천도서
    </h1>
    <div class="carousel-container">
      <button @click="prevSlide" class="carousel-button prev-button"><font-awesome-icon :icon="['fas', 'arrow-left']" /></button>
      <carousel ref="carouselRef">
        <slide v-for="(novel, index) in randomNovels" :key="index">
          <div class="slide-content">
            <img :src="novel.novelThumbnail" class="carousel-image" />
            <h1 @click="goToResultPage">{{novel.novelName}}</h1>
          </div>
        </slide>
      </carousel>
      <button @click="nextSlide" class="carousel-button next-button"><font-awesome-icon :icon="['fas', 'arrow-right']" /></button>
    </div>

    <div class="carousel-indicators">
      <span
        v-for="(novel, index) in randomNovels"
        :key="index"
        class="indicator"
        :class="{ active: index === currentSlide }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import { mapState } from 'vuex';

export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      currentSlide: 0, // 현재 슬라이드 인덱스
    };
  },
  computed: {
    ...mapState(['randomNovels']),
  },
  methods: {
    prevSlide() {
      if (this.currentSlide > 0) {
        this.$refs.carouselRef.prev();
        this.currentSlide = this.currentSlide - 1;
      }
    },
    nextSlide() {
      if (this.currentSlide < this.randomNovels.length - 1) {
        this.$refs.carouselRef.next();
        this.currentSlide = this.currentSlide + 1;
      }
    },
    goToSlide(index) {
      this.$refs.carouselRef.slideTo(index)
      this.currentSlide = index;
    },
    goToResultPage() {
      this.$router.push('/result');
    }
  },
};
</script>

<style scoped>

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
  color: red; /* 아이콘 색상 조절 */
}

/* next 아이콘 스타일링 */
.next-button .svg-inline--fa {
  font-size: 80px; /* 아이콘 크기 조절 */
  color: red; /* 아이콘 색상 조절 */
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

/* 인디케이터 스타일링 */
.carousel-indicators {
  text-align: center;
  margin-top: 10px;
}

.indicator {
  display: inline-block;
  width: 12px;
  height: 12px;
  background-color: #888;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.indicator.active {
  background-color: red; /* 활성화된 슬라이드의 배경색 변경 */
}

</style>