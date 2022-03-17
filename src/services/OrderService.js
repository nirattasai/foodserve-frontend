import axios from "axios";
import AuthService from "./AuthService";

const api_endpoint = process.env.VUE_APP_API_URL || "http://localhost:8000";

export default {
  async getOrders() {
    let url = `${api_endpoint}/get-orders`;
    let header = AuthService.getApiHeader();
    let body = {};
    let res = await axios.post(url, body, header);
    return res.data.orders;
  },

  async editStatusOrder({orderId, status}) {
    let url = `${api_endpoint}/update-status-order`;
    let header = AuthService.getApiHeader();
    let body = {
      status: status,
      orderId: orderId,
    };
    let res = await axios.post(url, body, header);
    return res.data.order;
  },

  async getMenusInOrder(orderId) {
    let url = `${api_endpoint}/order-menus`;
    let header = AuthService.getApiHeader();
    let body = {
      orderId: orderId,
    };
    let res = await axios.post(url, body, header);
    return res.data.menus;
  },
};
