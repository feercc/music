<script setup>
import "aplayer/dist/APlayer.min.css";
import APlayer from "aplayer";
import MUSICLIST from "../../config/index";
import { onMounted, ref, watch } from "vue";
import { useNavStore } from "../../stores/nav";

const palyer = ref();

const navStore = useNavStore();

let ap = null;

onMounted(() => {
  ap = new APlayer({
    container: palyer.value,
    audio: MUSICLIST[navStore.activeNav],
    order: "list",
    theme: "#ccffffff",
  });
  ap.list.show();
});

watch(
  () => navStore.activeNav,
  (value) => {
    ap.list.clear();
    ap.list.add(MUSICLIST[value] || []);
  }
);
</script>

<template>
  <main class="main">
    <div ref="palyer"></div>
  </main>
</template>

<style scoped>
@import url("./index.css");
</style>
