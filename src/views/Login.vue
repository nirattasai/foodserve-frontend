<template>
  <div style="height: 1080px">
    <div>
      <div
        class="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100"
      >
        <div class="relative sm:max-w-lg w-full">
          <div
            class="card bg-blue-400 shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6"
          ></div>
          <div
            class="card bg-red-400 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6"
          ></div>
          <div
            class="relative w-full rounded-3xl px-6 py-4 bg-gray-100 shadow-md"
          >
            <label
              for=""
              class="block mt-3 text-2xl text-gray-700 text-center font-semibold thai-text"
            >
              เข้าสู่ระบบ
            </label>
            <div>
              <input
                type="text"
                placeholder="Username"
                class="mt-7 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 pl-5 thai-text"
                v-model="form.username"
              />
              <input
                type="password"
                placeholder="password"
                class="mt-10 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 pl-5 thai-text"
                v-model="form.password"
              />
            </div>

            <div class="mt-7">
              <button
                class="w-full py-3 rounded-xl text-grey shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105 thai-text"
                style="background-color: #fce08e"
                v-on:click="login"
              >
                เข้าสู่ระบบ
              </button>
            </div>

            <div class="flex mt-7 items-center text-center">
              <hr class="border-gray-300 border-1 w-full rounded-md" />
              <label
                class="block font-medium text-sm text-gray-600 w-full thai-text"
              >
                ยังไม่มีบัญชี ? สมัครสมาชิก
              </label>
              <hr class="border-gray-300 border-1 w-full rounded-md" />
            </div>

            <div class="flex mt-7 justify-center w-full">
              <button
                class="mr-5 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105 thai-text"
                style="background-color: #f0b94c"
                v-on:click="toRegister"
              >
                สมัครสมาชิก
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthService from "@/services/AuthService";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      errors: "",
    };
  },
  beforeCreate() {
    if (AuthService.getUser()) {
      this.$router.push("/merchant");
    }
  },
  components: {},
  methods: {
    async login() {
      let res = await AuthService.login(this.form);
      if (res.error) {
        alert("something wrong");
      } else {
        this.$router.push({ name: "merchant" });
      }
    },
    clearForm() {
      this.form = {
        username: "",
        password: "",
      };
    },
    toRegister() {
      this.$router.push("/register");
    },
  },
};
</script>
