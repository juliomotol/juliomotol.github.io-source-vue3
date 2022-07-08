<template>
  <div class="relative flex flex-col">
    <div class="flex flex-col bg-gradient-to-r from-orange to-orange-light">
      <NavigationComponent />
      <GithubCorner repo="juliomotol/juliomotol.github.io-source" class="z-30 absolute top-14 right-0" />
      <div class="h-[calc(100vw-56px)]"></div>
      <OverlayScrollbars
        class="min-h-[calc(100vh-100vw-40px)] rounded-br-3xl bg-gradient-to-b from-white to-zinc-300"
        :options="{
          className: preferences.isDarkMode ? 'os-theme-light' : 'os-theme-dark',
          overflowBehavior: { x: 'hidden' },
        }"
        ref="overlayScrollbar"
      >
        <RouterView v-slot="{ Component }">
          <transition
            mode="out-in"
            enter-active-class="duration-700 ease-out"
            enter-from-class="transform translate-x-[-50%]"
            leave-active-class="duration-200 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="transform opacity-0"
          >
            <component :is="Component" />
          </transition>
        </RouterView>
      </OverlayScrollbars>
      <FooterComponent />
    </div>
    <DynamicBackground class="absolute top-0 left-0 w-full h-[100vw]" />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import { usePreferenceStore } from "@/stores/preferences";
import { usePageStore } from "@/stores/page";
import { OverlayScrollbarsComponent as OverlayScrollbars } from "overlayscrollbars-vue";
import GithubCorner from "@/components/GithubCorner.vue";
import NavigationComponent from "./components/NavigationComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import DynamicBackground from "./components/DynamicBackground.vue";

const preferences = usePreferenceStore();
const page = usePageStore();
</script>
