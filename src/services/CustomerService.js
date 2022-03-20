import axios from "axios";
import AuthService from "./AuthService";

const api_endpoint = process.env.VUE_APP_API_URL || "http://localhost:8000";

export default {
  async getPage(tableId) {
    let url = `${api_endpoint}/customer-page`;
    let header = {
      Origin: "http://localhost:8000",
    };
    let body = {
      tableId: tableId,
    };
    let res = await axios.post(url, body, header);
    return res.data;
  },
};
