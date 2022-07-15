<template>
  <div
    :class="[
      'relative flex flex-col bg-orange-light lg:flex-row w-full overflow-hidden',
      preferences.isDarkMode ? 'dark' : '',
    ]"
  >
    <div
      :class="[
        'flex flex-col bg-gradient-to-r from-orange to-orange-light lg:z-10 lg:transition-all lg:duration-500 ease-out dark:text-white',
        page.isFullPage ? ' lg:w-full' : 'lg:w-1/2',
      ]"
    >
      <NavigationComponent />
      <GithubCorner
        repo="juliomotol/juliomotol.github.io-source-vue3"
        class="absolute top-14 right-0 z-10 lg:z-auto lg:top-0"
      />
      <div
        class="h-[calc(100vw-56px)] sm:h-[calc(100vw*0.8-56px)] lg:hidden"
      ></div>
      <OverlayScrollbars
        class="rounded-br-3xl bg-gradient-to-b from-white to-neutral-300 lg:min-h-[calc(100vh-40px-56px)] dark:from-neutral-800 dark:to-neutral-900"
        :options="{
          className: preferences.isDarkMode
            ? 'os-theme-light'
            : 'os-theme-dark',
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
            <component
              :is="Component"
              :class="[
                'min-h-[calc(100vh-100vw-40px)] sm:min-h-[calc(100vh-100vw*0.8-40px)] lg:min-h-[calc(100vh-40px-56px)]',
                page.isFullPage ? ' lg:w-[100vw]' : 'lg:w-[50vw]',
              ]"
            />
          </transition>
        </RouterView>
      </OverlayScrollbars>
      <FooterComponent />
    </div>
    <DynamicBackground
      :class="[
        'absolute top-0 left-0 w-full aspect-square sm:aspect-[5/4] lg:aspect-[initial] lg:relative lg:w-1/2 lg:h-screen lg:transition-all lg:duration-500 ease-out',
        page.isFullPage ? ' lg:w-0' : 'lg:w-1/2',
      ]"
    />
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
