<template>
  <RouterLink :to="to" class="flex items-center py-2 px-3" active-class="text-black">
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
