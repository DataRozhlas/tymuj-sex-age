var colors_gender_seq = {
  default: "#aaa",
  "muzi-1": "#28377E",
  "muzi-2": "#008AB8",
  "muzi-3": "#2DB59E",
  "muzi-4": "#A8E0B2",
  "muzi-5": "#D7F2B6",
  "zeny-1": "#BB1B30",
  "zeny-2": "#E63946",
  "zeny-3": "#F57653",
  "zeny-4": "#FDAB5E",
  "zeny-5": "#FFD080",
  "zeny-6": "#FEDD80",
  "zeny-7": "#FCF6B4",
};

Highcharts.setOptions({
  lang: {
    months: [
      "ledna",
      "února",
      "března",
      "dubna",
      "května",
      "června",
      "července",
      "srpna",
      "září",
      "října",
      "listopadu",
      "prosince",
    ],
    shortMonths: [
      "leden",
      "únor",
      "březen",
      "duben",
      "květen",
      "červen",
      "červenec",
      "srpen",
      "září",
      "říjen",
      "listopad",
      "prosinec",
    ],
    // shortMonths: ['led', 'úno', 'bře', 'dub', 'kvě', 'čen', 'čec', 'srp', 'zář', 'říj', 'lis', 'pro'],
    decimalPoint: ",",
    numericSymbols: [" tis.", " mil.", "mld.", "T", "P", "E"],
    rangeSelectorFrom: "od",
    rangeSelectorTo: "do",
    rangeSelectorZoom: "vyberte období:",
  },
});



const visContainerWidth = document.getElementById("horizontal-layout").offsetWidth;
let singlePlotWidth;
let plotX;
let plotY;
let singlePlotHeight;

function setSamePlotSize(e) {
  console.log(e, e.chartWidth, e.plotLeft);
  plotX = e.plotLeft;
  plotY = e.plotTop;
  singlePlotHeight = e.plotHeight;
  const plotBack = document
    .getElementById(e.renderTo.id)
    .getElementsByClassName("highcharts-plot-background")[0];
  plotY = plotBack.y.baseVal.value;

  document.getElementById("selected-sport-label").style["width"] = `${plotX - 30}px`;

  console.log("container width:", visContainerWidth);
  singlePlotWidth = Math.floor((visContainerWidth*0.92 - e.plotLeft) / 2);
  console.log(
    "BEFORE (muzi), chart width:",
    e.chartWidth,
    "plotLeft:",
    e.plotLeft
  );
  console.log("single plot width:", singlePlotWidth);

  let diff = singlePlotWidth - plotBack.width.baseVal.value;
  while (diff !== 0) {
    document.getElementById(e.renderTo.id).style["width"] = `${e.chartWidth + diff}px`;
    e.reflow();
    let newPlotW = document
      .getElementById(e.renderTo.id)
      .getElementsByClassName("highcharts-plot-background")[0].width.baseVal
      .value;
    // console.log(plotBack.width.baseVal.value, newPlotW)
    diff = singlePlotWidth - newPlotW;
    // e.update();
  }

  let lastPlotW = document
    .getElementById(e.renderTo.id)
    .getElementsByClassName("highcharts-plot-background")[0].width.baseVal
    .value;
  console.log(
    "AFTER (muzi), chart width:",
    e.chartWidth,
    "plot width:",
    lastPlotW
  );

  // document.getElementById("muzi-title").style["left"] = `${plotX + singlePlotWidth/2}px`
  document.getElementById("muzi-title").style["left"] = `${plotX}px`
  document.getElementById("muzi-title").style["width"] = `${singlePlotWidth}px`

  // console.log('after',e.chartWidth, plotBack.width.baseVal.value)
}

let plot_width = 100;

