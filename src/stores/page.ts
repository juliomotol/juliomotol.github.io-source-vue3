import { defineStore } from "pinia";

interface State {
  isFullPage: boolean;
  backgroundImage: string | null;
}

export const usePageStore = defineStore({
  id: "preferences",
  state: (): State => ({
    isFullPage: false,
    backgroundImage: null,
  }),
  actions: {
    setIsFullPage(state: boolean) {
      this.isFullPage = state;
    },
    setBackgroundImage(url: string | null = null) {
      this.backgroundImage = url;
    },
  },
});
