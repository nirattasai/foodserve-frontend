<template>
  <div id="mobile" class="thai-text">
    <div id="modal-menu" :style="toggleMenu" class="modal-menu">
      <button
        type="button"
        class="close-but text-white bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
        v-on:click="toggleMenu = `display: none;`"
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
      <img :src="menu.image" style="height: 30%; width: 100%;" />
      <div class="text-4xl mt-10 ml-10">{{ menu.name }}</div>
      <div class="text-2xl mt-7 ml-10 text-gray-500 menu-detail-text">
        {{ menu.detail }}
      </div>
      <div class="text-center amount">
        <button class="inline mr-10 text-4xl" v-on:click="amount -= 1">-</button>
        <div class="inline mr-10 text-2xl">{{ amount }}</div>
        <button class="inline text-4xl" v-on:click="amount += 1">+</button>
      </div>
      <button
        class="add-to-basket py-3 pl-5"
        v-on:click="addMenu(menu, amount)"
      >
        <div style="float: left;">เพิ่มเมนู</div>
        <div class="inline float-right pr-5">฿{{ menu.price * amount }}</div>
      </button>
    </div>
    <div class="text-4xl font-bold mt-3">FOODSERVE</div>
    <div class="text-3xl mt-5">ร้าน {{ merchant.name }}</div>
    <select
      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
      v-model="filterCatagory"
    >
      <template v-for="catagory in catagories">
        <option :value="catagory">
          {{ catagory.catagoryName }}
        </option>
      </template>
    </select>
    <div class="block mt-24">
      <div v-for="menu in filterCatagory.menus" v-on:click="openMenu(menu)">
        <div class="menu px-5 py-3">
          <img :src="menu.image" class="menu-img inline" />
          <div class="menu-detail">
            <span class="text-lg">{{ menu.name }}</span>
            <br />
            <span class="text-sm opacity-50">{{ menu.detail }}</span>
            <br />
            <span>฿ {{ menu.price }} บาท</span>
          </div>
        </div>
        <hr class="mx-auto" />
      </div>
    </div>
    <div style="position: fixed; width: 90%; bottom: 3%; background-color: white;" class="text-center">
      <button type="button" class="basket py-3" v-on:click="confirmOrder">
        สั่งออร์เดอร์
      </button>
      <button class="basket py-3 mt-3" v-on:click="myOrder">ออร์เดอร์ของฉัน</button>
    </div>
  </div>
</template>

<script>
import CustomerService from "@/services/CustomerService";
export default {
  data() {
    return {
      merchant: "",
      catagories: "",
      tableId: this.$route.params.tableId,
      filterCatagory: "",
      toggleMenu: "display: none;",
      menu: {
        id: "",
        name: "",
        detail: "",
        price: "",
        image: "",
      },
      order: {
        tableId: this.$route.params.tableId,
        menu: [],
      },
      amount: 1,
    };
  },
  async created() {
    try {
      let res = await CustomerService.getPage(this.tableId);
      this.merchant = res.merchant;
      this.catagories = res.catagory;
      this.filterCatagory = this.catagories[0];
    } catch (error) {
      return null;
    }
  },
  components: {},
  methods: {
    openMenu(menu) {
      this.amount = 1;
      this.menu.id = menu.id;
      this.menu.name = menu.name;
      this.menu.price = menu.price;
      this.menu.image = menu.image;
      this.menu.detail = menu.detail;
      this.toggleMenu = "display: block;";
    },
    addMenu(menu, amount) {
      const newMenuItem = {
        id: menu.id,
        name: menu.name,
        detail: menu.detail,
        image: menu.image,
        price: menu.price,
      };
      this.order.menu.push({
        menu: newMenuItem,
        amount: amount,
      });
      this.toggleMenu = "display: none;";
    },
    async confirmOrder() {
      if (this.order.menu.length == 0) {
        alert("คุณยังไม่ได้เลือกเมนู");
      } else {
        localStorage.setItem('order', JSON.stringify(this.order));
        this.$router.push({
          name: "confirmOrder",
          // params: {
          //   order: this.order,
          // },
        });
      }
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
  height: auto;
}

hr {
  width: 90%;
}

.basket {
  width: 100%;
  height: 50px;
  margin-left: 5%;
  background-color: #f0b94c;
  border-radius: 5px;
}

.add-to-basket {
  position: fixed;
  width: 90%;
  height: 50px;
  margin-left: 5%;
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
