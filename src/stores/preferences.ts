import { defineStore } from "pinia";

interface State {
  isDarkMode: boolean | null;
}

export const usePreferenceStore = defineStore("preferences", {
  state: (): State => ({
    isDarkMode: null,
  }),
  actions: {
    setDarkMode(state: boolean) {
      this.isDarkMode = state;
    },
    toggleDarkMode() {
      this.setDarkMode(!this.isDarkMode);
    },
  },
  persist: true,
});
