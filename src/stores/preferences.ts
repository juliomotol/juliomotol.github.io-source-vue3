import { defineStore } from "pinia";

interface State {
  isDarkMode: boolean | null;
}

export const usePreferenceStore = defineStore({
  id: "preferences",
  state: (): State => ({
    isDarkMode: null,
  }),
  actions: {
    setDarkMode(state: boolean) {
      this.isDarkMode = state;
    },
    initDarkMode() {
      if (this.isDarkMode === null) {
        this.setDarkMode(
          window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        );
      }

      document.getElementsByTagName("html")[0].className = this.isDarkMode
        ? "dark"
        : "";
    },
    toggleDarkMode() {
      this.setDarkMode(!this.isDarkMode);

      this.initDarkMode();
    },
  },
  persist: true,
});
