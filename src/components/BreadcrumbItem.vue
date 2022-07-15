<template>
  <router-link
    :to="to"
    class="text-orange hover:underline hover:decoration-orange hover:decoration-2 hover:underline-offset-4"
    exact-active-class="text-black dark:text-white"
  >
    <slot></slot>
  </router-link>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import type { RouteLocationRaw } from "vue-router";

defineProps({
  to: {
    type: Object as PropType<RouteLocationRaw>,
    required: true,
  },
});
</script>
