<template>
  <button
    :class="[
      'font-serif text-sm px-3 py-2 rounded-tr-lg rounded-bl-lg',
      outlined ? 'border-[#f63] border-solid bg-transparent border text-[#f63]' : ' bg-[#f63]  text-white',
    ]"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
defineProps({
  outlined: Boolean,
});
</script>
