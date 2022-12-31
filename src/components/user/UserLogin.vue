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
            v-model="user.userId"
          ></v-text-field>
          <v-text-field
            label="password"
            placeholder="비밀번호 입력"
            filled
            rounded
            dense

            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'" 
            @click:append="show = !show"
            v-model="user.password"
          ></v-text-field>
        <v-btn
            rounded
            color="deep-purple lighten-3"
            dark
            width="100%" height="52px"
            @click="login()"
            >
            로그인
        </v-btn>
        <span>아직 회원이 아니신가요?? >> <a @click="join()">회원가입</a>
        </span>
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
import { mapActions, mapState } from 'vuex';
const userStore = "userStore";

export default {
  data(){
    return {
      show : false,
      user : {
        userId : "",
        password : "",
      }
    }
  },
  computed:{
    ...mapState(userStore, ["isLogin"]),
  },
  methods:{
    ...mapActions(userStore, ["userConfirm"]),
    join(){
      // 회원가입 창으로 이동
      this.$router.push("/join");
    },
    async login(){
      // 로그인 버튼 클릭 이벤트
      
      if(this.user.userId === ""){
        alert('아이디를 입력해주세요~');
        return false;
      }
      if(this.user.password === ""){
        alert('비밀번호를 입력해주세요~');
        return false;
      }

      //store - user - action(user)
      await this.userConfirm(this.user);

      let token = sessionStorage.getItem("access-token");
      console.log(token);
      
      //state의 isLogin 확인
      // 발급 받은 토큰을 통해 비동기로 데이터 요청
      if(this.isLogin){
        console.log("token 으로 userInfo");
      }
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
    .logo-title{
      /* 고고 Ssalgorithm */
      color: #843DFC;
      font-size: 30px;
      font-weight: bold;

    }
    .sign-in-line{
      position: relative;
      color: #dee2e6;
      height: 1px;
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