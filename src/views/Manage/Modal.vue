<script setup>
import { getMusicList, delMusic } from "./service";
import { computed, ref } from "vue";
import { usePagination, useRequest } from "vue-request";
// import router from "../../router";
// import { message } from "ant-design-vue";
const props = defineProps({
  modelValue: Boolean,
});

const emit = defineEmits(["update:modelValue"]);
const handleModal = (flag) => {
  if (!flag) {
    emit("update:modelValue", false);
    return;
  }
  // 确定的逻辑
};
</script>

<template>
  <div class="content">
    <a-modal
      v-model:visible="props.modelValue"
      title="Basic Modal"
      @cancel="handleModal(false)"
      @ok="handleModal(true)"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>
</template>

<style scoped></style>
