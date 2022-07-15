<template>
  <footer class="footer px-3 py-2 text-white">
    <p>&copy; {{ year }} Julio Motol. All rights reserved.</p>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const year = ref(new Date().getFullYear());
</script>
