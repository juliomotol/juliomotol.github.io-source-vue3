<template>
  <div class="flex flex-wrap">
    <template v-if="$slots.default">
      <template v-for="(element, index) in $slots.default()" :key="index">
        <component :is="element" class="mb-2 mr-2" />
      </template>
    </template>
  </div>
</template>
