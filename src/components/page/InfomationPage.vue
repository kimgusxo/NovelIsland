<template>
    <div class="infomation-wrapper">
        <h2>정보 수정</h2>
        <form @submit.prevent="handleUpdateUser" id="infomation-form">
            <h3 style="text-align: left">아이디</h3>
            <input type="text" v-model="userId" placeholder="Id" :disabled="isInputDisabled">
            
            <h3 style="text-align: left">비밀번호</h3>
            <input type="password" v-model="userPassword" placeholder="Password">
            
            <h3 style="text-align: left">비밀번호 확인</h3>
            <input type="password" v-model="userPasswordConfirmation" placeholder="PasswordCheck">

            <div v-if="passwordMatch" style="color: green;">비밀번호가 일치합니다.</div>
            <div v-else style="color: red;">비밀번호가 일치하지 않습니다.</div>

            <input type="submit" value="수정 완료">
        </form>
    </div>
</template>

<script>
import { mapActions, mapState  } from 'vuex';

export default {
    data() {
      return {
        userId: '',
        userPassword: '',
        userPasswordConfirmation: '',
        isInputDisabled: true,
      }
    },

    computed: {
      ...mapState(['user']),
      // 비밀번호와 비밀번호 확인이 일치하는지 확인하는 computed 속성
      passwordMatch() {
          return this.userPassword === this.userPasswordConfirmation;
      }
    },

    methods: {
      ...mapActions(['setUserId', 'setUserPassword', 'updateUser']),

      handleUpdateUser() {
        if (this.passwordMatch) { // 수정된 부분
          this.$store.commit('setUserIndex', this.user.userIndex);
          this.$store.commit('setUserId', this.userId);
          this.$store.commit('setUserPassword', this.userPassword);
          this.$store.dispatch('updateUser');
        } else {
          alert('비밀번호가 일치하지 않습니다.');
        }
      }
  },
  mounted() {
    this.userId = this.user.userId;
    this.userPassword = this.user.userPassword;
    this.userPasswordConfirmation = this.user.userPassword;
  },
}
</script>

<style scoped>

.infomation-wrapper {
    width: 500px; /* 원하는 너비 설정 */
    height: 100%;
    margin: 0 auto; /* 가운데 정렬 */
    padding: 20px; /* 내부 여백 추가 */
}

.infomation-wrapper > h2{
    font-size: 42px;
    color: red;
    margin-bottom: 20px;
}

#infomation-form > input{
    width: 100%;
    height: 48px;
    padding: 0 10px;
    box-sizing: border-box;
    margin-bottom: 16px;
    border-radius: 6px;
    background-color: white;
}
#infomation-form > input::placeholder{
    color: gray;
}
#infomation-form > input[type="submit"]{
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
  flex: 1; /* 남은 공간을 모두 차지하도록 설정 */
  height: 48px;
  font-size: 16px;
  border-radius: 6px;
  padding: 0 10px;
  box-sizing: border-box;
}
.input-wrapper > button {
  height: 48px;
  font-size: 16px;
  background-color: red;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  margin-left: 10px; /* 버튼과 입력 필드 사이의 간격 설정 */
}

</style>