<script lang="ts">
import type { Loan } from '@/apis/loanList/types'
import type { PropType } from 'vue'

import GaugeChart from '@/components/GaugeChart/GaugeChart.vue'

import { CreditCardIcon } from '@heroicons/vue/24/outline'

export default {
  props: {
    data: { type: Object as PropType<Loan | undefined>, required: false },
    isLoading: {
      type: Boolean,
      required: true
    }
  },
  components: {
    GaugeChart,
    CreditCardIcon
  }
}
</script>

<template>
  <main>
    <h3 class="title">{{ data?.borrower.name }}'s Loan Details</h3>
    <div class="header-section">
      <div class="header-card">
        <div class="header-title">Personal Info</div>
        <div>Full Name: {{ data?.borrower.name }}</div>
        <div>Email: {{ data?.borrower.email }}</div>
      </div>

      <div class="header-card">
        <div class="header-title">Loan Info</div>
        <div>Amount: ${{ data?.amount }}</div>
        <div>Interest Rate: {{ data?.interestRate }}%</div>
        <div>Risk Rating: {{ data?.riskRating }}</div>
        <div>Term: {{ data?.term }} Months</div>
        <div>Purpose: {{ data?.purpose }}</div>
      </div>
      <div class="header-card" v-if="data?.borrower.creditScore">
        <div class="header-title">Credit Score</div>
        <GaugeChart :credit-score="data?.borrower.creditScore" />
      </div>
    </div>
    <div class="content-section">
      <div class="header-title">Repayment Schedule</div>
      <div v-for="item in data?.repaymentSchedule?.installments" :key="item.dueDate">
        <div class="content-card">
          <CreditCardIcon class="content-card-icon" />
          <div>
            <div>Due: ${{ item.amountDue }}</div>
            <div>Date: {{ item.dueDate }}</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.title {
  font-weight: 700;
}

.header-section {
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
}

@media (max-width: 1024px) {
  .header-section {
    grid-template-columns: auto;
  }
}

.header-card {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 24px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.header-title {
  font-weight: 700;
  margin-bottom: 5px;
}

.content-section {
  margin-top: 20px;
}

.content-card {
  border: 1px solid #ddd;
  max-width: 250px;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 10px;
  display: flex;
  gap: 12px;
}

.content-card-icon {
  width: 24px;
}
</style>
