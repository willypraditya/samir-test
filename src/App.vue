<script setup lang="ts">
import { RouterView } from 'vue-router'
import LayoutView from './components/Layout/LayoutView.vue'
</script>

<template>
  <div class="wrapper">
    <LayoutView>
      <RouterView />
    </LayoutView>
  </div>
</template>

<style scoped>
.wrapper {
  background-color: #fdfdfd;
  height: 100vh;
}
</style>
