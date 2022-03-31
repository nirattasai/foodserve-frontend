<template>
  <div>
    <div id="mobile" class="thai-text">
      <div class="text-4xl font-bold mt-3">FOODSERVE</div>
      <div class="text-3xl mt-5">ร้าน {{ merchant.name }}</div>
      <div class="text-xl mt-5">ยืนยันออร์เดอร์</div>
      <div class="block mt-5">
        <div v-for="menu in order.menu">
          <div class="menu px-5 py-3">
            <img :src="menu.menu.image" class="menu-img inline" />
            <div class="menu-detail">
              <span class="text-lg">{{ menu.menu.name }}</span>
              <br />
              <span class="text-sm opacity-50">{{ menu.menu.detail }}</span>
              <br />
              <span>฿ {{ menu.menu.price }} บาท</span>
              <span class="float-right">{{ menu.amount }} จาน</span>
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
        <button type="button" class="basket py-3" v-on:click="createOrder">
          ยืนยันออร์เดอร์
        </button>
        <button class="basket py-3 mt-3" v-on:click="backToSelectOrder">
          สั่งใหม่
        </button>
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
      order: {},
      price: 0,
    };
  },
  async created() {
    try {
      let res = await CustomerService.getPage(this.tableId);
      this.merchant = res.merchant;
      this.order = JSON.parse(localStorage.getItem("order"));
      this.order.menu.forEach((element) => {
        this.price += element.menu.price * element.amount;
      });
    } catch (error) {
      return null;
    }
  },
  components: {},
  methods: {
    async createOrder() {
      let res = await OrderService.createOrder(this.order, "HERE", this.price);
      localStorage.removeItem("order");
      this.myOrder();
    },
    backToSelectOrder() {
      localStorage.removeItem("order");
      this.$router.push({ name: "selectMenu" });
    },
    myOrder() {
      this.$router.push({ name: "myOrder" });
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
}
.menu-img {
  margin-top: 10px;
  height: 50px;
  border-radius: 5px;
  width: 20%;
  float: left;
}

.menu-detail {
  text-align: left;
  width: 50%;
  margin-left: 30%;
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
