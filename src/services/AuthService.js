import axios from "axios";

const auth_key = "foodserve-auth";
let auth = JSON.parse(localStorage.getItem(auth_key));

const api_endpoint = process.env.VUE_APP_API_URL || "http://localhost:8000";

export default {
  getApiHeader() {
    let token = JSON.parse(localStorage.getItem(auth_key)).access_token;
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  },

  getUser() {
    if (auth == null){
      return null;
    }
    return auth.user;
  },

  gettoken() {
    return JSON.parse(localStorage.getItem(auth_key)).access_token;
  },

  async login({ username, password }) {
    let url = `${api_endpoint}/login`;
    let body = {
      username: username,
      password: password,
    };
    let res = await axios.post(url, body);
    localStorage.setItem(auth_key, JSON.stringify(res.data));
    return res.data;
  },

  logout() {
    localStorage.removeItem(auth_key);
  },

  async register({username, password, firstName, lastName, idNumber, telephoneNumber, email}){
    let url = `${api_endpoint}/create-user`;
    let body = {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      idNumber: idNumber,
      telephoneNumber: telephoneNumber,
      email: email,
    };
    let res = await axios.post(url, body);
    localStorage.setItem(auth_key, JSON.stringify(res.data));
    return res;
  },
};
