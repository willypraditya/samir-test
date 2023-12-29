<script lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  props: {
    to: { type: String, required: true },
    name: { type: String, required: true }
  },
  setup(props) {
    const route = useRoute()
    const isActive = computed(() => route.path === props.to)

    return {
      route,
      isActive
    }
  }
}
</script>

<template>
  <div class="sidebar-item-container">
    <router-link :to="to">
      <div class="sidebar-item" :class="{ active: isActive }">
        {{ name }}
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.sidebar-item-container {
  margin-top: 6px;
}
.sidebar-item {
  padding: 6px;
  color: white;
  border-radius: 8px;
}

.sidebar-item:hover {
  background-color: #0072c6;
}

.sidebar-item.active {
  background-color: #0072c6;
}
</style>
