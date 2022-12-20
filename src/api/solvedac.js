import axios from "axios";

function solvedacAPI() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_SOLVEDAC_API,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return instance;
}

export { solvedacAPI };
