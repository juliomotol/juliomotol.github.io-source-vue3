import { usePageStore } from "@/stores/page";
import { onUnmounted } from "vue";

interface PageOptions {
  isFullPage?: boolean;
  backgroundImage?: string;
}

export function usePage(options?: PageOptions) {
  const page = usePageStore();

  page.isFullPage = options?.isFullPage || false;
  page.backgroundImage = options?.backgroundImage || null;

  onUnmounted(destroy);

  function destroy() {
    page.isFullPage = false;
    page.backgroundImage = null;
  }

  return page;
}
