<template>
  <transition
    mode="out-in"
    enter-active-class="duration-200 ease-out"
    enter-from-class="transform opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="transform opacity-0"
  >
    <slot :isDarkMode="preferences.isDarkMode"></slot>
  </transition>
</template>

<script setup lang="ts">
import { usePreferenceStore } from "@/stores/preferences";

const preferences = usePreferenceStore();
</script>
