let muzi_chart = Highcharts.chart('vis-stacked-bar-muzi', {
  chart: {
      type: 'bar',
      height: 350, // comment out if not necessary
      events: {
        load() {
          setSamePlotSize(this);
        },
      },
  },
  title: false,
  subtitle: false,
  credits: false,
  xAxis: {
      categories:  sex_vek.map(a => a.sport_nazev), 
  },
  yAxis: {
      title: false,
      title: {
          text: 'všichni hráči sportu'
      },
      max: 100, 
      // showFirstLabel: false,
      labels: {
        formatter: function() {
            return this.value + ' %'
        } 
      },
      tickInterval: 50
  },
  tooltip: {
    valueSuffix: ' %',
    shared: true,
    backgroundColor: '#fffe',
    useHTML: true,
    formatter: function() {
      var s = '<span style="font-size: 0.9rem"><b>'+ this.x +'</b></span><br>';

      console.log(this, this.x)
      console.log(sex_vek.filter(a => a.sport_nazev === this.x))
      let currSportObject = sex_vek.filter(a => a.sport_nazev === this.x)

      s += 'Aktivní uživatelé celkem: <b>' + currSportObject[0].akt_uziv + '</b><br>'
      s += '<span style="color:#008AB8"><b>Muži: ' + currSportObject[0].muzi_total + ' %</b></span> '
        + '| <span style="color:#E63946"><b>Ženy: ' + currSportObject[0].zeny_total + ' %</b></span><br>'

      $.each(this.points, function(i, point) {
          s += '<br/><span style="color:' + point.color + '">\u25CF</span> ' + point.series.name + ': <b>' + point.y + ' %</b>';
      });

      return s;
  },
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
    name: '50 let a více',
    data : sex_vek.map(a => a.muzi_nad_50),
      color: colors_gender_seq['muzi-5']
  },
  {
    name: '40-49 let',
    data : sex_vek.map(a => a.muzi_40_49),
      color: colors_gender_seq['muzi-4']
  },
  {
    name: '30-39 let',
    data : sex_vek.map(a => a.muzi_30_39),
      color: colors_gender_seq['muzi-3']
  },
  {
    name: '20-29 let',
    data : sex_vek.map(a => a.muzi_20_29),
    color: colors_gender_seq['muzi-2']
  },
  {
    name: 'pod 20 let',
    data : sex_vek.map(a => a.muzi_pod_20),
    color: colors_gender_seq['muzi-1']
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
