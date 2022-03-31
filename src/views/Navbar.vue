<template>
  <div>
    <div class="pb-5">
      <div class="max-w-7xl mx-auto my-5 px-4 sm:px-6 mb-0">
        <div
          class="flex flex-col-reverse md:flex-row min-w-full py-6 space-y-8 justify-center md:justify-between md:space-x-10"
        >
          <!-- <input
            id="search"
            class="flex leading-none focus:outline-none border-b-2 hover:border-b-3 border-red-800 w-5/6 mt-12 mx-auto md:w-1/4 md:mt-0 md:mx-0"
            type="text"
            placeholder=" Searsh.."
          /> -->
          <div class="flex-1 md:self-start">
            <div class="flex justify-center">
              <div class="flex justify-center items-center">
                <span
                  class="pt-1 mx-auto whitespace-nowrap text-4xl font-bold thai-text"
                  style="color: #ecbb29; margin-left: 130px"
                  >FOODSERVE</span
                >
              </div>
            </div>
          </div>
          <div class="flex justify-around">
            <div class="flex justify-end">
              <div
                class="flex whitespace-nowrap pt-1 mx-3justify-center space-x-1"
              ></div>
              <button
                class="whitespace-nowrap text-base text-gray-500 hover:text-gray-900 text-thai font-bold"
                v-on:click="logout"
              >
                LOGOUT
              </button>
            </div>
            <!-- <div class="-my-2 md:hidden">
              <button
                type="button"
                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-900 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-expanded="false"
              >
                <span class="sr-only">Open menu</span
                ><svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div> -->
          </div>
        </div>
      </div>
      <nav id="bar" class="flex justify-center pt-0">
        <div
          class="flex flex-col md:flex-row justify-center md:space-y-0 my-4 space-y-4 text-center text-gray-500"
        >
          <div class="mx-8 hover:text-red-900 thai-text" v-on:click="toManage">
            จัดการร้านอาหาร
          </div>
          <div class="mx-8 hover:text-red-900 thai-text" v-on:click="toMenu">
            จัดการเมนู
          </div>
          <div class="mx-8 hover:text-red-900 thai-text" v-on:click="toOrder">
            ตรวจสอบออร์เดอร์
          </div>
          <div class="mx-8 hover:text-red-900 thai-text" v-on:click="toTable">
            ตรวจสอบโต๊ะ
          </div>
          <div class="mx-8 hover:text-red-900 thai-text" v-on:click="toBills">
            ตรวจสอบการชำระเงิน
          </div>
          <div
            class="mx-8 hover:text-red-900 thai-text"
            v-on:click="toDashboard"
          >
            สรุป
          </div>
        </div>
      </nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import AuthService from "@/services/AuthService";
export default {
  data() {
    return {
      user: AuthService.getUser(),
    };
  },
  components: {},
  methods: {
    logout() {
      AuthService.logout();
      this.$router.push("/login");
    },
    toManage() {
      this.$router.push({ name: "merchantManage" });
    },
    toMenu() {
      this.$router.push({ name: "menuManage" });
    },
    toOrder() {
      this.$router.push({ name: "orderManage" });
    },
    toTable() {
      this.$router.push({ name: "tableManage" });
    },
    toBills() {
      this.$router.push({ name: "billManage" });
    },
    toDashboard() {
      this.$router.push({ name: "dashboard" });
    },
  },
};
</script>

<style></style>
