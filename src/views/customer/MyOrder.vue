<template>
  <div>
    <div id="modal-order" :style="toggleModal" class="modal-menu thai-text">
      <div class="text-4xl text-center mt-10">
        หมายเลขออร์เดอร์ {{ order.id }}
      </div>
      <div class="text-2xl text-center mt-10" v-if="order.status == `WAITING`">
        รอคิวทำอาหาร
      </div>
      <div class="text-2xl text-center mt-10" v-if="order.status == `PREPARE`">
        กำลังทำอาหาร
      </div>
      <div class="text-2xl text-center mt-10" v-if="order.status == `SERVED`">
        เสิร์ฟเเล้ว
      </div>
      <div
        class="text-2xl text-center mt-10"
        v-if="order.status == `CANCELED`"
        style="color: red"
      >
        ยกเลิก
      </div>
      <div class="mx-auto w-5/6 mt-10">
        <div class="inline-block w-2/5">ชื่อเมนู</div>
        <div class="inline-block w-1/4">จำนวน</div>
        <div class="inline-block w-1/4">ราคา</div>
        <div v-for="menu in menus" class="mt-5">
          <div class="inline-block w-2/5">{{ menu.name }}</div>
          <div class="inline-block w-1/4">{{ menu.amount }}</div>
          <div class="inline-block w-1/4">
            {{ menu.price * menu.amount }}
          </div>
          <div class="inline-block">฿</div>
        </div>
      </div>

      <div
        style="
          position: fixed;
          width: 90%;
          bottom: 3%;
          background-color: white;
          margin-left: 5%;
        "
        class="text-center"
      >
        <button
          class="basket py-3 mt-3"
          style="background-color: red; color: white"
          v-on:click="cancelOrder(order)"
          v-if="order.status == `WAITING`"
        >
          ยกเลิกออร์เดอร์
        </button>
        <button class="basket py-3 mt-3" v-on:click="closeModal">กลับ</button>
      </div>
    </div>

    <div id="mobile" class="thai-text">
      <div class="text-4xl font-bold mt-3">FOODSERVE</div>
      <div class="text-3xl mt-5">ร้าน {{ merchant.name }}</div>
      <div class="text-xl mt-5">ออร์เดอร์ของฉัน</div>
      <div class="block mt-5">
        <div v-for="order in orders">
          <div class="menu px-5 py-3" v-on:click="openOrder(order)">
            <div>หมายเลขออร์เดอร์ : {{ order.id }}</div>
            <div>ราคา : {{ order.price }} ฿</div>
            <div v-if="order.status == `WAITING`">สถานะ : รอคิวทำอาหาร</div>
            <div v-if="order.status == `PREPARE`">สถานะ : กำลังทำอาหาร</div>
            <div v-if="order.status == `SERVED`">สถานะ : เสิร์ฟเเล้ว</div>
            <div v-if="order.status == `CANCELED`" style="color: red">
              สถานะ : ยกเลิก
            </div>
          </div>
          <hr class="mx-auto" />
        </div>
      </div>
      <div
        style="
          position: fixed;
          width: 90%;
          bottom: 3%;
          background-color: white;
          margin-left: 5%;
        "
        class="text-center"
      >
        <div class="text-xl">รวม {{ price }} บาท</div>
        <button
          type="button"
          class="basket py-3"
          v-on:click="backToSelectOrder"
        >
          สั่งเพิ่ม
        </button>
        <button class="basket py-3 mt-3" v-on:click="payment">ชำระเงิน</button>
      </div>
    </div>
  </div>
</template>

<script>
import CustomerService from "@/services/CustomerService";
import OrderService from "@/services/OrderService";
export default {
  data() {
    return {
      merchant: "",
      tableId: this.$route.params.tableId,
      orders: [],
      price: 0,
      toggleModal: "display: none;",
      menus: [],
      order: {},
      pollling: null,
    };
  },
  async created() {
    try {
      let res = await CustomerService.getPage(this.tableId);
      this.merchant = res.merchant;
      this.orders = await OrderService.myOrder(this.tableId);
      this.orders.forEach((element) => {
        if (element.status != "CANCELED") {
          this.price += element.price;
        }
      });
      this.polllingData(this.tableId, this.updateData);
    } catch (error) {
      return null;
    }
  },
  components: {},
  beforeDestroy() {
    clearInterval(this.pollling);
  },
  methods: {
    polllingData(tableId, method) {
      this.pollling = setInterval(async function () {
        method(await OrderService.myOrder(tableId));
      }, 5000);
    },
    updateData(data) {
      this.orders = data;
    },
    backToSelectOrder() {
      localStorage.removeItem("order");
      this.$router.push({ name: "selectMenu" });
    },
    async payment() {
      let orderId = [];
      this.orders.forEach((order) => {
        orderId.push(order.id);
      });
      let res = await OrderService.createBill(orderId, this.tableId);
      localStorage.setItem("bill", JSON.stringify(res));
      this.$router.push({ name: "payBill", params: { bill: res } });
    },

    async cancelOrder(order) {
      let res = await OrderService.cancelOrder(order);
      this.order = res.order;
      this.orders = await OrderService.myOrder(this.tableId);
      this.price = 0;
      this.orders.forEach((element) => {
        if (element.status != "CANCELED") {
          this.price += element.price;
        }
      });
    },

    async openOrder(order) {
      this.toggleModal = "display: block";
      this.menus = await OrderService.getMenusInOrder(order.id);
      this.order = order;
    },

    closeModal() {
      this.toggleModal = "display: none";
    },
  },
};
</script>

<style scoped>
#mobile {
  width: 100%;
  margin-bottom: 150px;
}

.menu {
  width: 100%;
  height: 100px;
}

hr {
  width: 90%;
}

.basket {
  width: 100%;
  height: 50px;
  background-color: #f0b94c;
  border-radius: 5px;
}

.add-to-basket {
  position: fixed;
  width: 90%;
  height: 50px;
  background-color: #f0b94c;
  border-radius: 5px;
  bottom: 3%;
}

select {
  width: 50%;
  float: right;
  margin-right: 4%;
  margin-top: 40px;
}

.modal-menu {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 999;
  background-color: white;
  margin-top: -12px;
  text-align: left;
}

.menu-detail-text {
  width: 80%;
  margin-left: 10%;
}

.amount {
  position: fixed;
  bottom: 13%;
  margin-left: 5%;
  width: 90%;
}

.close-but {
  position: absolute;
}
</style>
