import { defineStore } from "pinia";

interface State {
  isFullPage: boolean;
  backgroundImage: string | null;
}

export const usePageStore = defineStore("page", {
  state: (): State => ({
    isFullPage: false,
    backgroundImage: null,
  }),
});
