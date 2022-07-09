<template>
  <div>
    <img
      v-if="isLoading && oldImage"
      class="select-none absolute block object-cover object-center w-full h-[inherit] aspect-[inherit]"
      :src="oldImage"
      alt="background image peristed"
    />
    <transition
      mode="out-in"
      enter-active-class="duration-200 ease-in"
      enter-from-class="transform-[opacity] opacity-0"
      @before-leave="isLoading = true"
      @after-enter="isLoading = false"
    >
      <img
        v-if="currentImage"
        class="select-none absolute block object-cover object-center w-full h-[inherit] aspect-[inherit]"
        :src="currentImage"
        alt="background image"
        ref="image"
      />
    </transition>
  </div>
</template>

<script setup lang="ts">
import { usePageStore } from "@/stores/page";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import Axios from "axios";

const route = useRoute();
const page = usePageStore();
const backgroundIncrements = ref(0);
const isLoading = ref(false);
const oldImage = ref("");
const currentImage = ref("");

watch(
  () => route.name,
  async () => {
    URL.revokeObjectURL(oldImage.value);
    oldImage.value = currentImage.value;
    currentImage.value = "";

    if (page.backgroundImage) {
      currentImage.value = page.backgroundImage;

      return;
    }

    backgroundIncrements.value++;

    currentImage.value = await fetchImage();
  }
);

async function fetchImage() {
  const response = await Axios.get("https://source.unsplash.com/user/juliomotol?load=" + backgroundIncrements.value, {
    responseType: "blob",
  });

  return URL.createObjectURL(response.data);
}
</script>
