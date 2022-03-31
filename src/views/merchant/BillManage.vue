<template>
  <div>
    <div
      id="slip-bill"
      aria-hidden="true"
      class="overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center thai-text"
      :style="toggleSlip"
    >
      <div class="relative w-full max-w-md px-4 h-1/2 mx-auto mt-60">
        <div class="bg-white rounded-lg shadow relative dark:bg-gray-700">
          <div class="flex justify-end p-2">
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              v-on:click="closeSlip"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div class="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8">
            <h3 class="text-xl font-medium text-gray-900 dark:text-white">
              สลิปหลักฐาน
            </h3>
            <div class="flex items-center justify-center w-full">
              <label
                class="flex flex-col rounded-lg w-full h-60 group text-center mt-7"
                style="height: 500px"
              >
                <div
                  class="w-full text-center flex flex-col items-center justify-center items-center"
                ></div>
                <img
                  :src="bill.slip"
                  alt=""
                  class="mb-2 mt-5 mx-auto"
                  style="height: 400px"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="edit-bill"
      aria-hidden="true"
      class="overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center thai-text"
      :style="toggleBillEdit"
    >
      <div class="relative w-full max-w-md px-4 h-1/2 mx-auto mt-96">
        <div class="bg-white rounded-lg shadow relative dark:bg-gray-700">
          <div class="flex justify-end p-2">
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              v-on:click="closeBillEdit"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div class="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8">
            <h3 class="text-xl font-medium text-gray-900 dark:text-white">
              อัพเดตสถานะบิล
            </h3>
            <div>
              <label
                class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                >สถานะ</label
              >
              <select
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                v-model="updateBill.status"
              >
                <option value="NOT_PAID">ยังไม่จ่ายเงิน</option>
                <option value="WAITING">รอตรวจสอบ</option>
                <option value="PAID">ชำระเเล้ว</option>
              </select>
            </div>
            <button
              class="w-48 py-3 rounded-xl text-grey shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105 thai-text mt-3 mb-6"
              style="background-color: #fce08e"
              v-on:click="editBill"
            >
              อัพเดตบิล
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="overflow-x-auto">
      <div
        class="min-w-screen bg-gray-100 flex items-center justify-center bg-gray-100 thai-text overflow-hidden"
      >
        <div class="w-full lg:w-5/6 mr-10">
          <div class="inline-block mt-10 mr-6">เลือกวันที่ต้องการดู</div>
          <input
            type="date"
            id="date-picker"
            class="rounded-lg bg-gray-100 inline-block"
            v-model="dateFilter"
          />
          <select
            v-model="statusFilter"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          >
            <option value="NOT_PAID">ยังไม่จ่ายเงิน</option>
            <option value="WAITING">แจ้งชำระเงินเเล้ว</option>
            <option value="PAID">ชำระเงินเเล้ว</option>
            <option value="ALL">ทั้งหมด</option>
          </select>
          <div class="bg-white shadow-md rounded my-6">
            <table class="min-w-max w-full table-auto">
              <thead>
                <tr
                  class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal"
                >
                  <th class="py-3 px-6 text-left">หมายเลขบิล</th>
                  <th class="py-3 px-6 text-left">หมายเลขโต๊ะ</th>
                  <th class="py-3 px-6 text-left">จำนวนเงิน</th>
                  <th class="py-3 px-6 text-left">สถานะ</th>
                  <th class="py-3 px-6 text-center">จัดการ</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 text-sm font-light">
                <template v-for="bill in bills">
                  <tr class="border-b border-gray-200 hover:bg-gray-100">
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="mr-2"></div>
                        <span class="font-medium">{{ bill.id }}</span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="mr-2"></div>
                        <span class="font-medium">{{ bill.table_id }}</span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="mr-2"></div>
                        <span class="font-medium">{{ bill.price }} บาท</span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-left">
                      <div class="flex items-center">
                        <span
                          class="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs"
                          v-if="bill.status == `NOT_PAID`"
                          >ยังไม่จ่ายเงิน</span
                        >
                        <span
                          class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs"
                          v-else-if="bill.status == `PAID`"
                          >ชำระเงินเเล้ว</span
                        >
                        <span
                          class="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs"
                          v-else-if="bill.status == `WAITING`"
                          >แจ้งชำระเงินเเล้ว</span
                        >
                      </div>
                    </td>
                    <td class="py-3 px-6 text-center">
                      <div class="flex item-center justify-center">
                        <div
                          class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                          v-on:click="openSlip(bill)"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </div>
                        <div
                          class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                          v-on:click="openBillEdit(bill)"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            />
                          </svg>
                        </div>
                      </div>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderService from "@/services/OrderService";
export default {
  data() {
    return {
      bills: undefined,
      toggleBillEdit: "display: none;",
      toggleSlip: "display: none;",
      updateBill: {
        billId: undefined,
        status: undefined,
      },
      bill: "",
      dateFilter: "",
      statusFilter: "WAITING",
      pollling: null,
    };
  },
  async created() {
    try {
      let today = new Date();
      this.dateFilter =
        today.getFullYear() +
        "-" +
        String(today.getMonth() + 1).padStart(2, "0") +
        "-" +
        String(today.getDate()).padStart(2, "0");
      this.bills = await OrderService.getBills(
        this.dateFilter,
        this.statusFilter
      );
      this.polllingData(this.dateFilter, this.statusFilter, this.updateData);
    } catch (error) {
      return null;
    }
  },
  components: {},
  beforeDestroy() {
    clearInterval(this.pollling);
  },
  methods: {
    polllingData(date, status, method) {
      this.pollling = setInterval(async function () {
        method(await OrderService.getBills(date, status));
      }, 5000);
    },
    updateData(data) {
      this.bills = data;
    },
    openBillEdit(bill) {
      this.toggleBillEdit = "display: block;";
      this.updateBill.status = bill.status;
      this.updateBill.billId = bill.id;
      clearInterval(this.pollling);
    },
    closeBillEdit() {
      this.toggleBillEdit = "display: none;";
    },
    openSlip(bill) {
      this.bill = bill;
      this.toggleSlip = "display: block;";
    },
    closeSlip() {
      this.toggleSlip = "display: none;";
    },
    openBillDetail(bill) {
      console.log(bill);
    },
    async editBill() {
      let res = OrderService.updateStatusBill(this.updateBill);
      this.closeBillEdit();
      this.bills = await OrderService.getBills(
        this.dateFilter,
        this.statusFilter
      );
      this.polllingData(this.dateFilter, this.statusFilter, this.updateData);
    },
  },
  watch: {
    dateFilter: async function () {
      this.bills = await OrderService.getBills(
        this.dateFilter,
        this.statusFilter
      );
      clearInterval(this.pollling);
      this.polllingData(this.dateFilter, this.statusFilter, this.updateData);
    },
    statusFilter: async function () {
      this.bills = await OrderService.getBills(
        this.dateFilter,
        this.statusFilter
      );
      clearInterval(this.pollling);
      this.polllingData(this.dateFilter, this.statusFilter, this.updateData);
    },
  },
};
</script>
