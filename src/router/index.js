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
import ConfirmOrder from "@/views/customer/ConfirmOrder.vue";
import MyOrder from "@/views/customer/MyOrder.vue";
import PayBill from "@/views/customer/PaymentBill.vue";
import Thankyou from "@/views/customer/Thankyou.vue";
import Dashboard from "@/views/merchant/Dashboard.vue";
import UploadSlip from "@/views/customer/UploadSlip.vue";

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
    path: "/table/:tableId/confirm",
    name: "confirmOrder",
    component: ConfirmOrder,
  },
  {
    path: "/table/:tableId/my",
    name: "myOrder",
    component: MyOrder,
  },
  {
    path: "/table/:tableId/pay",
    name: "payBill",
    component: PayBill,
    props: true,
  },
  {
    path: "/table/:tableId/upload",
    name: "uploadSlip",
    component: UploadSlip,
    props: true,
  },
  {
    path: "/thankyou",
    name: "thankyou",
    component: Thankyou,
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
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard,
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
