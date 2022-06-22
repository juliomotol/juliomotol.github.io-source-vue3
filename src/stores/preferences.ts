import { defineStore } from "pinia";

interface State {
  isDarkMode: boolean | null;
}

export const useCounterStore = defineStore({
  id: "preferences",
  state: (): State => ({
    isDarkMode: null,
  }),
  actions: {
    setDarkMode(state: boolean) {
      this.isDarkMode = state;
    },
    initTheme() {
      if (this.isDarkMode === null) {
        this.setDarkMode(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
      }
    },
    toggleDarkMode() {
      this.setDarkMode(!this.isDarkMode);
    },
  },
  persist: {
    key: "jm",
    paths: ["preferences"],
  },
});
