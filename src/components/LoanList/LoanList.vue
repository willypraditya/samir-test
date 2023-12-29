<script lang="ts">
import type { LoanListResponse } from '@/apis/loanList/types'
import { ArrowLeftIcon, ArrowRightIcon, EllipsisHorizontalIcon } from '@heroicons/vue/24/outline'
import type { PropType } from 'vue'

export default {
  props: {
    data: { type: Object as PropType<LoanListResponse | undefined>, required: false },
    isLoading: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      childPage: 1
    }
  },
  methods: {
    onClickDetail(id: string) {
      this.$router.push({
        path: 'detail',
        query: {
          id
        }
      })
    },
    onClickPrevPage() {
      this.childPage = this.childPage - 1
      this.$emit('child-page-change', this.childPage)
    },
    onClickNextPage() {
      this.childPage = this.childPage + 1
      this.$emit('child-page-change', this.childPage)
    },
    emitPageEvent() {}
  },
  components: {
    EllipsisHorizontalIcon,
    ArrowLeftIcon,
    ArrowRightIcon
  }
}
</script>

<template>
  <main>
    <table class="table">
      <thead>
        <tr>
          <th>Borrower</th>
          <th>Amount</th>
          <th>Interest Rate</th>
          <th>Term (Months)</th>
          <th>Risk Rating</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        <template v-if="isLoading">
          <tr>
            <td colspan="6" style="text-align: center">Loading...</td>
          </tr>
        </template>

        <template v-else>
          <tr v-for="item in data?.data" :key="item.id">
            <td>
              {{ item.borrower.name }}
            </td>
            <td>${{ item.amount }}</td>
            <td>{{ item.interestRate }}%</td>
            <td>
              {{ item.term }}
            </td>
            <td>
              {{ item.riskRating }}
            </td>
            <td>
              <div class="info-icon" @click="onClickDetail(item.id)">
                <EllipsisHorizontalIcon />
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <div v-if="!isLoading" class="pagination">
      <button class="pagination-button" :disabled="childPage === 1" @click="onClickPrevPage">
        <ArrowLeftIcon class="pagination-icon" />
      </button>

      <button
        class="pagination-button"
        :disabled="childPage >= data?.maxPage!"
        @click="onClickNextPage"
      >
        <ArrowRightIcon class="pagination-icon" />
      </button>
    </div>
  </main>
</template>

<style scoped>
.table {
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #ddd;
}

.tr,
th,
td {
  padding: 8px;
  text-align: left;
  border: 1px solid #ddd;
}

.thead,
tr,
th {
  font-weight: 700;
}

.info-icon {
  width: 28px;
  height: 28px;
  :hover {
    cursor: pointer;
  }
}

.pagination {
  margin-top: 12px;
  width: 100%;
  display: inline-flex;
  justify-content: center;
  gap: 10px;
}

.pagination-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.pagination-icon {
  width: 24px;
}
</style>
