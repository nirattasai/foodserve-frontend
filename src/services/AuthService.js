import axios from "axios";

const auth_key = "foodserve-auth";
let auth = JSON.parse(localStorage.getItem(auth_key));
const user = auth ? auth.user : "";
const token = auth ? auth.access_token : "";

const api_endpoint = process.env.VUE_APP_API_URL || "http://localhost:8000";

export default {
  getApiHeader() {
    if (this.token !== undefined && this.token !== "") {
      return {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };
    } else {
      this.token = JSON.parse(localStorage.getItem(auth_key)).token;
      return {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };
    }
  },

  getUser() {
    return user;
  },

  gettoken() {
    return token;
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
};
