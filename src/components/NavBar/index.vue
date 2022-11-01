<script setup>
import { useNavStore } from "../../stores/nav";
import { NAVCONFIG } from "./config";
const navStore = useNavStore();
</script>

<template>
  <div class="flex justify-center flex-wrap">
    <span
      v-for="item in NAVCONFIG"
      :key="item.value"
      @click="navStore.changeNav(item.value)"
      :class="[
        navStore.activeNav == item.value ? 'opacity-100' : '',
        'hover:opacity-100 opacity-60 border-solid border border-white px-3 py-1 mx-2 my-1 text-white cursor-pointer',
      ]"
      >{{ item.name }}</span
    >
  </div>
</template>
