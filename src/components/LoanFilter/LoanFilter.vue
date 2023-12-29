<script lang="ts">
export default {
  data() {
    return {
      childFilterInput: '',
      childSortSelect: ''
    }
  },
  methods: {
    emitInputEvent() {
      this.$emit('child-input-change', this.childFilterInput)
    },
    emitSelectEvent() {
      this.$emit('child-select-change', this.childSortSelect)
    }
  }
}
</script>

<template>
  <main>
    <div class="filter">
      <input
        class="filter-input"
        placeholder="Search by Borrower"
        v-model="childFilterInput"
        @input="emitInputEvent"
      />

      <select class="filter-select" v-model="childSortSelect" @change="emitSelectEvent">
        <option disabled value="">Sort By</option>
        <option value="borrower">Borrower</option>
        <option value="term">Term</option>
        <option value="risk">Risk Rating</option>
      </select>
    </div>
  </main>
</template>

<style scoped>
.filter {
  display: flex;
  gap: 16px;
}

.filter-input {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 12px;
}

.filter-select {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 12px;
}
</style>
