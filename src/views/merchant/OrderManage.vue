<template>
  <div>
    <div
      id="edit-order"
      aria-hidden="true"
      class="overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center thai-text"
      :style="toggleOrderEdit"
    >
      <div class="relative w-full max-w-md px-4 h-1/2 mx-auto mt-96">
        <div class="bg-white rounded-lg shadow relative dark:bg-gray-700">
          <div class="flex justify-end p-2">
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              v-on:click="closeOrderEdit"
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
              อัพเดตสถานะออร์เดอร์
            </h3>
            <div>
              <label
                class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                >สถานะ</label
              >
              <select
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                v-model="updateOrder.status"
              >
                <option value="WAITING">รอทำอาหาร</option>
                <option value="PREPARE">กำลังทำอาหาร</option>
                <option value="SERVED">เสิร์ฟเเล้ว</option>
              </select>
            </div>
            <button
              class="w-48 py-3 rounded-xl text-grey shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105 thai-text mt-3 mb-6"
              style="background-color: #fce08e"
              v-on:click="editStatusOrder"
            >
              อัพเดตออร์เดอร์
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      id="detail-order"
      aria-hidden="true"
      class="overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center thai-text"
      :style="toggleOrderDetail"
    >
      <div class="relative w-full max-w-md px-4 h-1/2 mx-auto mt-36">
        <div class="bg-white rounded-lg shadow relative dark:bg-gray-700">
          <div class="flex justify-end p-2">
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              v-on:click="closeOrderDetail"
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
              รายละเอียดออร์เดอร์
            </h3>
            <div>
              <label
                class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                >หมายเลขออร์เดอร์</label
              >
              <input
                type="text"
                name="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required=""
                readonly
                v-model="order.id"
              />
            </div>
            <div>
              <label
                class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                >หมายเลขโต๊ะ</label
              >
              <input
                type="text"
                name="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required=""
                readonly
                v-model="order.tableNumber"
              />
            </div>
            <div>
              <label
                class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                >สถานะ</label
              >
              <input
                type="text"
                name="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required=""
                readonly
                v-if="order.status == `SERVED`"
                value="เสิร์ฟเเล้ว"
              />
              <input
                type="text"
                name="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required=""
                readonly
                v-if="order.status == `PREPARE`"
                value="กำลังเตรียมอาหาร"
              />
              <input
                type="text"
                name="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required=""
                readonly
                v-if="order.status == `WAITING`"
                value="รอทำอาหาร"
              />
            </div>
            <div>
              <label
                class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                >ประเภท</label
              >
              <input
                type="text"
                name="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required=""
                readonly
                v-if="order.type == `HERE`"
                value="ทานที่ร้าน"
              />
              <input
                type="text"
                name="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required=""
                readonly
                v-if="order.type == `TAKE_HOME`"
                value="กลับบ้าน"
              />
            </div>
            <div>
              <label
                class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                >ราคา (บาท)</label
              >
              <input
                type="text"
                name="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required=""
                readonly
                v-model="order.price"
              />
            </div>
            <table class="min-w-max w-full table-auto bg-white mx-auto">
              <thead>
                <tr
                  class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal"
                >
                  <th class="py-3 px-6 text-left lg:w-3/6">ชื่อเมนู</th>
                  <th class="py-3 px-6 text-left">จำนวน</th>
                  <th class="py-3 px-6 text-left">ราคา</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 text-sm font-light">
                <template v-for="menu in menus">
                  <tr class="border-b border-gray-200 hover:bg-gray-100">
                    <td class="py-3 px-6 text-left whitespace-nowrap lg:w-3/6">
                      <div class="flex items-center">
                        <span class="font-medium">{{ menu.name }}</span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <span class="font-medium">{{ menu.amount }}</span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <span class="font-medium"
                          >{{ menu.price * menu.amount }} บาท</span
                        >
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
    <div class="overflow-x-auto">
      <div
        class="min-w-screen bg-gray-100 flex items-center justify-center bg-gray-100 thai-text overflow-hidden"
      >
        <div class="w-full lg:w-5/6 mr-10">
          <div class="bg-white shadow-md rounded my-6">
            <table class="min-w-max w-full table-auto">
              <thead>
                <tr
                  class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal"
                >
                  <th class="py-3 px-6 text-left">หมายเลขออร์เดอร์</th>
                  <th class="py-3 px-6 text-left">หมายเลขโต๊ะ</th>
                  <th class="py-3 px-6 text-left">สถานะ</th>
                  <th class="py-3 px-6 text-center">ราคา</th>
                  <th class="py-3 px-6 text-center">ประเภท</th>
                  <th class="py-3 px-6 text-center">จัดการ</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 text-sm font-light">
                <template v-for="order in orders">
                  <tr class="border-b border-gray-200 hover:bg-gray-100">
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="mr-2"></div>
                        <span class="font-medium">{{ order.id }}</span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="mr-2"></div>
                        <span class="font-medium">{{ order.tableNumber }}</span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-left">
                      <div class="flex items-center">
                        <div class="mr-2">
                          <img
                            class="w-6 h-6 rounded-full"
                            src="https://randomuser.me/api/portraits/men/1.jpg"
                          />
                        </div>
                        <span v-if="order.status == `SERVED`">เสิร์ฟเเล้ว</span>
                        <span v-else-if="order.status == `PREPARE`"
                          >กำลังเตรียมอาหาร</span
                        >
                        <span v-else-if="order.status == `WAITING`"
                          >รอเตรียมอาหาร</span
                        >
                      </div>
                    </td>
                    <td class="py-3 px-6 text-center">
                      <div class="flex items-center justify-center">
                        {{ order.price }} บาท
                      </div>
                    </td>
                    <td class="py-3 px-6 text-center">
                      <span
                        v-if="order.type == `HERE`"
                        class="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs"
                        >ทานที่ร้าน</span
                      >
                      <span
                        v-else-if="order.type == `TAKE_HOME`"
                        class="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs"
                        >กลับบ้าน</span
                      >
                    </td>
                    <td class="py-3 px-6 text-center">
                      <div class="flex item-center justify-center">
                        <div
                          class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                          v-on:click="openOrderDetail(order)"
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
                          v-on:click="openOrderEdit(order)"
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
      merchant: undefined,
      orders: undefined,
      toggleOrderEdit: "display: none;",
      toggleOrderDetail: "display: none;",
      order: {
        id: "",
        type: "",
        price: 0,
        tableNumber: "",
        status: "",
      },
      updateOrder: {
        orderId: "",
        status: "",
      },
      menus: undefined,
    };
  },
  async created() {
    try {
      this.orders = await OrderService.getOrders();
    } catch (error) {
      return null;
    }
  },
  components: {},
  methods: {
    closeOrderEdit() {
      this.toggleOrderEdit = "display: none";
    },
    openOrderEdit(order) {
      this.toggleOrderEdit = "display: block";
      this.updateOrder.status = order.status;
      this.updateOrder.orderId = order.id;
      this.order.id = order.id;
      this.order.type = order.type;
      this.order.price = order.price;
      this.order.tableNumber = order.tableNumber;
      this.order.status = order.status;
    },
    closeOrderDetail() {
      this.toggleOrderDetail = "display: none";
    },
    async openOrderDetail(order) {
      this.toggleOrderDetail = "display: block";
      this.order.id = order.id;
      this.order.type = order.type;
      this.order.price = order.price;
      this.order.tableNumber = order.tableNumber;
      this.order.status = order.status;
      this.menus = await OrderService.getMenusInOrder(order.id);
    },

    async editStatusOrder() {
      let res = await OrderService.editStatusOrder(this.updateOrder);
      this.orders = await OrderService.getOrders();
      this.closeOrderEdit();
    },
  },
};
</script>
