<template>
  <RouterLink
    :to="to"
    class="flex items-center py-2 px-3 hover:underline hover:decoration-orange hover:decoration-2 hover:underline-offset-4"
    active-class="underline decoration-orange decoration-2 underline-offset-4 text-black dark:text-white"
  >
    <slot></slot>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";

defineProps({
  to: {
    type: Object,
    required: true,
  },
});
</script>
