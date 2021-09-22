<template>
  <div>Logged In</div>
  <h1>All Posts</h1>
  <ul>
    <li v-for="post in data?.posts" v-bind:key="post.id">
      <span>{{ post.text }}</span>
    </li>
  </ul>

  <form @submit.prevent="addPost" class="px-4">
    <card class="w-24rem mx-auto mt-5 max-w-full">
      <template #title>Login</template>
      <template #subtitle>Fill form to add post</template>
      <template #content>
        <div class="text-left p-fluid p-grid p-formgrid">
          <span class="p-float-label mb-4">
            <input-text
              type="text"
              id="text"
              v-model="formValues.text"
              required
            />
            <label for="text">Post Text</label>
          </span>
          <span class="p-float-label mb-4">
            <input-text
              type="text"
              id="text"
              v-model="formValues.image_url"
              required
            />
            <label for="text">Image Url</label>
          </span>
        </div>
      </template>
      <template #footer>
        <p-button type="submit" label="submit" />
      </template>
    </card>
  </form>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import {
  useInsertPostMutation,
  usePostsQuery,
  usePostsStreamSubscription,
} from "../api";
import { useToast } from "primevue/usetoast";
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import { useAuth } from "../hooks/auth";
const toaster = useToast();
const { user } = useAuth();
const { data } = usePostsStreamSubscription();
const { executeMutation } = useInsertPostMutation();

const formValues = reactive({
  text: "",
  image_url: "",
});

async function addPost() {
  const { data, error } = await executeMutation({
    object: {
      text: formValues.text,
      image_url: formValues.image_url,
      user_id: user?.value?.id,
    },
  });

  if (data) {
    console.log(data);
  } else if (error) {
    toaster.add({
      summary: error.message,
      detail: JSON.stringify(error.graphQLErrors),
      severity: "warn",
      life: 5000,
    });
  }
}
</script>
