import { createStore } from 'vuex';

export default createStore({
    state: {
      isLoggedIn: false, // 로그인 상태를 저장하는 변수
    },
    mutations: {
      // 로그인 상태를 변경하는 뮤테이션
      setLoggedInStatus(state, status) {
        state.isLoggedIn = status;
      },
    },
  });