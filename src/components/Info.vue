<script lang="ts" setup>
defineProps<{
  title: string;
  description: string;
  image: string;
  onClickButton: VoidFunction;
}>();
</script>

<template>
  <div class="cartEmpty d-flex align-center justify-center flex-column flex">
    <img
      height="100"
      width="100"
      class="mb-20"
      v-bind:src="image"
      alt="Empty"
    />
    <h2>{{ title }}</h2>
    <p class="opacity-6">{{ description }}</p>
    <button @click="onClickButton" class="greenButton">
      <img src="src/assets/arrow.svg" alt="Arrow" />
      Вернуться назад
    </button>
  </div>
</template>

<style scoped></style>
