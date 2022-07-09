import { usePageStore } from "@/stores/page";
import { onMounted, onUnmounted, ref, watch } from "vue";

interface PageOptions {
  isFullpage?: boolean;
  backgroundImage?: string;
}

export function usePage(options?: PageOptions) {
  const page = usePageStore();

  const isFullpage = ref<boolean>(options?.isFullpage ?? false);
  const backgroundImage = ref<string>(options?.backgroundImage ?? "");

  onUnmounted(destroy);

  watch(isFullpage, (value) => page.setIsFullPage(value), {
    immediate: true,
  });
  watch(backgroundImage, (value) => page.setBackgroundImage(value), {
    immediate: true,
  });

  function destroy() {
    page.setIsFullPage(false);
    page.setBackgroundImage(null);
  }

  return { page, isFullpage, backgroundImage };
}
