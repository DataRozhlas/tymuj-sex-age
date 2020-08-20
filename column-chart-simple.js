const chartWidthColumn = document.getElementById('vis-column-chart-simple').offsetWidth > 600
  ? 600
  : document.getElementById('vis-column-chart-simple').offsetWidth;

Highcharts.chart('vis-column-chart-simple', {
  chart: {
    type: 'column',
    width: chartWidthColumn,
  },
  title: {
    text: 'Nejpopulárnější amatérské sporty',
    useHTML: true,
  },
  subtitle: {
    text: '75 procent aktivních klubů se věnuje osmi nejpopulárnějším sportům'
         + '<br><span style="color: #fff">.</span>',
    useHTML: true,
  },
  xAxis: {
    categories: ['fotbal', 'volejbal', 'hokej', 'florbal', 'beach', 'basketbal', 'futsal', 'badminton'],
    labels: {
      enabled: true,
    },
  },
  yAxis: {
    title: {
      text: 'počet aktivních týmů na Týmuj',
    },
    max: 7000,
    endOnTick: false,
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
      pointPadding: 0,
    },
  },
  series: [
    {
      name: 'Počet aktivních týmů na Týmuj',
      data: [5816, 3205, 2827, 2227, 898, 718, 664, 501],
      color: colors.sport,
    },
  ],
});

const chartWidthStacked = document.getElementById('vis-column-multiple-categories').offsetWidth > 600
  ? 600
  : document.getElementById('vis-column-multiple-categories').offsetWidth;

Highcharts.chart('vis-column-multiple-categories', {
  chart: {
    type: 'column',
    width: chartWidthStacked,
  },
  title: {
    text: 'Amatérské sporty v největších městech',
    useHTML: true,
  },
  subtitle: {
    useHTML: true,
    text: 'V Praze a Plzni je jednička fotbal, v Brně a Ostravě volejbal, v Bratislavě hokej'
          + '<br><span style="color: #fff">.</span>',
  },
  credits: {
    href: 'https://tymuj.cz/',
    text: 'Zdroj: Týmuj.cz',
  },
  xAxis: {
    categories: ['<span class="mesto">Praha</span>',
      '<span class="mesto">Brno</span>',
      '<span class="mesto">Bratislava</span>',
      '<span class="mesto">Plzeň</span>',
      '<span class="mesto">Ostrava</span>'],
    labels: {
      enabled: true,
    },
  },
  yAxis: {
    title: {
      text: 'podíl aktivních týmů na Týmuj',
    },
    reversedStacks: false,
    max: 100,
  },
  tooltip: {
    valueSuffix: ' %',
    shared: true,
  },
  exporting: {
    enabled: false,
  },
  plotOptions: {
    column: {
      dataLabels: {
        enabled: false,
      },
      stacking: 'percentage',
      enableMouseTracking: true,
      pointPadding: 0.1,
      groupPadding: 0.15,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: 'fotbal + futsal',
      data: [33.2, 20.7, 28.9, 23.3, 21.5],
      color: colors.fotbal,
    },
    {
      name: 'volejbal + beach',
      data: [18.5, 27.1, 7, 18.5, 24.2],
      color: colors.volejbal,
    },
    {
      name: 'florbal',
      data: [9.3, 7.4, 5.7, 11.8, 10.9],
      color: colors.florbal,
    },
    {
      name: 'hokej',
      data: [7.6, 12.3, 30.1, 12, 13.9],
      color: colors.hokej,
    },
    {
      name: 'basketbal',
      data: [4.4, 3.5, 4.1, 2, 3.6],
      color: colors.basketbal,
    },
    {
      name: 'ostatní',
      data: [27, 29, 24.2, 32.4, 25.9],
      color: colors.ostatni,
    },
  ],
});
