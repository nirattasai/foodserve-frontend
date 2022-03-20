<template>
  <div>
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
                    <!-- <td class="py-3 px-6 text-center">
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
                    </td> -->
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
  methods: {},
};
</script>
