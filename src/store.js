import { createStore } from 'vuex';
import axios from 'axios'; // Axios를 import
import router from './router';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8081', // 이 부분에 API 서버의 주소와 포트를 설정하세요
});

export default createStore({
  state: {
    userId: '',
    userPassword: '',
    user: {},
    isLoggedIn: false,
    duplicateToken: true,
    novel: {},
    author: {},
    sortingNovels: [],
    randomNovels: [],
    rankingNovels: [],
    sortingAuthors: [],
    sortingGenres: [],
    selectedGenres: [],
    novelSearchQuery: '',
    authorSearchQuery: '',
    genreSearchQuery: '',
  },
  getters: {
    // 다른 게터들...
    getNovel(state) {
      return state.novel;
    },
    getAuthor(state) {
      return state.author;
    }
  },
  mutations: {
    setUserId(state, userId) {
      state.userId = userId;
    },
    setUserPassword(state, userPassword) {
      state.userPassword = userPassword;
    },
    setUser(state, user) {
      state.user = user;
    },
    setLoggedInStatus(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    },
    setDuplicateToken(state, duplicateToken) {
      state.duplicateToken = duplicateToken;
    },
    setNovel(state, novel) {
      state.novel = novel;
    },
    setAuthor(state, author) {
      state.author = author;
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
    setSortingAuthors(state, sortingAuthors) {
      state.sortingAuthors = sortingAuthors;
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
    login(context) {
      axiosInstance.post('/login/signIn', { 
          userId: context.state.userId, // 검색어를 동적으로 설정하거나 사용자 입력 값을 사용하세요
          userPassword: context.state.userPassword
      })
        .then((response) => {
          context.commit('setUser', response.data.data);
          context.commit('setLoggedInStatus', true); // 로그인 상태를 true로 설정
          router.push('/'); // 리다이렉트
        })
        .catch((error) => {
            alert(error.response.data.message);
        });
    },
    duplicateCheck(context) {
      axiosInstance.get('login/duplicateCheck', {
        params: {
          userId: context.state.userId,
        }
      })
      .then((response) => {
        context.commit('setDuplicateToken', response.data.data);
        if(!this.state.duplicateToken) {
          alert("아이디가 사용가능합니다.");
        } else {
          alert("아이디가 이미 존재합니다.");
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
    },
    signUp(context) {
      axiosInstance.post('/login/signUp', { 
          userId: context.state.userId, // 검색어를 동적으로 설정하거나 사용자 입력 값을 사용하세요
          userPassword: context.state.userPassword
      })
        .then((response) => {
          context.commit('setUser', response.data.data);
          context.commit('setLoggedInStatus', true); // 로그인 상태를 true로 설정
          router.push('/'); // 리다이렉트
        })
        .catch((error) => {
            alert(error.response.data.message);
        });
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
    searchNovelsByAuthorId(context) {
      axiosInstance.get('/novel/find/authorId', {
        params: {
          authorId: context.state.author.authorId, // 검색어를 동적으로 설정하거나 사용자 입력 값을 사용하세요
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
    fetchSortingAuthors(context) {
      axiosInstance.get('/author/get/sorting')
        .then((response) => {
          context.commit('setSortingAuthors', response.data.data);
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    },
    searchAuthorsInAuthorPage(context) {
      axiosInstance.get('/author/find/authorName', {
        params: {
          authorName: context.state.authorSearchQuery, // 검색어를 동적으로 설정하거나 사용자 입력 값을 사용하세요
          page: 0, // 페이지 번호
          size: 320 // 한 페이지에 표시할 항목 수
        }
      })
        .then((response) => {
          context.commit('setSortingAuthors', response.data.data);
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
