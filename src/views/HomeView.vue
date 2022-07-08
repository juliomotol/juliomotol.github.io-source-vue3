<template>
  <main class="p-8 lg:px-16 min-h-[calc(100vh-100vw-40px)] flex flex-col justify-center">
    <img v-if="preferences.isDarkMode" class="mb-2" src="../assets/logo_banner_light.svg" alt="logo_banner" />
    <img v-else class="mb-2" src="../assets/logo_banner.svg" alt="logo_banner" />
    <h1 class="text-4xl mb-6">Full Stack Developer</h1>
    <div class="buttons">
      <InlineList>
        <ButtonComponent>About Me</ButtonComponent>
        <ButtonComponent outlined>Get in touch</ButtonComponent>
      </InlineList>

      <!-- <RouterLink :to="{ name: 'about' }" class="button is-primary">About me</RouterLink> -->
      <!-- <RouterLink :to="{ name: 'contact' }" class="button is-primary is-outlined">Get in touch</RouterLink> -->
    </div>
  </main>
</template>

<script setup lang="ts">
import ButtonComponent from "@/components/ButtonComponent.vue";
import { usePreferenceStore } from "@/stores/preferences";
import InlineList from "../components/InlineList.vue";

const preferences = usePreferenceStore();
</script>
