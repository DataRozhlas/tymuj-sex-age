const sex_vek = [{
  sport_nazev: 'Fotbal', muzi_total: 93.6, muzi_pod_20: 26.2, muzi_20_29: 17.3, muzi_30_39: 28.9, muzi_40_49: 15.9, muzi_nad_50: 5.3, zeny_total: 6.4, zeny_pod_20: 2.1, zeny_20_29: 1.4, zeny_30_39: 1.7, zeny_40_49: 1.0, zeny_nad_50: 0.2, akt_uziv: 65104,
},
{
  sport_nazev: 'Volejbal', muzi_total: 52.1, muzi_pod_20: 2.6, muzi_20_29: 6.7, muzi_30_39: 19.7, muzi_40_49: 13.8, muzi_nad_50: 9.3, zeny_total: 48.0, zeny_pod_20: 4.5, zeny_20_29: 10.5, zeny_30_39: 18.3, zeny_40_49: 9.9, zeny_nad_50: 4.8, akt_uziv: 63176,
},
{
  sport_nazev: 'Lední hokej', muzi_total: 97.9, muzi_pod_20: 6.0, muzi_20_29: 12.9, muzi_30_39: 35.9, muzi_40_49: 31.6, muzi_nad_50: 11.5, zeny_total: 2.1, zeny_pod_20: 0.3, zeny_20_29: 0.5, zeny_30_39: 0.6, zeny_40_49: 0.5, zeny_nad_50: 0.2, akt_uziv: 61897,
},
{
  sport_nazev: 'Florbal', muzi_total: 86.8, muzi_pod_20: 8.3, muzi_20_29: 21.2, muzi_30_39: 35.3, muzi_40_49: 17.7, muzi_nad_50: 4.3, zeny_total: 13.2, zeny_pod_20: 2.4, zeny_20_29: 5.0, zeny_30_39: 4.0, zeny_40_49: 1.5, zeny_nad_50: 0.3, akt_uziv: 32091,
},
{
  sport_nazev: 'Beach volejbal', muzi_total: 51.3, muzi_pod_20: 1.4, muzi_20_29: 4.1, muzi_30_39: 22.4, muzi_40_49: 17.6, muzi_nad_50: 5.8, zeny_total: 48.8, zeny_pod_20: 1.2, zeny_20_29: 5.9, zeny_30_39: 25.6, zeny_40_49: 12.2, zeny_nad_50: 3.9, akt_uziv: 9738,
},
{
  sport_nazev: 'Futsal', muzi_total: 96.9, muzi_pod_20: 2.1, muzi_20_29: 16.6, muzi_30_39: 48.5, muzi_40_49: 23.4, muzi_nad_50: 6.3, zeny_total: 3.1, zeny_pod_20: 0.0, zeny_20_29: 0.7, zeny_30_39: 2.0, zeny_40_49: 0.2, zeny_nad_50: 0.2, akt_uziv: 9121,
},
{
  sport_nazev: 'Basketbal', muzi_total: 66.9, muzi_pod_20: 4.4, muzi_20_29: 11.1, muzi_30_39: 24.8, muzi_40_49: 14.9, muzi_nad_50: 11.7, zeny_total: 33.0, zeny_pod_20: 5.9, zeny_20_29: 9.9, zeny_30_39: 10.4, zeny_40_49: 5.0, zeny_nad_50: 1.8, akt_uziv: 8814,
},
{
  sport_nazev: 'Badminton', muzi_total: 66.6, muzi_pod_20: 2.1, muzi_20_29: 5.2, muzi_30_39: 24.3, muzi_40_49: 21.0, muzi_nad_50: 14.0, zeny_total: 33.4, zeny_pod_20: 1.7, zeny_20_29: 3.5, zeny_30_39: 14.2, zeny_40_49: 9.7, zeny_nad_50: 4.3, akt_uziv: 5423,
},
];
/*
 {"sport_nazev":"Cvičení","muzi_total":19.9,"muzi_pod_20":1.7,"muzi_20_29":2.9,"muzi_30_39":8.8,"muzi_40_49":4.8,"muzi_nad_50":1.7,"zeny_total":80.2,"zeny_pod_20":2.5,"zeny_20_29":10.8,"zeny_30_39":29.8,"zeny_40_49":22.5,"zeny_nad_50":14.6,"akt_uziv":3042},
  {"sport_nazev":"Hokejbal","muzi_total":95.5,"muzi_pod_20":17.6,"muzi_20_29":19.3,"muzi_30_39":32.0,"muzi_40_49":21.7,"muzi_nad_50":4.9,"zeny_total":4.6,"zeny_pod_20":0.5,"zeny_20_29":1.4,"zeny_30_39":1.7,"zeny_40_49":1.0,"zeny_nad_50":0.0,"akt_uziv":2837},
  {"sport_nazev":"Fitness","muzi_total":13.7,"muzi_pod_20":1.2,"muzi_20_29":3.9,"muzi_30_39":5.3,"muzi_40_49":2.4,"muzi_nad_50":0.9,"zeny_total":86.4,"zeny_pod_20":2.4,"zeny_20_29":18.9,"zeny_30_39":35.2,"zeny_40_49":22.8,"zeny_nad_50":7.1,"akt_uziv":2613},
  {"sport_nazev":"Nohejbal","muzi_total":92.9,"muzi_pod_20":2.8,"muzi_20_29":8.2,"muzi_30_39":28.4,"muzi_40_49":31.8,"muzi_nad_50":21.7,"zeny_total":7.0,"zeny_pod_20":0.4,"zeny_20_29":0.7,"zeny_30_39":2.2,"zeny_40_49":2.4,"zeny_nad_50":1.3,"akt_uziv":2422},
  {"sport_nazev":"Baseball","muzi_total":87.4,"muzi_pod_20":45.2,"muzi_20_29":14.7,"muzi_30_39":12.0,"muzi_40_49":12.5,"muzi_nad_50":3.0,"zeny_total":12.5,"zeny_pod_20":5.4,"zeny_20_29":0.8,"zeny_30_39":2.3,"zeny_40_49":3.7,"zeny_nad_50":0.3,"akt_uziv":2336},
  {"sport_nazev":"Házená","muzi_total":57.4,"muzi_pod_20":25.1,"muzi_20_29":11.4,"muzi_30_39":9.0,"muzi_40_49":7.8,"muzi_nad_50":4.1,"zeny_total":42.5,"zeny_pod_20":13.5,"zeny_20_29":11.9,"zeny_30_39":8.4,"zeny_40_49":7.3,"zeny_nad_50":1.4,"akt_uziv":2296},
  {"sport_nazev":"Softball","muzi_total":49.0,"muzi_pod_20":2.5,"muzi_20_29":14.2,"muzi_30_39":15.2,"muzi_40_49":11.7,"muzi_nad_50":5.4,"zeny_total":51.0,"zeny_pod_20":7.6,"zeny_20_29":21.1,"zeny_30_39":12.5,"zeny_40_49":7.1,"zeny_nad_50":2.7,"akt_uziv":1726},
  {"sport_nazev":"Cyklistika","muzi_total":78.3,"muzi_pod_20":14.5,"muzi_20_29":6.1,"muzi_30_39":16.8,"muzi_40_49":26.0,"muzi_nad_50":14.9,"zeny_total":21.7,"zeny_pod_20":4.3,"zeny_20_29":2.1,"zeny_30_39":6.2,"zeny_40_49":6.5,"zeny_nad_50":2.6,"akt_uziv":1470},
  {"sport_nazev":"Tenis","muzi_total":84.7,"muzi_pod_20":6.9,"muzi_20_29":8.5,"muzi_30_39":23.6,"muzi_40_49":25.6,"muzi_nad_50":20.1,"zeny_total":15.1,"zeny_pod_20":4.5,"zeny_20_29":3.6,"zeny_30_39":3.6,"zeny_40_49":1.8,"zeny_nad_50":1.6,"akt_uziv":1221},
  {"sport_nazev":"Hasičský sport","muzi_total":70.1,"muzi_pod_20":5.2,"muzi_20_29":28.0,"muzi_30_39":21.3,"muzi_40_49":12.9,"muzi_nad_50":2.7,"zeny_total":29.9,"zeny_pod_20":4.1,"zeny_20_29":13.6,"zeny_30_39":9.3,"zeny_40_49":2.7,"zeny_nad_50":0.2,"akt_uziv":1143},
  {"sport_nazev":"Stolní tenis","muzi_total":87.8,"muzi_pod_20":4.1,"muzi_20_29":14.1,"muzi_30_39":21.4,"muzi_40_49":23.0,"muzi_nad_50":25.2,"zeny_total":12.1,"zeny_pod_20":1.2,"zeny_20_29":2.0,"zeny_30_39":5.0,"zeny_40_49":1.2,"zeny_nad_50":2.7,"akt_uziv":1136},
  {"sport_nazev":"Tanec","muzi_total":25.3,"muzi_pod_20":4.4,"muzi_20_29":7.1,"muzi_30_39":9.8,"muzi_40_49":2.5,"muzi_nad_50":1.5,"zeny_total":74.7,"zeny_pod_20":11.8,"zeny_20_29":26.0,"zeny_30_39":26.9,"zeny_40_49":6.6,"zeny_nad_50":3.4,"akt_uziv":1128},
  {"sport_nazev":"Lakros","muzi_total":54.5,"muzi_pod_20":5.3,"muzi_20_29":16.0,"muzi_30_39":19.5,"muzi_40_49":9.7,"muzi_nad_50":4.0,"zeny_total":45.5,"zeny_pod_20":5.6,"zeny_20_29":15.3,"zeny_30_39":16.8,"zeny_40_49":6.2,"zeny_nad_50":1.6,"akt_uziv":1104}

*/
