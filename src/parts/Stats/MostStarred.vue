<template>
  <div class="stats_container">
    <h1 class="stats_title">Most Starred</h1>
    <Bar
      :chart-options="options.chartOptions"
      :chart-data="options.chartData"
      :width="300"
      :height="250"
      chartId="lmost_starred_chart"
    ></Bar>
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,LinearScale, BarElement
} from "chart.js";
import {reactive}from "vue"
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, BarElement);
export default {
  props: ["stats"],

  setup({stats}) {
    console.log(stats)
    const labels = stats.map((item) => item.label);
    const data = stats.map((item) => item.value);
    console.log(labels)
    console.log(data)
    const chartData = {
      labels,
      datasets: [
        {
          label : "stars",
                   backgroundColor : ["#FF7694ad"],
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
  components: { Bar },
};
</script>

<style lang="scss" scoped></style>
