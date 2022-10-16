<script setup>
import "aplayer/dist/APlayer.min.css";
import APlayer from "aplayer";
import MUSICLIST from "../../config/index";
import { onMounted, ref, watch } from "vue";
import { useNavStore } from "../../stores/nav";
import NavBar from "../../components/NavBar/index.vue";

const palyer = ref();

const navStore = useNavStore();

let ap = null;

const getMusicList = () => {
  // axios.get("/music/list").then((res) => {
  //   console.log(1, res);
  // });
};

onMounted(() => {
  getMusicList();
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
