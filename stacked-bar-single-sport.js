let drawSingleSport = function(selected_sport, category) {
  console.log(selected_sport, category)
  console.log(category + 'nad_50')

  Highcharts.chart('vis-single-sport-' + category, {
    chart: {
        type: 'bar',
        // width: singlePlotWidth, 
        height: 100, // comment out if not necessary
        events: {
          load() {
            fixOffset(this, 'single');
          },
        },
    },
    title: false,
    // title: {
    //     text: selected_sport,
    //     useHTML: true,
    // },
    subtitle: false,
    // {
    //     useHTML: true,
    //     text: 'Většina Čechů říká, že třídí '
    // },
    credits: false,
    // {
    //   href : '',
    //   text : 'Zdroj: třeba doplnit'
    // },
    xAxis: {
      visible: false,
      // visible: category === 'zeny' ? false : true,
        categories: [ selected_sport ]
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
      shared: true,
      useHTML: true,
      formatter: function() {
        var s = '<span style="font-size: 0.9rem"><b>'+ this.x +'</b></span><br>';
  
        console.log(this, this.x)
        console.log(sex_vek_all.filter(a => a.sport_nazev === this.x))
        let currSportObject = sex_vek_all.filter(a => a.sport_nazev === this.x)
  
        s += 'Aktivní uživatelé celkem: <b>' + currSportObject[0].akt_uziv + '</b><br>'
        s += '<span style="color:#28377E"><b>Muži: ' + currSportObject[0].muzi_total + ' %</b></span> '
          + '| <span style="color:#BB1B30"><b>Źeny: ' + currSportObject[0].zeny_total + ' %</b></span><br>'
  
        $.each(this.points, function(i, point) {
            s += '<br/><span style="color:' + point.color + '">\u25CF</span> ' + point.series.name + ': <b>' + point.y + ' %</b>';
        });
  
        return s;
      }
    },
    exporting: {
        enabled: false
    },
    legend: {
      enabled: false,
      // reversed: true,
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
            groupPadding: 0.0,
            borderWidth: 0,
            // borderColor: '#fff',
            stacking: 'normal',
            pointWidth: 20
        }
    },
    series: [
      {
        name: '50 a vic',
        data : sex_vek_all.filter(a => a.sport_nazev === selected_sport).map(a => a[category + '_nad_50']),
        color: colors_gender_seq[category + '-5']
      },
      {
        name: '40-49',
        data : sex_vek_all.filter(a => a.sport_nazev === selected_sport).map(a => a[category + '_40_49']),
        color: colors_gender_seq[category + '-4']
      },
      {
        name: '30-39',
        data : sex_vek_all.filter(a => a.sport_nazev === selected_sport).map(a => a[category + '_30_39']),
        color: colors_gender_seq[category + '-3']
      },
      {
        name: '20-29',
        data : sex_vek_all.filter(a => a.sport_nazev === selected_sport).map(a => a[category + '_20_29']),
        color: colors_gender_seq[category + '-2']
      },
      {
        name: 'Pod 20',
        data : sex_vek_all.filter(a => a.sport_nazev === selected_sport).map(a => a[category + '_pod_20']),
        color: colors_gender_seq[category + '-1']
      },
  ]
  });
}