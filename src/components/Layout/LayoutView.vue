<script lang="ts">
import SidebarView from './Sidebar/SidebarView.vue'

export default {
  components: {
    SidebarView
  }
}
</script>

<template>
  <main>
    <div>
      <SidebarView />
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </main>
</template>

<style scoped>
.content {
  margin-left: var(--sidebar-width);
  padding: 2rem;
}
</style>
