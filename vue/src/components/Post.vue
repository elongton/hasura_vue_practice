<template>
  <card class="w-24rem mt-5 max-w-full relative">
    <template #content>
      <div v-if="!editing" class="flex flex-column">
        <span class="text-white">{{ post.text }}</span>
        <small class="mt-2">{{ post.image_url }}</small>
      </div>
      <div v-if="editing">
        <submit-form @disable-editing="edit(false)" :editing="post" />
      </div>
      <div class="absolute top-0 right-0 cursor-pointer mr-2 mt-2">
        <span @click="edit">✏️</span>
        <span class="ml-2" @click="removePost(post.id)">🗑️</span>
      </div>
    </template>
  </card>
</template>

<script setup lang="ts">
import Card from "primevue/card";
import SubmitForm from "@/components/SubmitForm.vue";
import { ref } from "vue";
import { useDeletePostMutation } from "../api";
const editing = ref(false);
const { executeMutation: deletePost } = useDeletePostMutation();
defineProps<{ post: { text: string; image_url: string; id: number } }>();

function edit(val?: null | boolean) {
  if (val !== null) {
    editing.value = Boolean(val);
  } else {
    editing.value = !editing.value;
  }
}

const removePost = (id: number) => {
  deletePost({ where: { id: { _eq: id } } });
};
</script>
