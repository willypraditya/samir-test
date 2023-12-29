<script lang="ts">
import { HomeModernIcon } from '@heroicons/vue/24/solid'

import SidebarItem from './SidebarItem.vue'

export default {
  setup() {},
  components: {
    HomeModernIcon,
    SidebarItem
  }
}
</script>

<template>
  <main>
    <div class="sidebar">
      <div class="company">Samir Loan <HomeModernIcon class="logo" /></div>
      <SidebarItem to="/" name="Loans" />
    </div>
  </main>
</template>

<style scoped>
.sidebar {
  background-color: #007bd6;
  color: white;
  float: left;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 16px;
  width: var(--sidebar-width);
  align-items: center;
}

.company {
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.logo {
  width: 26px;
  height: 26px;
}
</style>
