<template>
  <div>
    <img
      v-if="isLoading && oldImage"
      class="select-none absolute block object-cover h-[100vw] w-screen"
      :src="isValidUrl(oldImage) ? oldImage : 'data:image/png;base64,' + oldImage"
      alt="background image"
      :style="{ right: backgroundOffset + 'px' }"
    />
    <transition
      mode="out-in"
      enter-active-class="duration-200 ease-in"
      enter-from-class="transform opacity-0"
      @before-leave="isLoading = true"
      @after-enter="isLoading = false"
    >
      <img
        v-if="currentImage"
        class="select-none absolute block object-cover h-[100vw] w-screen"
        :src="isValidUrl(currentImage) ? currentImage : 'data:image/jpg;base64,' + currentImage"
        alt="background image"
        :style="{ right: backgroundOffset + 'px' }"
        ref="image"
      />
    </transition>
  </div>
</template>

<script setup lang="ts">
import { usePageStore } from "@/stores/page";
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";
import Axios from "axios";

const route = useRoute();
const page = usePageStore();
const backgroundIncrements = ref(0);
const backgroundOffset = ref(0);
const isLoading = ref(false);
const image = ref<HTMLInputElement | null>(null);
const oldImage = ref("");
const currentImage = ref("");

watch(
  () => route.name,
  async () => {
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
    responseType: "arraybuffer",
  });

  return btoa(String.fromCharCode(...new Uint8Array(response.data)));
}

function isValidUrl(string: string) {
  try {
    const url = new URL(string);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch (_) {
    return false;
  }
}

onMounted(() => {
  image.value?.addEventListener("load", () => {
    backgroundOffset.value = ((image.value?.width || 0) - (image.value?.height || 0)) / -2;
  });
});
</script>
