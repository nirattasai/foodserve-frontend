<template>
  <div>
    <div
      id="create-catagory"
      aria-hidden="true"
      class="overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center thai-text"
      :style="toggleCreateModalCatagory"
    >
      <div class="relative w-full max-w-md px-4 h-1/2 mx-auto mt-96">
        <div class="bg-white rounded-lg shadow relative dark:bg-gray-700">
          <div class="flex justify-end p-2">
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              v-on:click="closeCreateCatagoryModal"
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
              เพิ่มหมวดหมู่
            </h3>
            <div>
              <label
                for="email"
                class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                >ชื่อหมวดหมู่</label
              >
              <input
                type="text"
                name="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="ชื่อหมวดหมู่"
                required=""
                v-model="inputCatagory.name"
              />
            </div>
            <button
              class="w-48 py-3 rounded-xl text-grey shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105 thai-text mt-3 mb-6"
              style="background-color: #fce08e"
              v-on:click="createCatagory"
            >
              เพิ่มหมวดหมู่
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      id="edit-catagory"
      aria-hidden="true"
      class="overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center thai-text"
      :style="toggleEditModalCatagory"
    >
      <div class="relative w-full max-w-md px-4 h-1/2 mx-auto mt-96">
        <div class="bg-white rounded-lg shadow relative dark:bg-gray-700">
          <div class="flex justify-end p-2">
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              v-on:click="closeEditCatagoryModal"
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
              แก้ไขหมวดหมู่
            </h3>
            <div>
              <label
                for="email"
                class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                >ชื่อหมวดหมู่</label
              >
              <input
                type="text"
                name="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="ชื่อหมวดหมู่"
                required=""
                v-model="inputEditCatagory.name"
              />
            </div>
            <button
              class="w-48 py-3 rounded-xl text-grey shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105 thai-text mt-3 mb-6"
              style="background-color: #fce08e"
              v-on:click="editCatagory"
            >
              แก้ไขหมวดหมู่
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      id="create-menu"
      aria-hidden="true"
      class="overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center thai-text"
      :style="toggleCreateModalMenu"
    >
      <div class="relative w-full max-w-md px-4 h-1/2 mx-auto mt-24">
        <div class="bg-white rounded-lg shadow relative dark:bg-gray-700">
          <div class="flex justify-end p-2">
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              v-on:click="closeCreateMenuModal"
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
              เพิ่มเมนู
            </h3>
            <div>
              <label
                class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                >ชื่อเมนู</label
              >
              <input
                type="text"
                name="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required=""
                v-model="inputCreateMenu.name"
              />
            </div>
            <div>
              <label
                class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                >รายละเอียด</label
              >
              <input
                type="text"
                name="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required=""
                v-model="inputCreateMenu.detail"
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
                v-model="inputCreateMenu.price"
              />
            </div>
            <div>
              <label
                class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                >หมวดหมู่</label
              >
              <select
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                v-model="inputCreateMenu.catagoryId"
              >
                <template v-for="catagory in catagories">
                  <option :value="catagory.id">{{ catagory.name }}</option>
                </template>
              </select>
            </div>
            <div>
              <label
                class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                >สถานะ</label
              >
              <select
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                v-model="inputCreateMenu.status"
              >
                <option value="READY">พร้อม</option>
                <option value="NOT_READY">หมด</option>
              </select>
            </div>
            <div>
              <label
                class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                >รูปภาพ</label
              >
              <input
                @change="handleImageMenuCreate"
                class="w-full font-eng mx-auto"
                type="file"
                accept="image/*"
              />
              <img
                :src="inputCreateMenu.image"
                style="height: 200px"
                class="mx-auto mt-3"
              />
            </div>
            <button
              class="w-48 py-3 rounded-xl text-grey shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105 thai-text mt-3 mb-6"
              style="background-color: #fce08e"
              v-on:click="createMenu"
            >
              เพิ่มเมนู
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      id="detail-menu"
      aria-hidden="true"
      class="overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center thai-text"
      :style="toggleDetailModalMenu"
    >
      <div class="relative w-full max-w-md px-4 h-1/2 mx-auto mt-48">
        <div class="bg-white rounded-lg shadow relative dark:bg-gray-700">
          <div class="flex justify-end p-2">
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              v-on:click="closeDetailMenuModal"
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
              รายละเอียดเมนู
            </h3>
            <div>
              <label
                class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                >ชื่อเมนู</label
              >
              <input
                type="text"
                name="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required=""
                readonly
                v-model="this.menu.name"
              />
            </div>
            <div>
              <label
                class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                >รายละเอียด</label
              >
              <input
                type="text"
                name="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required=""
                readonly
                v-model="this.menu.detail"
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
                v-model="this.menu.price"
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
                v-if="this.menu.status == `READY`"
                value="พร้อม"
              />
              <input
                type="text"
                name="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required=""
                readonly
                v-if="this.menu.status == `NOT_READY`"
                value="หมด"
              />
            </div>
            <div>
              <label
                class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                >รูปภาพ</label
              >
              <img
                :src="this.menu.image"
                style="height: 200px"
                class="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="edit-menu"
      aria-hidden="true"
      class="overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center thai-text"
      :style="toggleEditModalMenu"
    >
      <div class="relative w-full max-w-md px-4 h-1/2 mx-auto mt-48">
        <div class="bg-white rounded-lg shadow relative dark:bg-gray-700">
          <div class="flex justify-end p-2">
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              v-on:click="closeEditMenuModal"
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
              แก้ไขเมนู
            </h3>
            <div>
              <label
                class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                >ชื่อเมนู</label
              >
              <input
                type="text"
                name="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required=""
                v-model="inputEditMenu.name"
              />
            </div>
            <div>
              <label
                class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                >รายละเอียด</label
              >
              <input
                type="text"
                name="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required=""
                v-model="inputEditMenu.detail"
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
                v-model="inputEditMenu.price"
              />
            </div>
            <div>
              <label
                class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                >สถานะ</label
              >
              <select
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                v-model="inputEditMenu.status"
              >
                <option value="READY">พร้อม</option>
                <option value="NOT_READY">หมด</option>
              </select>
            </div>
            <div>
              <label
                class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                >รูปภาพ</label
              >
              <input
                @change="handleImageMenuEdit"
                class="w-full font-eng mx-auto"
                type="file"
                accept="image/*"
              />
              <img
                :src="inputEditMenu.image"
                style="height: 200px"
                class="mt-3 mx-auto"
              />
            </div>
            <button
              class="w-48 py-3 rounded-xl text-grey shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105 thai-text mt-3 mb-6"
              style="background-color: #fce08e"
              v-on:click="editMenu"
            >
              แก้ไขเมนู
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="overflow-x-auto">
      <div
        class="min-w-screen bg-gray-100 flex items-center justify-center bg-gray-100 thai-text overflow-hidden"
      >
        <div class="w-full lg:w-2/6 mx-10">
          <div class="bg-white shadow-md rounded my-6">
            <table class="min-w-max w-full table-auto">
              <thead>
                <tr
                  class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal"
                >
                  <th class="py-3 px-6 text-left lg:w-4/6">หมวดหมู่</th>
                  <th class="py-3 px-6 text-center">จัดการ</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 text-sm font-light">
                <template v-for="catagory in catagories">
                  <tr class="border-b border-gray-200 hover:bg-gray-100">
                    <td
                      class="py-3 px-6 text-left whitespace-nowrap lg:w-4/6"
                      v-on:click="filterMenusWithCatagoryId(catagory)"
                    >
                      <div class="flex items-center">
                        <div class="mr-2"></div>
                        <span class="font-medium">{{ catagory.name }}</span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-center">
                      <div class="flex item-center justify-center">
                        <div
                          class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                          v-on:click="
                            openEditCatagoryModal(catagory.name, catagory.id)
                          "
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
                        <div
                          class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                          v-on:click="deleteCatagory(catagory.id)"
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
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
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
          <button
            class="w-48 py-3 rounded-xl text-grey shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105 thai-text mt-3 mb-6"
            style="background-color: #fce08e"
            v-on:click="openCreateCatagoryModal"
          >
            + เพิ่มหมวดหมู่
          </button>
        </div>

        <div class="w-full lg:w-5/6 mr-10">
          <div class="mx-auto pt-5">
            เมนูในหมวดหมู่ {{ catagoryShow || `ทั้งหมด` }}
          </div>
          <div class="bg-white shadow-md rounded my-6">
            <table class="min-w-max w-full table-auto">
              <thead>
                <tr
                  class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal"
                >
                  <th class="py-3 px-6 text-left">ชื่อ</th>
                  <th class="py-3 px-6 text-left">รายละเอียด</th>
                  <th class="py-3 px-6 text-center">ราคา</th>
                  <th class="py-3 px-6 text-center">สถานะ</th>
                  <th class="py-3 px-6 text-center">จัดการ</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 text-sm font-light">
                <template v-for="menu in menus">
                  <tr class="border-b border-gray-200 hover:bg-gray-100">
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="mr-2"></div>
                        <span class="font-medium">{{ menu.name }}</span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-left">
                      <div class="flex items-center">
                        <div class="mr-2">
                          <img class="w-6 h-6 rounded-full" :src="menu.image" />
                        </div>
                        <span>{{ menu.detail }}</span>
                      </div>
                    </td>
                    <td class="py-3 px-6 text-center">
                      <div class="flex items-center justify-center">
                        {{ menu.price }} บาท
                      </div>
                    </td>
                    <td class="py-3 px-6 text-center">
                      <span
                        v-if="menu.status == `READY`"
                        class="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs"
                        >พร้อม</span
                      >
                      <span
                        v-if="menu.status == `NOT_READY`"
                        class="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs"
                        >หมด</span
                      >
                    </td>
                    <td class="py-3 px-6 text-center">
                      <div class="flex item-center justify-center">
                        <div
                          class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                          v-on:click="openDetailMenuModal(menu)"
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
                          v-on:click="openEditMenuModal(menu)"
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
                        <div
                          class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                          v-on:click="deleteMenu(menu.id)"
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
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
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
          <button
            class="w-48 py-3 rounded-xl text-grey shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105 thai-text mt-3 mb-6"
            style="background-color: #fce08e"
            v-on:click="openCreateMenuModal"
          >
            + เพิ่มเมนู
          </button>
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
      merchant: undefined,
      menus: [],
      catagories: [],
      toggleCreateModalCatagory: "display: none;",
      toggleEditModalCatagory: "display: none;",
      toggleCreateModalMenu: "display: none;",
      toggleEditModalMenu: "display: none;",
      toggleDetailModalMenu: "display: none;",
      inputCatagory: {
        name: "",
      },
      inputEditCatagory: {
        name: "",
        catagoryId: "",
      },
      menu: {
        name: "",
        detail: "",
        price: 0.0,
        status: "",
        image: "",
      },
      inputCreateMenu: {
        name: "",
        detail: "",
        price: 0.0,
        status: "",
        image: "",
        catagoryId: "",
      },
      inputEditMenu: {
        menuId: "",
        name: "",
        detail: "",
        price: 0.0,
        status: "",
        image: "",
      },
      catagoryShow: undefined,
    };
  },
  async created() {
    try {
      this.merchant = await MerchantService.getmerchantWithUID();
      this.catagories = await MerchantService.getCatagories();
      this.menus = await MerchantService.getMenus();
    } catch (error) {
      return null;
    }
  },
  components: {},
  methods: {
    handleImageMenuCreate(e) {
      const selectedImage = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        this.inputCreateMenu.image = reader.result;
      };
      reader.readAsDataURL(selectedImage);
    },

    handleImageMenuEdit(e) {
      const selectedImage = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        this.inputEditMenu.image = reader.result;
      };
      reader.readAsDataURL(selectedImage);
    },

    async filterMenusWithCatagoryId(catagory) {
      this.menus = await MerchantService.getMenuWithCatagoryId(catagory.id);
      this.catagoryShow = catagory.name;
    },

    async createCatagory() {
      let res = await MerchantService.createCatagory(this.inputCatagory);
      this.catagories = await MerchantService.getCatagories();
      this.closeCreateCatagoryModal();
    },

    async deleteCatagory(catagoryId) {
      let res = await MerchantService.deleteCatagory(catagoryId);
      this.catagories = await MerchantService.getCatagories();
    },

    async editCatagory() {
      let res = await MerchantService.editCatagory(this.inputEditCatagory);
      this.catagories = await MerchantService.getCatagories();
      this.closeEditCatagoryModal();
    },

    openCreateCatagoryModal() {
      this.toggleCreateModalCatagory = "display: block;";
      this.inputCatagory.name = "";
    },

    closeCreateCatagoryModal() {
      this.toggleCreateModalCatagory = "display: none;";
    },

    openDetailMenuModal(menu) {
      this.toggleDetailModalMenu = "display: block;";
      this.menu.name = menu.name;
      this.menu.detail = menu.detail;
      this.menu.price = menu.price;
      this.menu.status = menu.status;
      this.menu.image = menu.image;
    },

    closeDetailMenuModal() {
      this.toggleDetailModalMenu = "display: none;";
    },

    openCreateMenuModal() {
      this.toggleCreateModalMenu = "display: block;";
      this.inputCreateMenu.name = "";
      this.inputCreateMenu.detail = "";
      this.inputCreateMenu.price = 0.0;
      this.inputCreateMenu.status = "";
      this.inputCreateMenu.image = "";
      this.inputCreateMenu.catagoryId = "";
    },

    closeCreateMenuModal() {
      this.toggleCreateModalMenu = "display: none;";
    },

    openEditMenuModal(menu) {
      this.toggleEditModalMenu = "display: block;";
      this.inputEditMenu.menuId = menu.id;
      this.inputEditMenu.name = menu.name;
      this.inputEditMenu.detail = menu.detail;
      this.inputEditMenu.price = menu.price;
      this.inputEditMenu.status = menu.status;
      this.inputEditMenu.image = menu.image;
    },

    closeEditMenuModal() {
      this.toggleEditModalMenu = "display: none;";
    },

    openEditCatagoryModal(name, catagoryId) {
      this.toggleEditModalCatagory = "display: block;";
      this.inputEditCatagory.name = name;
      this.inputEditCatagory.catagoryId = catagoryId;
    },

    closeEditCatagoryModal() {
      this.toggleEditModalCatagory = "display: none;";
    },

    async createMenu() {
      let res = MerchantService.createMenu(this.inputCreateMenu);
      this.catagories = await MerchantService.getCatagories();
      this.menus = await MerchantService.getMenus();
      this.closeCreateMenuModal();
    },

    async editMenu() {
      let res = MerchantService.editMenu(this.inputEditMenu);
      this.catagories = await MerchantService.getCatagories();
      this.menus = await MerchantService.getMenus();
      this.closeEditMenuModal();
    },

    async deleteMenu(menuId) {
      let res = MerchantService.deleteMenu(menuId);
      this.catagories = await MerchantService.getCatagories();
      this.menus = await MerchantService.getMenus();
    },
  },
};
</script>

<style></style>
