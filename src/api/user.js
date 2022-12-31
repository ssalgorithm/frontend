import {baseAPI} from "@/api/index";

const http = baseAPI();

async function login(loginInfo, success, fail){
    await http.post(`user/login`, JSON.stringify(loginInfo)).then(success).catch(fail);
}

export {login};