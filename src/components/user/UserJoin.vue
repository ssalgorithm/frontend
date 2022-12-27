<template>
    <v-app>
    <div class="login-section">
        <p class="logo-title">회원가입</p>
        <p class="input-title">아이디</p>
        <v-text-field
            placeholder="사용자 아이디 입력"
            filled
            rounded
            dense
        ></v-text-field>
        <p class="input-title">비밀번호</p>
        <v-text-field
            placeholder="비밀번호 입력"
            filled
            rounded
            dense

            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'" 
            @click:append="show1 = !show1"
        ></v-text-field>
        <p class="input-title">비밀번호 확인</p>
        <v-text-field
            placeholder="비밀번호 확인"
            filled
            rounded
            dense

            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show2 ? 'text' : 'password'" 
            @click:append="show2 = !show2"
        ></v-text-field>
        <p class="input-title">이름</p>
        <v-text-field
            placeholder="이름"
            filled
            rounded
            dense
        ></v-text-field>
        <p class="input-title">이메일</p>
        <v-text-field
            placeholder="Ssalgorithm@example.com"
            filled
            rounded
            dense
        ></v-text-field>
        <v-btn
            rounded
            color="deep-purple lighten-3"
            dark
            width="100%" height="52px"
            max-width="300px"
            >
            회원가입
        </v-btn>
        <div class="divide-section">
            <hr class="sign-in-line">
            <span class="sign-in-text">
                간편 회원가입
            </span>
        </div>
        <v-btn
            rounded
            color="deep-purple lighten-3"
            dark
            width="100%" height="52px"
            max-width="300px"
            >
            네이버 계정 회원가입
        </v-btn>
        <v-btn
            rounded
            color="deep-purple lighten-3"
            dark
            width="100%" height="52px"
            max-width="300px"
            >
            구글 계정 회원가입
        </v-btn>
    </div>
    </v-app>
</template>

<script>
export default {
data(){
    return {
        show1 : false,
        show2 : false,
    }
}
}
</script>

<style scope>
    .login-section{
      /* 로그인 영역 */
        margin: 50px auto;
        text-align: center;
    }
    .input-title{
        text-align: left;
        font-weight: bold;
    }
</style>