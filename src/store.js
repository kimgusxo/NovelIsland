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
    sortingGenres: [],
    selectedGenres: [],
    novelSearchQuery: '',
    authorSearchQuery: '',
    genreSearchQuery: '',
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
    setSortingGenres(state, sortingGenres) {
      state.sortingGenres = sortingGenres;
    },
    setSelectedGenres(state, selectedGenres) {
      state.selectedGenres = selectedGenres;
    },
  },
  actions: {
    updateSelectedGenres(context, selectedGenres) {
      context.commit('setSelectedGenres', selectedGenres);
    },

    fetchSortingNovels(context) {
      axiosInstance.get('/novel/get/sorting')
        .then((response) => {
          context.commit('setSortingNovels', response.data.data);
        })
        .catch((error) => {
          alert(error.response.data.message);
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
          alert(error.response.data.message);
        });
    },
    searchNovelsInGenrePage(context) {
      const selectedGenreIds = context.state.selectedGenres;
      
      if (selectedGenreIds.length === 0) {
        // selectedGenreIds가 비어있을 때 경고 메시지를 표시하고 함수를 종료
        alert('선택한 장르가 없습니다. 검색을 진행할 수 없습니다.');
        return;
      }
      
      axiosInstance.get('/novel/find/novelName/and/tagId', {
        params: {
          novelName: context.state.genreSearchQuery,
          tagIdList: selectedGenreIds.join(','),
          page: 0, // 페이지 번호
          size: 320 // 한 페이지에 표시할 항목 수
        }
      })
        .then((response) => {
          context.commit('setSortingNovels', response.data.data);
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
    fetchRankingNovels(context) {
      axiosInstance.get('/novel/get/ranking')
        .then((response) => {
          context.commit('setRankingNovels', response.data.data);
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
    fetchRandomNovels(context) {
      axiosInstance.get('/novel/get/random')
        .then((response) => {
          context.commit('setRandomNovels', response.data.data);
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
    fetchSortingGenres(context) {
      axiosInstance.get('/tag/get/sorting')
        .then((response) => {
          context.commit('setSortingGenres', response.data.data);
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
  }
});
