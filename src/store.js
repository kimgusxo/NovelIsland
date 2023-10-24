import { createStore } from 'vuex';
import axios from 'axios'; // Axios를 import

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8081', // 이 부분에 API 서버의 주소와 포트를 설정하세요
});

export default createStore({
  state: {
    isLoggedIn: false,
    sortingNovels: [],
    randomNovels: [],
    rankingNovels: [],
    novelSearchQuery: '',
    authorSearchQuery: '',
    genreSearchQuery: '',
    genres: [],
  },
  mutations: {
    setLoggedInStatus(state, status) {
      state.isLoggedIn = status;
    },
    setNovelSearchQuery(state, novelSearchQuery) {
      state.novelSearchQuery = novelSearchQuery;
    },
    setGenreSearchQuery(state, genreSearchQuery) {
      state.genreSearchQuery = genreSearchQuery;
    },
    setAuthorSearchQuery(state, authorSearchQuery) {
      state.authorSearchQuery = authorSearchQuery;
    },
    setSortingNovels(state, sortingNovels) {
      state.sortingNovels = sortingNovels;
    },
    setRankingNovels(state, rankingNovels) {
      state.rankingNovels = rankingNovels;
    },
    setRandomNovels(state, randomNovels) {
      state.randomNovels = randomNovels;
    },
  },
  actions: {
    fetchSortingNovels(context) {
      axiosInstance.get('/novel/get/sorting')
        .then((response) => {
          context.commit('setSortingNovels', response.data.data);
        })
        .catch((error) => {
          console.error('데이터 요청 중 오류 발생:', error);
        });
    },
    searchNovelsInNovelPage(context) {
      axiosInstance.get('/novel/find/novelName', {
        params: {
          novelName: context.state.novelSearchQuery, // 검색어를 동적으로 설정하거나 사용자 입력 값을 사용하세요
          page: 0, // 페이지 번호
          size: 320 // 한 페이지에 표시할 항목 수
        }
      })
        .then((response) => {
          context.commit('setSortingNovels', response.data.data);
        })
        .catch((error) => {
          console.error('데이터 요청 중 오류 발생:', error);
        });
    },
    searchNovelsInGenrePage(context) {
      axiosInstance.get('/novel/find/novelName', {
        params: {
          novelName: context.state.novelSearchQuery, // 검색어를 동적으로 설정하거나 사용자 입력 값을 사용하세요
          page: 0, // 페이지 번호
          size: 320 // 한 페이지에 표시할 항목 수
        }
      })
        .then((response) => {
          context.commit('setSortingNovels', response.data.data);
        })
        .catch((error) => {
          console.error('데이터 요청 중 오류 발생:', error);
        });
    },
    fetchRankingNovels(context) {
      axiosInstance.get('/novel/get/ranking')
        .then((response) => {
          context.commit('setRankingNovels', response.data.data);
        })
        .catch((error) => {
          console.error('데이터 요청 중 오류 발생:', error);
        });
    },
    fetchRandomNovels(context) {
      axiosInstance.get('/novel/get/random')
        .then((response) => {
          context.commit('setRandomNovels', response.data.data);
        })
        .catch((error) => {
          console.error('데이터 요청 중 오류 발생:', error);
        });
    },
  }
});
