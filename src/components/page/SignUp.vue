<template>
    <div class="signUp-wrapper">
        <h2>회원가입</h2>
        <form @submit.prevent="handleSignUp" id="signUp-form">
            <h3 style="text-align: left">아이디</h3>
            <div class = "input-wrapper">
                <input type="text" v-model="userId" placeholder="Id">
                <button type="button" @click="handleDuplicateCheck">중복확인</button>
            </div>
            
            <h3 style="text-align: left">비밀번호</h3>
            <input type="password" v-model="userPassword" placeholder="Password">
            
            <h3 style="text-align: left">비밀번호 확인</h3>
            <input type="password" v-model="userPasswordConfirmation" placeholder="PasswordCheck">
            
            <div v-if="passwordMatch" style="color: green;">비밀번호가 일치합니다.</div>
            <div v-else style="color: red;">비밀번호가 일치하지 않습니다.</div>

            <input type="submit" value="회원가입">
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
      return {
        userId: '',
        userPassword: '',
        userPasswordConfirmation: ''
      }
    },

    computed: {
        // 비밀번호와 비밀번호 확인이 일치하는지 확인하는 computed 속성
        passwordMatch() {
            return this.userPassword === this.userPasswordConfirmation;
        }
    },

    methods: {
      ...mapActions(['setUserId', 'setUserPassword', 'duplicateCheck', 'signUp']),
       handleDuplicateCheck() {
         this.$store.commit('setUserId', this.userId);
         this.$store.dispatch('duplicateCheck');
      },
      handleSignUp() {
        if (!this.$store.state.duplicateToken && this.passwordMatch) { // 수정된 부분
          this.$store.commit('setUserId', this.userId);
          this.$store.commit('setUserPassword', this.userPassword);
          this.$store.dispatch('signUp');
        } else if (this.$store.state.duplicateToken) {
          alert('아이디 중복 확인을 해주세요.');
        } else {
          alert('비밀번호가 일치하지 않습니다.');
        }
      }
  }
}
</script>

<style scoped>

.signUp-wrapper {
    width: 500px; /* 원하는 너비 설정 */
    height: 100%;
    margin: 0 auto; /* 가운데 정렬 */
    padding: 20px; /* 내부 여백 추가 */
}

.signUp-wrapper > h2{
    font-size: 42px;
    color: red;
    margin-bottom: 20px;
}

#signUp-form > input{
    width: 100%;
    height: 48px;
    padding: 0 10px;
    box-sizing: border-box;
    margin-bottom: 16px;
    border-radius: 6px;
    background-color: white;
}
#signUp-form > input::placeholder{
  font-family: 'bmjua';  
  color: gray;
}
#signUp-form > input[type="submit"]{
    font-family: 'bmjua';

    color: white;
    font-size: 16px;
    background-color: red;
    margin-top: 20px;
}

/* 중복확인 버튼 스타일 추가 */
.input-wrapper {
  display: flex; /* Flexbox를 사용하여 입력 필드와 버튼을 가로로 정렬합니다. */
  align-items: center; /* 세로 중앙 정렬 */
  margin-bottom: 10px;
}
.input-wrapper > input {
  font-family: 'bmjua';

  flex: 1; /* 남은 공간을 모두 차지하도록 설정 */
  height: 48px;
  font-size: 16px;
  border-radius: 6px;
  padding: 0 10px;
  box-sizing: border-box;
}
.input-wrapper > button {
  font-family: 'bmjua';

  height: 48px;
  font-size: 16px;
  background-color: red;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  margin-left: 10px; /* 버튼과 입력 필드 사이의 간격 설정 */
}

</style>