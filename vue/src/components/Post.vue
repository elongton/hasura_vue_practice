<template>
  <card class="w-24rem mt-5 max-w-full">
    <template #content>
      <span class="text-white">{{ text }}</span>
    </template>
  </card>
</template>

<script setup lang="ts">
import Card from "primevue/card";
defineProps<{ text: string }>();
</script>
