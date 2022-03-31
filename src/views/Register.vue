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
              สมัครสมาชิก
            </label>
            <div>
              <input
                type="text"
                placeholder="ชื่อ"
                class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 pl-5 thai-text"
                v-model="form.firstName"
              />
              <input
                type="text"
                placeholder="นามสกุล"
                class="mt-10 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 pl-5 thai-text"
                v-model="form.lastName"
              />
              <input
                type="text"
                placeholder="เลขบัตรประชาชน"
                class="mt-10 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 pl-5 thai-text"
                v-model="form.idNumber"
              />
              <input
                type="text"
                placeholder="หมายเลขโทรศัพท์"
                class="mt-10 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 pl-5 thai-text"
                v-model="form.telephoneNumber"
              />
            </div>

            <div class="mt-7">
              <input
                type="email"
                placeholder="E-mail"
                class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 pl-5 thai-text"
                v-model="form.email"
              />
              <input
                type="text"
                placeholder="Username"
                class="mt-10 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 pl-5 thai-text"
                v-model="form.username"
              />
            </div>

            <div class="mt-7">
              <input
                type="password"
                placeholder="Password"
                class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 pl-5 thai-text"
                v-model="form.password"
              />
            </div>

            <div class="mt-7">
              <input
                type="password"
                placeholder="Confirm Password"
                class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 pl-5 thai-text"
                v-model="form.confirmPassword"
              />
            </div>

            <div class="mt-7">
              <button
                class="w-full py-3 rounded-xl text-grey shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105 thai-text"
                style="background-color: #fce08e"
                v-on:click="register"
              >
                สมัครสมาชิก
              </button>
            </div>

            <div class="flex mt-7 items-center text-center">
              <hr class="border-gray-300 border-1 w-full rounded-md" />
              <label
                class="block font-medium text-sm text-gray-600 w-full thai-text"
              >
                มีบัญชีอยู่เเล้ว
              </label>
              <hr class="border-gray-300 border-1 w-full rounded-md" />
            </div>

            <div class="flex mt-7 justify-center w-full">
              <button
                class="mr-5 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105 thai-text"
                style="background-color: #f0b94c"
                v-on:click="toLogin"
              >
                เข้าสู่ระบบ
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
        confirmPassword: "",
        firstName: "",
        lastName: "",
        idNumebr: "",
        telephoneNumber: "",
        email: "",
      },
      errors: "",
    };
  },
  components: {},
  methods: {
    async register() {
      if (this.form.password != this.form.confirmPassword) {
        alert("password not same");
        this.clearForm();
      } else {
        try {
          let res = await AuthService.register(this.form);
          if (res.status == 200) {
            this.$router.push("/login");
          }
        } catch (error) {
          alert("error");
        }
      }
    },
    clearForm() {
      this.form = {
        username: this.form.username,
        password: "",
        confirmPassword: "",
        firstName: this.form.firstName,
        lastName: this.form.lastName,
        idNumebr: this.form.idNumebr,
        telephoneNumber: this.form.telephoneNumber,
        email: this.form.email,
      };
    },
    toLogin() {
      this.$router.push("/merchant");
    },
  },
};
</script>
