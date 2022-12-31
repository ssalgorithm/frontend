import {login} from "@/api/user";
// import jwtDecode from "jwt-decode";


const userStore = {
    namespaced : true,
    state:{
        isLogin : false,    // 로그인 유무
    },
    mutations:{
        SET_IS_LOGIN : (state, isLogin) =>{
            state.isLogin = isLogin;
        }
    },
    actions :{
        async userConfirm({commit}, user){
            await login(
                user,
                async ({data})=>{
                    console.log(data);
                    console.log(commit);

                    //storeage 에 저장
                    if(data.message === "success"){
                        sessionStorage.setItem("access-token", data['access-token']);
                        sessionStorage.setItem("refresh-token", data['refresh-token']);
                        
                        // state - isLogin - true 변경
                        await commit("SET_IS_LOGIN", true);
                    
                    }else{  // 아이디 or 비밀번호 오류
                        
                    }
                },
                (error)=>{
                    console.log(error);
                    //아이디 없음 (회원이 없음)
                }
            )
        }
    },
}

export default userStore;