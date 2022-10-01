<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar/index.vue";
</script>

<template>
  <h1>音乐播放器</h1>
  <div class="container">
    <header>
      <div class="wrapper">
        <NavBar />
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
h1 {
  margin-top: 40px;
  font-size: 40px;
  text-align: center;
}
.container {
  margin-top: 60px;
}
</style>
