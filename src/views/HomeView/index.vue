<script setup>
import { onMounted, ref, watch } from "vue";
import { useNavStore } from "../../stores/nav";
import NavBar from "../../components/NavBar/index.vue";
import Music from "./music.vue";
import { getMusicList } from "./service";

const musicList = ref([]);

const navStore = useNavStore();

onMounted(() => {
  getMusicList().then((res) => {
    musicList.value = res.list;
  });
});

watch(
  () => navStore.activeNav,
  (value) => {
    getMusicList({ name: value }).then((res) => {
      musicList.value = res.list;
    });
  }
);
</script>

<template>
  <h1 class="py-10 text-center font-bold font text-3xl text-fuchsia-50">🎵</h1>
  <NavBar />
  <Music />
  <div>
    <audio :src="musicList.length ? musicList[0].url : ''" controls></audio>
  </div>
</template>
