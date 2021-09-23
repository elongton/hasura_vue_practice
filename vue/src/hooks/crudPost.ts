import { reactive, ref } from "vue";
import { useAuth } from "./auth";
import { useToast } from "primevue/usetoast";
import {
  Posts,
  useDeletePostMutation,
  useInsertPostMutation,
  useUpdatePostMutation,
} from "../api";

export const useCrudPost = (post?: Posts) => {
  const { executeMutation: insertPost } = useInsertPostMutation();
  const { executeMutation: modifyPost } = useUpdatePostMutation();
  const { executeMutation: deletePost } = useDeletePostMutation();

  const toaster = useToast();
  const { user } = useAuth();

  const isSubmitting = ref(false);

  const formFields = reactive({
    text: post?.text || "",
    image_url: post?.image_url || "",
  });

  const createPost = () => {
    return insertPost({ object: { ...formFields, user_id: user.value?.id } });
  };

  const updatePost = () => {
    return modifyPost({
      where: { id: { _eq: post?.id } },
      _set: { ...formFields, user_id: user.value?.id },
    });
  };

  const removePost = () => {
    return deletePost({ where: { id: { _eq: post?.id } } });
  };

  const handleSubmit = async () => {
    isSubmitting.value = true;
    const submit = post?.id ? updatePost : createPost;
    const { error } = await submit();
    isSubmitting.value = false;

    formFields.image_url = "";
    formFields.text = "";

    toaster.add({
      life: 3000,
      summary: error ? error.message : "Operation Complete",
      detail: error && JSON.stringify(error.graphQLErrors),
    });
  };
  return { handleSubmit, removePost, formFields, isSubmitting };
};
