<template>
    <div class="login-wrapper">
        <h2>로그인</h2>
        <form @submit.prevent="login" id="login-form">
            <h3 style="text-align: left">아이디</h3>
            <input type="text" v-model="userName" placeholder="Id">
            <h3 style="text-align: left">비밀번호</h3>
            <input type="password" v-model="userPassword" placeholder="Password">
            <label for="remember-check">
                <input type="checkbox" id="remember-check">아이디 저장하기
            </label>
            <input type="submit" value="로그인">
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userName: '',
            userPassword: '',
        };
    },
    methods: {
        login() {
            // 여기에서 실제 인증을 수행하거나 서버와 통신해야 합니다.
            if (this.userName === 'abc' && this.userPassword === '123') {
                // 인증 성공
                this.$store.commit('setLoggedInStatus', true);
                // 로그인 후 메인 페이지로 리다이렉션
                this.$router.push('/');
            } else {
                // 인증 실패 처리
                alert('아이디 또는 비밀번호가 일치하지 않습니다.');
            }
        },
    },
};
</script>

<style>

.login-wrapper {
    width: 500px; /* 원하는 너비 설정 */
    height: 100%;
    margin: 0 auto; /* 가운데 정렬 */
    padding: 20px; /* 내부 여백 추가 */
}

.login-wrapper > h2{
    font-size: 42px;
    color: red;
    margin-bottom: 20px;
}
#login-form > input{
    width: 100%;
    height: 48px;
    padding: 0 10px;
    box-sizing: border-box;
    margin-bottom: 16px;
    border-radius: 6px;
    background-color: white;
}
#login-form > input::placeholder{
    color: gray;
}
#login-form > input[type="submit"]{
    color: white;
    font-size: 16px;
    background-color: red;
    margin-top: 20px;
}

</style>