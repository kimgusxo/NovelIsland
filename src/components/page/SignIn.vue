<template>
    <div class="login-wrapper">
        <h2>로그인</h2>
        <form @submit.prevent="handleLogin" id="login-form">
            <h3 style="text-align: left">아이디</h3>
            <input type="text" v-model="userId" placeholder="Id">
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
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            userId: '',
            userPassword: '',
        }
    },
    methods: {
        ...mapActions(['setUserId', 'setUserPassword', 'login']),
        handleLogin() {
            this.$store.commit('setUserId', this.userId);
            this.$store.commit('setUserPassword', this.userPassword);
            this.$store.dispatch('login');
        },
    }
};
</script>

<style scoped>

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
    font-family: 'bmjua';

    color: gray;
}
#login-form > input[type="submit"]{
    font-family: 'bmjua';

    color: white;
    font-size: 16px;
    background-color: red;
    margin-top: 20px;
}

</style>