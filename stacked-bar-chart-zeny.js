let zeny_chart = Highcharts.chart('vis-stacked-bar-zeny', {
  chart: {
      type: 'bar',
      // width: singlePlotWidth, 
      // height: 800, // comment out if not necessary
      events: {
        load() {
          fixOffset(this);
        },
      },
  },
  title: false,
  subtitle: false,
  credits: false,
  xAxis: {
      visible: false,
      categories:  sex_vek.map(a => a.sport_nazev), 
  },
  yAxis: {
      title: false,
      max: 100, 
      labels: {
        formatter: function() {
            return this.value + '%'
        } 
      }
  }, 
  tooltip: {
    valueSuffix: ' %',
    shared: true
  },
  exporting: {
      enabled: false
  },
  legend: {
    reversed: true,
    layout: 'vertical',
  },
  plotOptions: {
      bar: {
          dataLabels: {
              enabled: false
          },
          enableMouseTracking: true,
          pointPadding: 0.1,
          groupPadding: 0.0,
          borderWidth: 0,
          // borderColor: '#fff',
          stacking: 'normal'
      }
  },
  series: [
    {
      name: '50 a vic',
      data : sex_vek.map(a => a.zeny_nad_50),
      color: colors['zeny-5']
    },
    {
      name: '40-49',
      data : sex_vek.map(a => a.zeny_40_49),
      color: colors['zeny-4']
    },
    {
      name: '30-39',
      data : sex_vek.map(a => a.zeny_30_39),
      color: colors['zeny-3']
    },
    {
      name: '20-29',
      data : sex_vek.map(a => a.zeny_20_29),
      color: colors['zeny-2']
    },
    {
      name: 'Pod 20',
      data : sex_vek.map(a => a.zeny_pod_20),
      color: colors['zeny-1']
    },
]
});

// let axis_width = axisWidth.item(0).getBoundingClientRect().width
// console.log(axis_width, chartWidth, chartWidth.item(0).width.baseVal.value)
// let chart_width = document.getElementById("vis-stacked-bar-muzi").offsetWidth
// let plot_width = (2 * chartWidth - axis_width) / 2

// document.getElementById('vis-stacked-bar-muzi').setAttribute('style', 'max-width: 500px; height: 500px') // .setAttribute('style', 'height: 500px')
// document.getElementById('vis-stacked-bar-zeny').setAttribute('style', 'max-width: 200px') //.setAttribute('style', 'height: 500px')
// muzi_chart.update({
//   chart: {
//     // height: 900,
//     width: 500, // plot_width + axis_width
//   }
// })

// zeny_chart.update({
//   chart: {
//     // x: 500,
//     width: 400,
//     height: 500
//   }
// })