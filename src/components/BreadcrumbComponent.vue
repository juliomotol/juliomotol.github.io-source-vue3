<template>
  <nav class="flex">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <template v-if="$slots.default">
        <template v-for="(element, index) of $slots.default()" :key="index">
          <li v-if="index"><span class="mx-2">/</span></li>
          <li class="flex items-center">
            <component :is="element" />
          </li>
        </template>
      </template>
    </ol>
  </nav>
</template>
