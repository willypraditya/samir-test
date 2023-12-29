<script lang="ts">
import fetchLoanList from '@/apis/loanList'
import type { LoanListResponse } from '@/apis/loanList/types'
import LoanFilter from '@/components/LoanFilter/LoanFilter.vue'
import LoanList from '@/components/LoanList/LoanList.vue'
import { useQuery } from '@tanstack/vue-query'
import { ref } from 'vue'

export default {
  setup() {
    const currentPage = ref(1)
    const filterInput = ref('')
    const sortSelect = ref('')

    const { isLoading, data } = useQuery<LoanListResponse>({
      queryKey: ['loans', currentPage, filterInput, sortSelect],
      queryFn: async () =>
        await fetchLoanList({
          page: currentPage.value,
          borrowerName: filterInput.value,
          sortBy: sortSelect.value
        })
    })

    return {
      currentPage,
      filterInput,
      sortSelect,
      isLoading,
      data
    }
  },
  components: {
    LoanFilter,
    LoanList
  },
  methods: {
    handleChildInputChange(childInputValue: string) {
      this.filterInput = childInputValue
    },
    handleChildSelectChange(childSelectValue: string) {
      this.sortSelect = childSelectValue
    },
    handleChildPageChange(childPageValue: number) {
      console.log('test', childPageValue)
      this.currentPage = childPageValue
    }
  }
}
</script>

<template>
  <main>
    <LoanFilter
      @child-input-change="handleChildInputChange"
      @child-select-change="handleChildSelectChange"
    />
    <div style="margin-top: 16px">
      <LoanList
        :data="data"
        :is-loading="isLoading"
        :current-page="currentPage"
        @child-page-change="handleChildPageChange"
      />
    </div>
  </main>
</template>

<style scoped></style>
