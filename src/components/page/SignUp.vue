<template>
    <div class="signUp-wrapper">
        <h2>회원가입</h2>
        <form method="post" action="서버의url" id="signUp-form">
            <h3 style="text-align: left">아이디</h3>
            <div class = "input-wrapper">
                <input type="text" name="userName" placeholder="Id">
                <button @click="checkDuplicate">중복확인</button>
            </div>
            
            <h3 style="text-align: left">비밀번호</h3>
            <input type="password" name="userPassword" placeholder="Password" v-model="password">
            
            <h3 style="text-align: left">비밀번호 확인</h3>
            <input type="password" name="userPasswordCheck" placeholder="PasswordCheck" v-model="passwordConfirmation">
            
            <div v-if="passwordMatch" style="color: green;">비밀번호가 일치합니다.</div>
            <div v-else style="color: red;">비밀번호가 일치하지 않습니다.</div>

            <input type="submit" value="회원가입">
        </form>
    </div>
</template>

<script>
export default {
    data() {
    return {
      password: '',
      passwordConfirmation: ''
    }
    },

    computed: {
        // 비밀번호와 비밀번호 확인이 일치하는지 확인하는 computed 속성
        passwordMatch() {
            return this.password === this.passwordConfirmation;
        }
    },

    methods: {
    checkDuplicate() {
      // 중복확인 버튼을 클릭했을 때 수행할 작업을 여기에 추가합니다.
      // 서버 요청을 보내고 중복 여부를 확인하는 로직을 작성합니다.
      // 예를 들어, axios를 사용하여 서버와 통신할 수 있습니다.
      // 이 예제에서는 단순히 콘솔에 메시지를 출력하는 것으로 대체합니다.
      console.log('중복확인 버튼을 클릭했습니다.');
    }
  }
}
</script>

<style>

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
    color: gray;
}
#signUp-form > input[type="submit"]{
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