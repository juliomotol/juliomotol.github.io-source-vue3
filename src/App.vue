<template>
  <!-- <DynamicBackground class="absolute top-0 left-0" /> -->
  <div class="flex flex-col bg-gradient-to-r from-orange to-orange-light">
    <div class="overflow-hidden">
      <NavigationComponent />
      <!-- <GithubCorner repo="juliomotol/juliomotol.github.io-source" /> -->
      <div class="h-[calc(100vw-56px)]"></div>
      <OverlayScrollbars
        class="min-h-[calc(100vh-100vw-40px)] rounded-br-3xl bg-gradient-to-b from-white to-zinc-300"
        :options="{
          className: preferences.isDarkMode ? 'os-theme-light' : 'os-theme-dark',
          overflowBehavior: { x: 'hidden' },
        }"
        ref="overlayScrollbar"
      >
        <transition mode="out-in" name="fade-out-slide-in">
          <RouterView />
        </transition>
      </OverlayScrollbars>
    </div>
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import { usePreferenceStore } from "@/stores/preferences";
import { OverlayScrollbarsComponent as OverlayScrollbars } from "overlayscrollbars-vue";
import GithubCorner from "@/components/GithubCorner.vue";
import NavigationComponent from "./components/NavigationComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import DynamicBackground from "./components/DynamicBackground.vue";

const preferences = usePreferenceStore();
</script>
