<template>
  <component
    v-if="is"
    :is="is"
    v-bind="$attrs"
    :class="[...styles, $attrs.class]"
  >
    <slot></slot>
  </component>
  <button v-else :class="[...styles, $attrs.class]">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps({
  outlined: Boolean,
  is: [Object, String],
});

const styles = ref([
  "font-serif text-sm px-3 py-2 rounded-tr-lg rounded-bl-lg",
  props.outlined
    ? "border-[#f63] border-solid bg-transparent border text-[#f63]"
    : " bg-[#f63]  text-white",
]);
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
