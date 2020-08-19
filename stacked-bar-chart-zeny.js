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
      title: {
        text: 'všichni hráči sportu'
      },
      max: 100, 
      labels: {
        formatter: function() {
            return this.value + ' %'
        },
        // overflow: 'allow',
        align: 'right',
        // style: {
        //   textAlign: right
        // }
        // rotation: 0,
      },
      // showFirstLabel: false, 
      align: 'right',
      // stackLabels: {
      //   enabled: true,
      //   style: {
      //     color: 'gray',
      //     fontWeight: 'regular'
      //   },
      //   format: '{total} %'
      // },
      tickInterval: 50
  }, 
  tooltip: {
    valueSuffix: ' %',
    shared: true,
    backgroundColor: '#fffe',
    style: {
    },
    useHTML: true,
    formatter: function() {
      var s = '<span style="font-size: 0.9rem"><b>'+ this.x +'</b></span><br>';

      console.log(this, this.x)
      console.log(sex_vek.filter(a => a.sport_nazev === this.x))
      let currSportObject = sex_vek.filter(a => a.sport_nazev === this.x)

      s += 'Aktivní uživatelé celkem: <b>' + currSportObject[0].akt_uziv + '</b><br>'
      s += '<span style="color:#28377E"><b>Muži: ' + currSportObject[0].muzi_total + ' %</b></span> '
        + '| <span style="color:#BB1B30"><b>Źeny: ' + currSportObject[0].zeny_total + ' %</b></span><br>'

      $.each(this.points, function(i, point) {
          s += '<br/><span style="color:' + point.color + '">\u25CF</span> ' + point.series.name + ': <b>' + point.y + ' %</b>';
      });

      return s;
  },
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
      name: '50 let a více',
      data : sex_vek.map(a => a.zeny_nad_50),
      color: colors_gender_seq['zeny-5']
    },
    {
      name: '40-49 let',
      data : sex_vek.map(a => a.zeny_40_49),
      color: colors_gender_seq['zeny-4']
    },
    {
      name: '30-39 let',
      data : sex_vek.map(a => a.zeny_30_39),
      color: colors_gender_seq['zeny-3']
    },
    {
      name: '20-29 let',
      data : sex_vek.map(a => a.zeny_20_29),
      color: colors_gender_seq['zeny-2']
    },
    {
      name: 'Pod 20 let',
      data : sex_vek.map(a => a.zeny_pod_20),
      color: colors_gender_seq['zeny-1']
    },
]
});