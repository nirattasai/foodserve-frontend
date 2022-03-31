<template>
  <div class="thai-text">
    <div class="text-4xl">หน้าสรุปยอด</div>
    <div class="text-2xl mt-10">
      สรุปยอดวันที่
      <input
        type="date"
        id="date-picker"
        class="rounded-lg bg-gray-100 inline-block"
        v-model="dateFilter"
      />
    </div>
    <div class="text-xl mt-10">
      ยอดขาย {{ dailyReport.orderCount }} ออร์เดอร์
    </div>
    <div class="text-xl mt-2">ยอดเงิน {{ dailyReport.price }} บาท</div>
    <div v-if="dailyReport.mostMenu" class="text-xl mt-2">
      เมนูยอดฮิต {{ dailyReport.mostMenu.name }}
    </div>

    <div class="text-2xl mt-10">
      สรุปยอดเดือน
      <select
        v-model="monthFilter"
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white mx-auto mt-2"
      >
        <option value="1">มกราคม</option>
        <option value="2">กุมภาพันธ์</option>
        <option value="3">มีนาคม</option>
        <option value="4">เมษายน</option>
        <option value="5">พฤษภาคม</option>
        <option value="6">มิถุนายน</option>
        <option value="7">กรกฎาคม</option>
        <option value="8">สิงหาคม</option>
        <option value="9">กันยายน</option>
        <option value="10">ตุลาคม</option>
        <option value="11">พฤศจิกายน</option>
        <option value="12">ธันวาคม</option>
      </select>
    </div>
    <div class="text-xl mt-10">
      ยอดขาย {{ monthlyReport.orderCount }} ออร์เดอร์
    </div>
    <div class="text-xl mt-2">ยอดเงิน {{ monthlyReport.price }} บาท</div>
    <div v-if="monthlyReport.mostMenu" class="text-xl mt-2 mb-10">
      เมนูยอดฮิต {{ monthlyReport.mostMenu.name }}
    </div>
    <button
      class="mr-5 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105 thai-text"
      style="background-color: #f0b94c"
      v-on:click="downloadDaily"
    >
      ดาวน์โหลดยอดขายรายวัน
    </button>
    <button
      class="mr-5 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105 thai-text"
      style="background-color: #f0b94c"
      v-on:click="downloadMonthly"
    >
      ดาวน์โหลดยอดขายรายเดือน
    </button>
  </div>
</template>

<script>
import MerchantService from "@/services/MerchantService";
export default {
  data() {
    return {
      dateFilter: "",
      monthFilter: "",
      monthlyFilterComputed: {
        from: "",
        to: "",
      },
      dailyReport: {},
      monthlyReport: {},
      merchant: "",
    };
  },
  async created() {
    try {
      this.merchant = await MerchantService.getmerchantWithUID();
      let today = new Date();
      this.monthFilter = String(today.getMonth() + 1);
      this.dateFilter =
        today.getFullYear() +
        "-" +
        String(today.getMonth() + 1).padStart(2, "0") +
        "-" +
        String(today.getDate()).padStart(2, "0");
      this.dailyReport = await MerchantService.getDashboardDaily(
        this.dateFilter
      );
      this.monthlyFilterComputed.from =
        today.getFullYear() +
        "-" +
        String(this.monthFilter).padStart(2, "0") +
        "-" +
        "01";
      this.monthlyFilterComputed.to =
        today.getFullYear() +
        "-" +
        String(parseInt(this.monthFilter)+1).padStart(2, "0") +
        "-" +
        "01";
      this.monthlyReport = await MerchantService.getDashboardMonthly(
        this.monthlyFilterComputed
      );

    } catch (error) {
      return null;
    }
  },
  components: {},
  methods: {
    async downloadDaily() {
      window.location.href = `http://localhost:8000/api/downloadDailyReport?date=${this.dateFilter}&merchantId=${this.merchant.id}`;
    },
    async downloadMonthly() {
      window.location.href = `http://localhost:8000/api/downloadMonthlyReport?from=${this.monthlyFilterComputed.from}&merchantId=${this.merchant.id}&to=${this.monthlyFilterComputed.to}`;
    },
  },
  watch: {
    dateFilter: async function () {
      this.dailyReport = await MerchantService.getDashboardDaily(
        this.dateFilter
      );
    },
    monthFilter: async function () {
      let today = new Date();
      this.monthlyFilterComputed.from =
        today.getFullYear() +
        "-" +
        String(this.monthFilter).padStart(2, "0") +
        "-" +
        "01";
      this.monthlyFilterComputed.to =
        today.getFullYear() +
        "-" +
        String(parseInt(this.monthFilter)+1).padStart(2, "0") +
        "-" +
        "01";
      this.monthlyReport = await MerchantService.getDashboardMonthly(
        this.monthlyFilterComputed
      );
    },
  },
};
</script>
