<script setup>
import "aplayer/dist/APlayer.min.css";
import APlayer from "aplayer";
import { onMounted, ref, watch } from "vue";
const props = defineProps({
  list: Array,
});

const ap = ref(null);

const playerRef = ref(null);

onMounted(() => {
  ap.value = new APlayer({
    container: playerRef.value,
  });
});

watch(
  () => props.list,
  (value) => {
    ap.value.list.clear();
    if (value?.length) ap.value.list.add(value);
  }
);
</script>

<template>
  <div ref="playerRef"></div>
</template>
