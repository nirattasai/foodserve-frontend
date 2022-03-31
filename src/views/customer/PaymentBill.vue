<template>
  <div>
    <div id="mobile" class="thai-text">
      <div class="text-4xl font-bold mt-3">FOODSERVE</div>
      <div class="text-3xl mt-5">ร้าน {{ merchant.name }}</div>
      <div class="text-xl mt-5">ชำระเงิน</div>
      <img
        :src="merchant.qr_code"
        style="width: 90%"
        class="mx-auto rounded-xl mt-5"
      />
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
        <div class="text-xl">รวม {{ mutationBill.price }} บาท</div>
        <button class="basket py-3 mt-3" v-on:click="pay">แจ้งชำระ</button>
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
      price: 0,
      mutationBill: {},
    };
  },
  async created() {
    try {
      let res = await CustomerService.getPage(this.tableId);
      this.merchant = res.merchant;
      if (this.bill == undefined) {
        this.mutationBill = JSON.parse(localStorage.getItem("bill"));
      } else {
        this.mutationBill = this.bill;
      }
    } catch (error) {
      return null;
    }
  },
  props: ["bill"],
  components: {},
  methods: {
    async pay() {
      this.$router.push({ name: "uploadSlip" });
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
