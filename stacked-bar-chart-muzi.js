let axisWidth =
  document.getElementById("vis-stacked-bar-muzi").getElementsByClassName('highcharts-xaxis-labels') // > 600
let chartWidth =
  document.getElementById("vis-stacked-bar-muzi").getElementsByClassName('highcharts-plot-background') // > 600
    // ? 600
    // : document.getElementById("vis-stacked-bar-muzis").offsetWidth;
// let chartWidth =
//   document.getElementById("vis-stacked-bar-muzi").getElementsByClassName('').offsetWidth > 600
//     ? 600
//     : document.getElementById("vis-stacked-bar-muzis").offsetWidth;

console.log(axisWidth, chartWidth, chartWidth.item(0))

let muzi_chart = Highcharts.chart('vis-stacked-bar-muzi', {
  chart: {
      type: 'bar',
      // width: visContainerWidth/2, 
      height: 600, // comment out if not necessary
      
      events: {
        load() {
          setSamePlotSize(this);
        },
      },
  },
  title: false,
  // {
  //     text: 'Stacked Bar Chart Multiple Categories', 
  //     useHTML: true,
  // },
  subtitle: false,
  //  {
  //     useHTML: true,
  //     text: 'Většina Čechů říká, že třídí odpadky, omezit konzumaci masa se ale chce jen málokomu' + '<br><span style="color: #fff">.</span>'
  // },
  credits: false,
  //  {
  //   href : '',
  //   text : 'Zdroj: třeba doplnit'
  // },
  xAxis: {
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
          stacking: 'normal'
      }
  },
  series: [
  {
    name: '50 a vic',
    data : sex_vek.map(a => a.muzi_nad_50),
      color: colors['muzi-5']
      // color: colors['2020']
  },
  {
    name: '40-49',
    data : sex_vek.map(a => a.muzi_40_49),
      color: colors['muzi-4']
      // color: colors['2020']
  },
  {
    name: '30-39',
    data : sex_vek.map(a => a.muzi_30_39),
      color: colors['muzi-3']
      // color: colors['2020']
  },
  {
    name: '20-29',
    data : sex_vek.map(a => a.muzi_20_29),
    color: colors['muzi-2']

    // color: colors['2019']
    
  },
  {
    name: 'Pod 20',
    data : sex_vek.map(a => a.muzi_pod_20),
    color: colors['muzi-1']

    // color: colors['2018']
  },
]
});


// Highcharts.chart('vis-stacked-bar-muzi', {
//   chart: {
//       // type: 'bar',
//       // width: chartWidth, 
//       height: 800 // comment out if not necessary
//   }
// }
