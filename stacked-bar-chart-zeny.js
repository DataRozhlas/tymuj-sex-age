// let chartWidth =
//   document.getElementById("vis-stacked-bar-multiple-categories").offsetWidth > 600
//     ? 600
//     : document.getElementById("vis-stacked-bar-multiple-categories").offsetWidth;

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
  // title: {
  //     enabled: false,
  //     text: 'Stacked  Categories', 
  //     useHTML: true,
  // },
  subtitle: false,
  // {
  //     useHTML: true,
  //     text: 'Většina Čechů říká, že třídí '
  // },
  credits: {
    href : '',
    text : 'Zdroj: třeba doplnit'
  },
  xAxis: {
      visible: false,
      categories:  sex_vek.map(a => a.sport_nazev), 

      // categories: ['třídím odpadky', 'šetřím vodou (sprchování, mytí nádobí..)', 'omezuji igelitky', 'vyhýbám se nadbytečným obalům', 'kupuji lokální potraviny', 'nosím si vlastní láhev na vodu', 'celkově omezuji spotřebu', 'nekupuji balenou vodu', 'nakupuji věci z druhé ruky', 'jezdím MHD místo autem', 'nelétám letadlem', 'používám přírodní kosmetiku', 'vzdělávám se o ekologii', 'podepisuji petice', 'snižuji konzumaci masa', 'chodím na demonstrace za klima']
  },
  yAxis: {
      title: false,
      // title: {
      //     text: 'nepovolené jízdy za návěstidla'
      // },
      max: 100, 
      // showFirstLabel: false,
      labels: {
        formatter: function() {
        //   if (this.isLast) {
        //     return this.value + '<br>' +
        //                 '<span class="light-gray-text">jízd za</span>' + '<br>' +
        //                 '<span class="light-gray-text">návěstidla</span>'
        //   } else {
            return this.value + '%'
        //   }
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
    // floating: true
  },
  plotOptions: {
      bar: {
          dataLabels: {
              enabled: false
          },
          enableMouseTracking: true,
          pointPadding: 0.1,
          groupPadding: 0.15,
          borderWidth: 0.5,
          // borderColor: '#fff',
          stacking: 'normal'
      }
  },
  series: [
    {
      name: '50 a vic',
      data : sex_vek.map(a => a.zeny_nad_50),
      // color: colors['red-1']
      color: colors['red-5']
    },
    {
      name: '40-49',
      data : sex_vek.map(a => a.zeny_40_49),
      color: colors['red-4']
      // color: colors['red-2']
    },
    {
      name: '30-39',
      data : sex_vek.map(a => a.zeny_30_39),
      color: colors['red-3']
    },
    {
      name: '20-29',
      data : sex_vek.map(a => a.zeny_20_29),
  
      color: colors['red-2']
      // color: colors['red-4']
      
    },
    {
      name: 'Pod 20',
      data : sex_vek.map(a => a.zeny_pod_20),
  
      color: colors['red-1']
      // color: colors['red-5']
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