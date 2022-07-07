<template>
  <nav class="h-14 flex items-stretch bg-white relative z-30 text-gray-600" role="navigation" aria-label="main navigation">
    <div>
      <RouterLink :to="{ name: 'home' }" class="block p-3">
        <img v-if="preferences.isDarkMode" src="../assets/logo_light.svg" alt="logo" width="32" height="32" />
        <img v-else src="../assets/logo.svg" alt="logo" width="32" height="32" />
      </RouterLink>
    </div>
    <div class="grow flex items-stretch justify-end">
      <NavigationLink :to="{ name: 'about' }">about</NavigationLink>
      <NavigationLink :to="{ name: 'works' }">works</NavigationLink>
      <NavigationLink :to="{ name: 'contact' }">contact</NavigationLink>
      <div class="cursor-pointer flex items-center py-2 px-3" @click="preferences.toggleDarkMode()">
        <IconSun v-if="preferences.isDarkMode" class="w-5 h-5 fill-gray-600" />
        <IconMoon v-else class="w-5 h-5 fill-gray-600" />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { usePreferenceStore } from "@/stores/preferences";
import IconSun from "./icons/IconSun.vue";
import IconMoon from "./icons/IconMoon.vue";
import NavigationLink from "./NavigationLink.vue";

const preferences = usePreferenceStore();
</script>
