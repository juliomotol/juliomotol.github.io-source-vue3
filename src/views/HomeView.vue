<template>
  <main class="p-8 lg:px-16 min-h-[calc(100vh-100vw-40px)] flex flex-col justify-center">
    <DarkmodeSwapper v-slot="{ isDarkMode }">
      <img v-if="isDarkMode" class="mb-2" src="../assets/logo_banner_light.svg" alt="logo_banner" />
      <img v-else class="mb-2" src="../assets/logo_banner.svg" alt="logo_banner" />
    </DarkmodeSwapper>
    <h1 class="text-4xl mb-6">Full Stack Developer</h1>
    <div class="buttons">
      <InlineList>
        <ButtonComponent :is="RouterLink" :to="{ name: 'about' }">About Me</ButtonComponent>
        <ButtonComponent :is="RouterLink" :to="{ name: 'contact' }" outlined>Get in touch</ButtonComponent>
      </InlineList>
    </div>
  </main>
</template>

<script setup lang="ts">
import ButtonComponent from "@/components/ButtonComponent.vue";
import InlineList from "../components/InlineList.vue";
import DarkmodeSwapper from "../components/DarkmodeSwapper.vue";
import { RouterLink } from "vue-router";
</script>
