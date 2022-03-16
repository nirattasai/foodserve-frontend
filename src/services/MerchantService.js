import axios from "axios";
import AuthService from "./AuthService";

const api_endpoint = process.env.VUE_APP_API_URL || "http://localhost:8000";

export default {
  async createMerchant({ name, table, address, image }) {
    let url = `${api_endpoint}/create-merchant`;
    let header = AuthService.getApiHeader();
    let body = {
      name: name,
      table: table,
      address: address,
      qrCode: image,
    };
    let res = await axios.post(url, body, header);
    return res;
  },

  async getmerchantWithUID() {
    let url = `${api_endpoint}/merchant-user`;
    let header = AuthService.getApiHeader();
    let body = {};
    let res = await axios.post(url, body, header);
    return res.data.merchant;
  },

  async getCatagories() {
    let url = `${api_endpoint}/merchant-catagories`;
    let header = AuthService.getApiHeader();
    let body = {};
    let res = await axios.post(url, body, header);
    return res.data.catagories;
  },

  async getMenus() {
    let url = `${api_endpoint}/merchant-menus`;
    let header = AuthService.getApiHeader();
    let body = {};
    let res = await axios.post(url, body, header);
    return res.data.menus;
  },

  async getMenuWithCatagoryId(catagoryId) {
    let url = `${api_endpoint}/catagory-menus`;
    let header = AuthService.getApiHeader();
    let body = {
      catagoryId: catagoryId,
    };
    let res = await axios.post(url, body, header);
    return res.data.menus;
  },

  async createCatagory({ name }) {
    let url = `${api_endpoint}/create-catagory`;
    let header = AuthService.getApiHeader();
    let body = {
      name: name,
    };
    let res = await axios.post(url, body, header);
    return res;
  },

  async editCatagory({ name, catagoryId }) {
    let url = `${api_endpoint}/edit-catagory`;
    let header = AuthService.getApiHeader();
    let body = {
      name: name,
      catagoryId: catagoryId,
    };
    let res = await axios.post(url, body, header);
    return res;
  },

  async deleteCatagory(catagoryId) {
    let url = `${api_endpoint}/delete-catagory`;
    let header = AuthService.getApiHeader();
    let body = {
      catagoryId: catagoryId,
    };
    let res = await axios.post(url, body, header);
    return res;
  },

  async createMenu({ name, price, status, detail, catagoryId, image }) {
    let url = `${api_endpoint}/create-menu`;
    let header = AuthService.getApiHeader();
    let body = {
      name: name,
      catagoryId: catagoryId,
      price: price,
      status: status,
      detail: detail,
      image: image,
    };
    let res = await axios.post(url, body, header);
    return res;
  },

  async editMenu({ name, price, status, detail, menuId, image }) {
    let url = `${api_endpoint}/edit-menu`;
    let header = AuthService.getApiHeader();
    let body = {
      name: name,
      menuId: menuId,
      price: price,
      status: status,
      detail: detail,
      image: image,
    };
    let res = await axios.post(url, body, header);
    return res;
  },

  async deleteMenu(menuId) {
    let url = `${api_endpoint}/delete-menu`;
    let header = AuthService.getApiHeader();
    let body = {
      menuId: menuId,
    };
    let res = await axios.post(url, body, header);
    return res;
  },
};
