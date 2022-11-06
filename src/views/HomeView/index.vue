<script setup>
import { onMounted, ref, watch } from "vue";
import { useNavStore } from "../../stores/nav";
import NavBar from "../../components/NavBar/index.vue";
import Player from "../../components/Player/index.vue";
import Loading from "../../components/Loading/index.vue";
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
    getMusicList({ type: value }).then((res) => {
      musicList.value = res.list;
    });
  }
);
</script>

<template>
  <Loading></Loading>
  <NavBar />
  <div class="px-6 md:px-24">
    <Player :list="musicList" />
  </div>
</template>
