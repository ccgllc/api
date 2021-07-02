import { Bar } from 'vue-chartjs';
export default {
    extends: Bar,
    mounted() {
        this.chartData.labels = window.dashboardData.userRolesChart.labels;
        this.chartData.datasets[0].data = window.dashboardData.userRolesChart.datasets[0].data;
        this.renderChart(this.chartData, this.options);
        let chart = this.$data._chart;
        this.$refs.canvas.onclick = function(evt) {
            var metric = chart.getElementsAtEvent(evt);
            if (metric[0]) {
                var chartData = metric[0]['_chart'].config.data;
                var idx = metric[0]['_index'];

                var label = chartData.labels[idx];
                var value = chartData.datasets[0].data[idx];

                var url = "/users/roles/" + label;
                // console.log(url);
                // alert(url);
                window.location = url
            }
        }
    },
    data() {
        return {
            chartData: {
                labels: [],
                datasets: [
                    {
                        backgroundColor: ['#30a987','#343b4c', '#439BD1', '#dedddd', '#ffe08a'],
                        data: [],
                        categoryPercentage: 0.75,
                        barPercentage: 0.75
                    }
                ]
            },
            options: {
                title: { display: true, text: 'System Users By Role'}, 
                legend: {display: false},
                responsive: true, 
                maintainAspectRatio: false,
                scales: {
                  yAxes: [{
                    ticks: {
                      beginAtZero: true
                    },
                    gridLines: {
                      display: true
                    }
                  }],
                  xAxes: [{
                    gridLines: {
                      display: false
                    },
                  }],
                }
            } 
        }
    }
}