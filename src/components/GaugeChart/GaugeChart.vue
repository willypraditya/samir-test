<script lang="ts">
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

const maxCreditScore = 850

export default {
  props: {
    creditScore: { type: Number, required: true }
  },
  name: 'GaugeChart',
  components: { Doughnut },
  data() {
    const creditScore = this?.creditScore || 0

    const creditScorePercentage = (creditScore / maxCreditScore) * 100

    console.log(creditScore)

    return {
      chartData: {
        labels: [`Borrower Credit Score: ${creditScore} `, 'Maximum Credit Score: 850'],
        datasets: [
          {
            data: [creditScorePercentage, 100 - creditScorePercentage],
            backgroundColor: ['rgb(54, 162, 235)', '#ddd']
          }
        ]
      },
      chartOptions: {
        rotation: 270,
        circumference: 180,
        plugins: {
          legend: {
            position: 'bottom',
            onClick: (e: any) => e.stopPropagation()
          }
        }
      }
    }
  }
}
</script>

<template>
  <main class="main">
    <Doughnut id="my-chart-id" :options="chartOptions" :data="chartData" />
  </main>
</template>

<style scoped>
.main {
  height: 200px;
}
</style>
