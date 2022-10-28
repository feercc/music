<script setup>
import "aplayer/dist/APlayer.min.css";
import APlayer from "aplayer";
import { onMounted, ref, watch } from "vue";
import { useNavStore } from "../../stores/nav";
import NavBar from "../../components/NavBar/index.vue";
import { getMusicList } from "./service";

const palyer = ref();

const navStore = useNavStore();

let ap = null;

const cacheInfo = {
  next_cursor: undefined,
  has_more: false,
};

onMounted(() => {
  ap = new APlayer({
    container: palyer.value,
    audio: [],
    order: "list",
    theme: "#ccffffff",
  });
  ap.list.show();
  getMusicList().then((res) => {
    console.log(res.list);
    ap.list.add(res.list);
    cacheInfo.has_more = res.has_more;
    cacheInfo.next_cursor = res.next_cursor;
  });
});

watch(
  () => navStore.activeNav,
  (value) => {
    getMusicList({ name: value }).then((res) => {
      ap.list.add(res.list);
    });
    ap.list.clear();
  }
);
</script>

<template>
  <h1>music.feer.icu</h1>
  <div class="container">
    <header>
      <div class="wrapper">
        <NavBar />
      </div>
    </header>
  </div>
  <main class="main">
    <div ref="palyer"></div>
  </main>
</template>

<style scoped>
@import url("./index.css");
</style>
