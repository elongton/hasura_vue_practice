<template>
  <card class="w-24rem mt-5 max-w-full relative">
    <template #content>
      <div v-if="!editing" class="flex flex-column">
        <span class="text-white">{{ post.text }}</span>
        <small class="mt-2">{{ post.image_url }}</small>
      </div>
      <div v-if="editing">
        <submit-form :editing="post" />
      </div>
      <div class="absolute top-0 right-0 cursor-pointer mr-2 mt-2">
        <span @click="edit">✏️</span>
        <span class="ml-2" @click="edit">🗑️</span>
      </div>
    </template>
  </card>
</template>

<script setup lang="ts">
import Card from "primevue/card";
import SubmitForm from "@/components/SubmitForm.vue";
import { ref } from "vue";
const editing = ref(false);
defineProps<{ post: { text: string; image_url: string } }>();

function edit() {
  editing.value = !editing.value;
}
</script>
