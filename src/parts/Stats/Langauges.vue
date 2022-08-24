<template>
  <div class="stats_container">
    <h1 class="stats_title">Top Languages</h1>
    <Pie
      :chart-options="options.chartOptions"
      :chart-data="options.chartData"
      :width="300"
      :height="250"
      chartId="langauages_chart"
    ></Pie>
  </div>
</template>

<script>
import { Pie } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

import { reactive } from "@vue/reactivity";
export default {
  props: ["stats"],
  setup({ stats }) {
    const labels = stats.map((item) => item.label);
    const data = stats.map((item) => item.value);
    const backgroundColor = stats.map((item) => item.color);
    const chartData = {
      labels,
      datasets: [
        {
          backgroundColor,
          data,
        },
      ],
    };
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
    };

    var options = reactive({ chartOptions, chartData });
    return { options };
  },
  components: { Pie },
};
</script>

<style lang="scss" scoped></style>
