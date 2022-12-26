<template>
  <v-app>
    <div class="login-section">
        <p class="logo-title">Ssalgorithm</p>
        <v-text-field
            label="ID"
            placeholder="사용자 아이디 입력"
            filled
            rounded
            dense
          ></v-text-field>
          <v-text-field
            label="password"
            placeholder="비밀번호 입력"
            filled
            rounded
            dense
          ></v-text-field>
        <v-btn
            rounded
            color="deep-purple lighten-3"
            dark
            width="100%" height="52px"
            >
            로그인
        </v-btn>
        아직 회원이 아니신가요?? >> 회원가입
        <div class="divide-section">
          <hr class="sign-in-line">
          <span class="sign-in-text">
            간편 로그인
          </span>
        </div>
        <v-btn
            rounded
            color="deep-purple lighten-3"
            dark
            width="100%" height="52px"
            >
            네이버 로그인
        </v-btn>
        <v-btn
            rounded
            color="deep-purple lighten-3"
            dark
            width="100%" height="52px"
            >
            구글 로그인
        </v-btn>
    </div>
  </v-app>
</template>

<script>
export default {

}
</script>

<style scope>
    .login-section{
      /* 로그인 영역 */
        margin: 50px auto;
        text-align: center;
    }
    .logo-title{
      /* 고고 Ssalgorithm */
      color: #843DFC;
      font-size: 30px;
      font-weight: bold;

    }
    .sign-in-line{
      position: relative;
      color: #abb0b5;
      bottom: -13px;
    }
    .sign-in-text{
      position: relative;
      text-align: center;
      background-color: #fff;
      z-index: 11;

      padding: 0 8px;
    }
    .divide-section{
      text-align: center;
      margin: 20px 0px;
    }
    .v-btn{
      margin-top: 10px;
      margin-bottom: 10px;
    }
</style>