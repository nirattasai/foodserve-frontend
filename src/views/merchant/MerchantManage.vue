<template>
  <div>
    <!-- This is an example component -->
    <div class="max-w-xl mx-auto mb-10">
      <div class="relative z-0 mb-6 w-full group">
        <input
          type="text"
          name="floating_name"
          class="block py-2.5 px-0 w-full text-m text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer thai-text"
          placeholder=""
          required
          v-model="form.name"
        />
        <label
          for="floating_name"
          class="thai-text absolute text-m text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          style="margin-left: -20px"
          >ชื่อร้าน</label
        >
      </div>
      <div class="relative z-0 mb-6 w-full group">
        <input
          type="text"
          name="floating_address"
          id="floating_address"
          class="block py-2.5 px-0 w-full text-m text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer thai-text"
          placeholder=" "
          required
          v-model="form.address"
        />
        <label
          for="floating_address"
          class="thai-text absolute text-m text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          style="margin-left: -20px"
          >ที่อยู่ร้าน</label
        >
      </div>
      <div class="relative z-0 mb-6 w-full group">
        <input
          type="text"
          name="floating_table"
          id="floating_table"
          class="block py-2.5 px-0 w-full text-m text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer thai-text"
          placeholder=" "
          required
          v-model="form.table"
        />
        <label
          for="floating_table"
          class="thai-text absolute text-m text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          style="margin-left: -20px"
          >จำนวนโต๊ะ</label
        >
      </div>
      <div class="flex w-full justify-center">
        <div
          id="multi-upload-button"
          class="thai-text inline-flex items-center px-4 py-2 bg-gray-600 border border-gray-600 rounded-l font-semibold cursor-pointer text-sm text-white tracking-widest hover:bg-gray-500 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
        >
          เลือกรูป qr code ของร้าน
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
            :src="this.form.image"
            alt=""
            class="mb-2 mt-5 mx-auto"
            style="height: 400px"
          />
        </label>
      </div>
      <!-- <img
        :src="this.form.image"
        alt=""
        class="mb-2 mt-5 mx-auto"
        style="height: 400px"
      /> -->
      <button
        class="w-full py-3 rounded-xl text-grey shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105 thai-text mt-10"
        style="background-color: #fce08e"
        v-on:click="createMerchant"
      >
        บันทึกข้อมูล
      </button>
    </div>
  </div>
</template>

<script>
import MerchantService from "@/services/MerchantService";
export default {
  data() {
    return {
      merchant: undefined,
      form: {
        name: "",
        address: "",
        table: "",
        image: "",
      },
    };
  },
  async created() {
    try {
      this.merchant = await MerchantService.getmerchantWithUID();
      this.form.name = this.merchant.name;
      this.form.address = this.merchant.address;
      this.form.table = this.merchant.table;
      this.form.image = this.merchant.qr_code;
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
        this.form.image = reader.result;
      };
      reader.readAsDataURL(selectedImage);
    },

    async createMerchant() {
      try {
        let res = MerchantService.createMerchant(this.form);
        this.$router.push({ name: "menuManage" });
      } catch (error) {
        alert("error");
      }
    },
  },
};
</script>

<style></style>
