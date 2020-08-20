const chartWidthBar = document.getElementById('vis-bar-chart-simple').offsetWidth > 600
  ? 600
  : document.getElementById('vis-bar-chart-simple').offsetWidth;

Highcharts.chart('vis-bar-chart-simple', {
  chart: {
    type: 'bar',
    width: chartWidthBar,
    height: 600,
  },
  title: {
    text: 'Názvy klubů',
    useHTML: true,
  },
  subtitle: {
    text: 'Ze všech slov v názvech týmů vybíráme pouze typická klubová jména'
         + '<br><span style="color: #fff">.</span>',
    useHTML: true,
  },
  xAxis: {
    categories: ['Sokol', 'Spartak', 'Slavia', 'Slavoj', 'Sparta', 'Dukla', 'Slovan', 'Lokomotiva', 'Jiskra', 'Baník', 'Orel', 'Tatran', 'Kometa', 'Meteor', 'Viktoria', 'Bohemia(ns)', 'Technika', 'Čechie', 'Olymp(ie)', 'Dynamo', 'Tesla', 'Kovo', 'Admira'],
    labels: {
      enabled: true,
    },
  },
  yAxis: {
    title: {
      text: 'počet aktivních týmů na Týmuj',
    },
    max: 1250,
  },
  legend: {
    enabled: false,
  },
  tooltip: {
    valueSuffix: '',
  },
  exporting: {
    enabled: false,
  },
  credits: {
    href: 'https://tymuj.cz/',
    text: 'Zdroj: Týmuj.cz',
  },
  plotOptions: {
    column: {
      dataLabels: {
        enabled: true,
      },
    },
    series: {
      pointPadding: 1,
      pointWidth: 17,

    },
  },
  series: [
    {
      name: 'Počet aktivních týmů na Týmuj',
      data: [1217, 172, 171, 160, 154, 151, 131, 114, 111, 104,
        103, 85, 80, 70, 68, 50, 44, 42, 39, 22, 21, 11, 10],
      color: colors.sport,
    },
  ],
});
