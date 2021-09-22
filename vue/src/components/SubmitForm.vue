<template>
  <form @submit.prevent="submitPost">
    <div class="text-left p-fluid p-grid p-formgrid mb-2">
      <span class="p-float-label mb-4">
        <input-text type="text" id="text" v-model="formValues.text" required />
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
    <p-button type="submit" label="submit" />
  </form>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
import { useInsertPostMutation, useUpdatePostMutation } from "../api";
import { useAuth } from "../hooks/auth";
import InputText from "primevue/inputtext";
import { useToast } from "primevue/usetoast";
const toaster = useToast();
const { executeMutation: insertPost } = useInsertPostMutation();
const { executeMutation: updatePost } = useUpdatePostMutation();
const { user } = useAuth();

interface Props {
  editing?: { text?: string; image_url?: string; id?: number } | any; //TODO: remove this any type
}

const props = withDefaults(defineProps<Props>(), {
  editing: { text: "", image_url: "" },
});
const intialState = {
  text: "",
  image_url: "",
};
const formValues = reactive({ ...intialState });
const setForm = () => {
  Object.assign(formValues, {
    text: props.editing.text,
    image_url: props.editing.image_url,
  });
};
const resetForm = () => {
  Object.assign(formValues, intialState);
};

onMounted(() => {
  if (props.editing) {
    setForm();
  } else {
    resetForm();
  }
});

const handleResponse = (data: any, error: any) => {
  if (data) {
    console.log(data);
    resetForm();
  } else if (error) {
    toaster.add({
      summary: error.message,
      detail: JSON.stringify(error.graphQLErrors),
      severity: "warn",
      life: 5000,
    });
  }
};

async function submitPost() {
  if (props.editing) {
    console.log(props.editing.id);
    const { data, error } = await updatePost({
      id: props.editing.id,
      _set: { text: formValues.text, image_url: formValues.image_url },
    });
    handleResponse(data, error);
  } else {
    const { data, error } = await insertPost({
      object: {
        text: formValues.text,
        image_url: formValues.image_url,
        user_id: user?.value?.id,
      },
    });
    handleResponse(data, error);
  }
}
</script>
