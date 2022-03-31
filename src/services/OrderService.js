import axios from "axios";
import AuthService from "./AuthService";

const api_endpoint = process.env.VUE_APP_API_URL || "http://localhost:8000";

export default {
  async getOrders(dateFilter, statusFilter) {
    let url = `${api_endpoint}/get-orders`;
    let header = AuthService.getApiHeader();
    let body = {
      dateFilter: dateFilter,
      statusFilter: statusFilter,
    };
    let res = await axios.post(url, body, header);
    return res.data.orders;
  },

  async editStatusOrder({ orderId, status }) {
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

  async getBills(dateFilter, statusFilter) {
    let url = `${api_endpoint}/get-bills`;
    let header = AuthService.getApiHeader();
    let body = {
      dateFilter: dateFilter,
      statusFilter: statusFilter,
    };
    let res = await axios.post(url, body, header);
    return res.data.bills;
  },

  async updateStatusBill({ billId, status }) {
    let url = `${api_endpoint}/update-bill`;
    let header = AuthService.getApiHeader();
    let body = {
      billId: billId,
      status: status,
    };
    let res = await axios.post(url, body, header);
    return res.data.bill;
  },

  async createOrder({ tableId, menu }, type, price) {
    let url = `${api_endpoint}/create-order`;
    let body = {
      tableId: tableId,
      menus: menu,
      type: type,
      price: price,
    };
    let res = await axios.post(url, body);
    return res.data.order;
  },

  async myOrder(tableId) {
    let url = `${api_endpoint}/my-order`;
    let body = {
      tableId: tableId,
    };
    let res = await axios.post(url, body);
    return res.data.orders;
  },

  async createBill(orderId, tableId) {
    let url = `${api_endpoint}/create-bill`;
    let body = {
      orderId: orderId,
      tableId: tableId,
    };
    let res = await axios.post(url, body);
    return res.data.bill;
  },

  async updateBill(billId, status) {
    let url = `${api_endpoint}/update-bill`;
    let body = {
      billId: billId,
      status: status,
    };
    let res = await axios.post(url, body);
    return res;
  },

  async cancelOrder(order) {
    let url = `${api_endpoint}/cancel-order`;
    let body = {
      orderId: order.id,
    };
    let res = await axios.post(url, body);
    return res.data;
  },

  async uploadSlip(billId, slip) {
    let url = `${api_endpoint}/upload-slip`;
    let body = {
      billId: billId,
      slip: slip,
    };
    let res = await axios.post(url, body);
    return res;
  },
};
