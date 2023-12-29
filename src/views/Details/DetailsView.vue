<script lang="ts">
import fetchLoanList from '@/apis/loanList'
import type { LoanListResponse } from '@/apis/loanList/types'
import LoanDetail from '@/components/LoanDetail/LoanDetail.vue'
import { useQuery } from '@tanstack/vue-query'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()

    const { isLoading, data } = useQuery<LoanListResponse>({
      queryKey: ['loanDetails'],
      queryFn: async () =>
        await fetchLoanList({
          id: route.query.id as string,
          page: 1
        })
    })

    return {
      isLoading,
      data
    }
  },
  components: {
    LoanDetail
  }
}
</script>

<template>
  <main>
    <LoanDetail :data="data?.data[0]" :is-loading="isLoading" />
  </main>
</template>

<style scoped></style>
