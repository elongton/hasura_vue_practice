<template>
  <card class="w-24rem mt-5 max-w-full relative">
    <template #content>
      <submit-form
        v-if="isEditing"
        :post="post"
        :is-editing="isEditing"
        @close="isEditing = false"
      />
      <div v-else class="flex flex-column">
        <span class="text-white">{{ post.text }}</span>
        <small class="mt-2">{{ post.image_url }}</small>
      </div>
      <div class="absolute top-0 right-0 cursor-pointer mr-2 mt-2">
        <span @click="isEditing = !isEditing">✏️</span>
        <span class="ml-2" @click="removePost">🗑️</span>
      </div>
    </template>
  </card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Card from "primevue/card";
import SubmitForm from "@/components/SubmitForm.vue";
import { Posts } from "../api";
import { useCrudPost } from "../hooks/crudPost";

const props = defineProps<{ post: Posts }>();

const { removePost } = useCrudPost(props.post);
const isEditing = ref(false);
</script>
