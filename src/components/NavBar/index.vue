<script setup>
import { useNavStore } from "../../stores/nav";
import { NAVCONFIG } from "./config";
const navStore = useNavStore();
</script>

<template>
  <div class="btn-area">
    <span
      v-for="item in NAVCONFIG"
      :key="item.value"
      @click="navStore.changeNav(item.value)"
      :class="['btn', navStore.activeNav === item.value && 'active']"
      >{{ item.name }}</span
    >
  </div>
</template>

<style scoped>
@import url("./index.css");
</style>
