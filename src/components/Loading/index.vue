<script setup>
const props = defineProps({
  isLoading: Boolean,
});
</script>

<template>
  <div class="text-center">
    <svg
      class="svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="100"
      height="100"
    >
      <circle
        class="svg-circle"
        cx="50"
        cy="50"
        r="30"
        stroke="#c9bb8c"
        fill="transparent"
        stroke-width="5"
      />
    </svg>
    <slot></slot>
  </div>
</template>

<style scoped>
.svg {
  display: inline;
  animation: loading-rotate 2s linear infinite;
}
.svg-circle {
  animation: loading-dash 1.5s linear infinite;
}

@keyframes loading-rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes loading-dash {
  0% {
    stroke-dasharray: 1, 2C;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 0.9C, 2C;
    stroke-dashoffset: -0.4C;
  }
  100% {
    stroke-dasharray: 0.9C, 2C;
    stroke-dashoffset: -C;
  }
}
</style>
