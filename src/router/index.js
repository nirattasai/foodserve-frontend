import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login.vue";
import Navbar from "@/views/Navbar.vue";
import Register from "@/views/Register.vue";
import MechantManage from "@/views/merchant/MerchantManage.vue";
import MenuManage from "@/views/merchant/MenuManage.vue";
import OrderManage from "@/views/merchant/OrderManage.vue";
import TableManage from "@/views/merchant/TableManage.vue";
import BillManage from "@/views/merchant/BillManage.vue";
import SelectMenu from "@/views/customer/SelectMenu.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/table/:tableId",
    name: "selectMenu",
    component: SelectMenu,
  },
  {
    path: "/merchant",
    name: "merchant",
    component: Navbar,
    children: [
      {
        path: "manage",
        name: "merchantManage",
        component: MechantManage,
      },
      {
        path: "menu",
        name: "menuManage",
        component: MenuManage,
      },
      {
        path: "order",
        name: "orderManage",
        component: OrderManage,
      },
      {
        path: "table",
        name: "tableManage",
        component: TableManage,
      },
      {
        path: "bills",
        name: "billManage",
        component: BillManage,
      },
    ],
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
