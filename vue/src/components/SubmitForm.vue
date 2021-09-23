<template>
  <form
    @submit.prevent="
      handleSubmit();
      $emit('close');
    "
  >
    <div class="text-left p-fluid p-grid p-formgrid mb-2">
      <span class="p-float-label mb-4">
        <input-text type="text" id="text" v-model="formFields.text" required />
        <label for="text">Post Text</label>
      </span>
      <span class="p-float-label mb-4">
        <input-text
          type="text"
          id="text"
          v-model="formFields.image_url"
          required
        />
        <label for="text">Image Url</label>
      </span>
    </div>
    <p-button type="submit" label="submit" :disabled="isSubmitting" />
  </form>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { Posts } from "../api";
import InputText from "primevue/inputtext";
import { useCrudPost } from "../hooks/crudPost";

const props = defineProps<{ post?: Posts }>();

const { handleSubmit, isSubmitting, formFields } = useCrudPost(props.post);
</script>
