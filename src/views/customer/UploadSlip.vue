<template>
  <div>
    <div id="mobile" class="thai-text">
      <div class="text-4xl font-bold mt-3">FOODSERVE</div>
      <div class="text-3xl mt-5">ร้าน {{ merchant.name }}</div>

      <div class="flex w-full justify-center">
        <div
          id="multi-upload-button"
          class="thai-text inline-flex items-center px-4 py-2 bg-gray-600 border border-gray-600 rounded-l font-semibold cursor-pointer text-sm text-white tracking-widest hover:bg-gray-500 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
        >
          อัพโหลดสลิป
        </div>
        <div
          class="w-4/12 lg:w-6/12 border border-gray-300 rounded-r-md flex items-center justify-between"
        >
          <span id="multi-upload-text" class="p-2"></span>
          <input
            @change="handleImage"
            class="w-full font-eng mx-auto"
            type="file"
            accept="image/*"
          />
        </div>
      </div>

      <div class="flex items-center justify-center w-full">
        <label
          class="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center mt-7"
          style="height: 500px"
        >
          <div
            class="w-full text-center flex flex-col items-center justify-center items-center"
          ></div>
          <img
            :src="this.image"
            alt=""
            class="mb-2 mt-5 mx-auto"
            style="height: 400px"
          />
        </label>
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
      tableId: this.$route.params.tableId,
      image: "",
      merchant: "",
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
  components: {},
  methods: {
    handleImage(e) {
      const selectedImage = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        this.image = reader.result;
      };
      reader.readAsDataURL(selectedImage);
    },

    async pay() {
      localStorage.removeItem("bill");
      let res = await OrderService.uploadSlip(this.mutationBill.id, this.image);
      this.$router.push({ name: "thankyou" });
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
