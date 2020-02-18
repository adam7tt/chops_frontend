<template>
    <div id="timeline">
      <apexchart type=rangeBar height=350 :options="chartOptions" :series="series" />
    </div>
</template>

<script>
import ApexCharts from 'apexcharts'
export default {
    name: 'timeline',
    components: {
        ApexCharts
    },
    data() {
        return{
            series: [{
                name: 'Bob',
                data: [{
                    x: 'Design',
                    y: [new Date('2019-03-02').getTime(), new Date('2019-03-03').getTime()]
                }, {
                    x: 'Code',
                    y: [new Date('2019-03-02').getTime(), new Date('2019-03-04').getTime()]
                    
                }, {
                    x: 'Test',
                    y: [new Date('2019-03-04').getTime(), new Date('2019-03-07').getTime()]
                }, {
                    x: 'Deployment',
                    y: [new Date('2019-03-11').getTime(), new Date('2019-03-12').getTime()]
                }]
            }, {
                name: 'Joe',
                data: [{
                    x: 'Design',
                    y: [new Date('2019-03-01').getTime(), new Date('2019-03-02').getTime()] 
                }, {
                    x: 'Code',
                    y: [new Date('2019-03-03').getTime(), new Date('2019-03-07').getTime()] 
                }, {
                    x: 'Test',
                    y: [new Date('2019-03-06').getTime(), new Date('2019-03-09').getTime()]
                }, {
                    x: 'Deployment',
                    y: [new Date('2019-03-10').getTime(), new Date('2019-03-11').getTime()]
                }]
            }],
            chartOptions: {
                plotOptions: {
                    bar: {
                        horizontal: true,
                    }
                },
                yaxis: {
                min: new Date('2019-03-01').getTime(),
                max: new Date('2019-03-14').getTime()
                },
                xaxis: {
                    type: 'datetime'
                },
                fill: {
                type: 'gradient',
                gradient: {
                        shade: 'light',
                        type: "vertical",
                        shadeIntensity: 0.25,
                        gradientToColors: undefined,
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [50, 0, 100, 100]
                    }
                }
            }
        }   
    }
}
</script>