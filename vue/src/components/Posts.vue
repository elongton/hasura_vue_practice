<template>
  <h1>All Posts</h1>

  <div v-for="post in data?.posts" v-bind:key="post.id">
    <post :post="post" />
  </div>

  <card class="w-24rem mt-5 max-w-full">
    <template #title>Add Post</template>
    <template #content>
      <submit-form :editing="false" />
    </template>
  </card>
</template>

<script setup lang="ts">
import { usePostsStreamSubscription } from "../api";
import Card from "primevue/card";
import Post from "@/components/Post.vue";
import SubmitForm from "@/components/SubmitForm.vue";
const { data } = usePostsStreamSubscription();
</script>
