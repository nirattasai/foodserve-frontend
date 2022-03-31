<template>
  <div>
    <div
      id="qrCode"
      aria-hidden="true"
      class="overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center thai-text"
      :style="togleQrCode"
    >
      <div class="relative w-full max-w-md px-4 h-1/2 mx-auto mt-96">
        <div class="bg-white rounded-lg shadow relative dark:bg-gray-700">
          <div class="flex justify-end p-2">
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              v-on:click="closeQrcode"
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
              QR CODE
            </h3>
            <img
              :src="`data:image/png;base64, ${qrCode}`"
              class="mx-auto w-5/6"
            />
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
                  <th class="py-3 px-6 text-left">หมายเลขโต๊ะ</th>
                  <th class="py-3 px-6 text-left">สถานะ</th>
                  <th class="py-3 px-6 text-center">ดู qr code</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 text-sm font-light">
                <template v-for="table in tables">
                  <tr class="border-b border-gray-200 hover:bg-gray-100">
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="mr-2"></div>
                        <span class="font-medium">{{ table.number }}</span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-left">
                      <div class="flex items-center">
                        <span
                          class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs"
                          v-if="table.status == `READY`"
                          >โต๊ะว่าง</span
                        >
                        <span
                          class="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs"
                          v-else-if="table.status == `NOT_READY`"
                          >โต๊ะไม่ว่าง</span
                        >
                      </div>
                    </td>
                    <td class="py-3 px-6 text-center">
                      <div class="flex item-center justify-center">
                        <div
                          class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                          v-on:click="openQrcode(table)"
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
import MerchantService from "@/services/MerchantService";
export default {
  data() {
    return {
      tables: undefined,
      togleQrCode: "display: none;",
      qrCode: "",
    };
  },
  async created() {
    try {
      this.tables = await MerchantService.getTables();
    } catch (error) {
      return null;
    }
  },
  components: {},
  methods: {
    openQrcode(table) {
      this.togleQrCode = "display: block";
      this.qrCode = table.qr_code;
    },
    closeQrcode() {
      this.togleQrCode = "display: none";
      this.qrCode = "";
    },
  },
};
</script>
