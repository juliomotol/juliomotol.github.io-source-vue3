import { usePageStore } from "@/stores/page";
import { onMounted, onUnmounted } from "vue";

interface PageOptions {
  isFullpage?: boolean;
  backgroundImage?: string;
}

export function usePage(options: PageOptions) {
  const page = usePageStore();

  onMounted(init);
  onUnmounted(destroy);

  function init() {
    page.setIsFullPage(options.isFullpage ?? false);
    page.setBackgroundImage(options.backgroundImage ?? null);
  }

  function destroy() {
    page.setIsFullPage(false);
    page.setBackgroundImage(null);
  }

  return { page };
}
