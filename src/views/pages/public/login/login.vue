<template>
    <div class='login-wrap'>
        <div class='login-title'>로그인</div>
        <div class='login-body'>
            <div class='id'>
                <input type='text' placeholder='아이디를 입력해 주세요.'>
            </div>
            <div class='password'>
                <input type='password' placeholder='비밀번호를 입력해 주세요.'>
            </div>
            <div class='button-wrap'>
                <button type='button' class='btn'>로그인</button>
                <button type='button' class='btn'>회원가입</button>
            </div>
        </div>
    </div>
</template>

<style lang='scss'>
    
</style>

<script lang='ts'>
    import {Vue, Component} from 'vue-property-decorator';

    export default class Login extends Vue {

    }
</script>
