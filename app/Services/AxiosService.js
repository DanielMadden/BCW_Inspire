// @ts-ignore
export const api = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/",
  timeout: 3000
});

export const apiSmush = axios.create({
  baseURL: "http://api.resmush.it/"
})