function fixOffset(e, chart) {
  // console.log(e)
  let pBack = document
    .getElementById(e.renderTo.id)
    .getElementsByClassName("highcharts-plot-background")[0];
  let pBackW = pBack.width.baseVal.value;

  let diff = singlePlotWidth - pBackW;

  // console.log(pBackW, singlePlotWidth)
  console.log(
    "diff",
    diff,
    e.chartWidth,
    singlePlotWidth,
    e.chartWidth + diff
  );

  let plotHeight = e.plotHeight;
  let hDiff = singlePlotHeight - plotHeight;

  // let plotYDiff = e.plotTop - plotY
  // console.log('y', e.plotTop, plotY, plotYDiff)

  if (diff !== 0) {
    // c  onsole.log('im in')
    document.getElementById(e.renderTo.id).style["width"] = `${
      e.chartWidth + diff
    }px`;
    if (chart !== 'single') {

      document.getElementById(e.renderTo.id).style["height"] = `${
        e.chartHeight + hDiff
      }px`;
    }
      e.reflow();
  }
  // console log
  let lastPlotW = document
    .getElementById(e.renderTo.id)
    .getElementsByClassName("highcharts-plot-background")[0].width.baseVal
    .value;
  console.log(
    "AFTER (zeny), chart width:", e.chartWidth,
    "plot width:", lastPlotW,
    "offsetLeft", document.getElementById(e.renderTo.id).offsetLeft
  );

  if (chart !== 'single') {
    document.getElementById("zeny-title").style["left"] = `${document.getElementById(e.renderTo.id).offsetLeft}px`
    // document.getElementById("muzi-title").style["left"] = `${plotX}px`
    document.getElementById("zeny-title").style["width"] = `${singlePlotWidth}px`
  }

}

function onChartLoad(e) {
  console.log(e);
  const plotBack = document
    .getElementById(e.renderTo.id)
    .getElementsByClassName("highcharts-plot-background")[0];
  console.log(plotBack);
  // const shouldBeHeight = (plotBack.width.baseVal.value / 4) * 3;
  const shouldBeHeight = (plotBack.width.baseVal.value / 4) * 9;
  const heightDiff = shouldBeHeight - plotBack.height.baseVal.value;
  console.log(heightDiff);
  if (heightDiff !== 0) {
    document.getElementById(e.renderTo.id).style.height = `${
      e.chartHeight + heightDiff
    }px`;
    e.reflow();
  }

}
function mtch(params, data) {
  if (
    data.text
      .split(" (")[0]
      .toLowerCase()
      .indexOf(params.term.toLowerCase()) > -1
  ) {
    return data;
  }
  return null;
}
let selCont = `<option></option>`;
// data.forEach(rec => {
  sex_vek_all.forEach((rec) => {
  // selCont += `<option value="${rec[5]}">${rec[0]} (${rec[1]})</option>`
  console.log('rec', rec.sport_nazev) // rec[5]
  selCont += `<option value="${rec.sport_nazev}">${rec.sport_nazev} (${rec.akt_uziv} uživatelů celkem)</option>`;
});
document.getElementById("sport_sel").innerHTML = selCont;

$(document).ready(function () {
  const sl = $("#sport_sel").select2({
    minimumInputLength: 1,
    placeholder: "Zkuste třeba cyklistiku nebo nohejbal",
    allowClear: true,
    matcher: mtch,
    width: "95%",
    language: {
      inputTooShort: function () {
        return "Napište aspoň 1 znak...";
      },
    },
  });

  sl.on("change", function (e) {
    console.log("selected", $("#sport_sel").select2("data")[0]);
    const selected = $("#sport_sel").select2("data")[0].id;
    console.log("selected", selected);
    if (selected !== '') {
    drawSingleSport(selected, "zeny");
    drawSingleSport(selected, "muzi");
    document.getElementById('selected-sport-label').innerHTML = selected
    }
    // 	draw('vsechny', data.find(e => e[5] == selected))

    // 	// gacka
    // 	if (typeof ga === 'function') {
    // 		ga('gtm1.send', 'event', 'vizualizace', 'graf', 'select_obce')
    // 		}
    // })
  });
});