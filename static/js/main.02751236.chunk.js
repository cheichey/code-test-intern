(this["webpackJsonpyumemi-code-test"]=this["webpackJsonpyumemi-code-test"]||[]).push([[0],{26:function(t,e,a){},47:function(t,e,a){},48:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),c=a(19),i=a.n(c),o=(a(26),a(3)),s=a.n(o),u=a(6),p=a(4),l=a(0),d=function(){return Object(l.jsx)("div",{className:"header",children:Object(l.jsx)("p",{children:"Test"})})},f=a(21),j=a(10),b=a.n(j),h="https://opendata.resas-portal.go.jp/api/v1",v=function(t){return b.a.get("".concat(h,"/prefectures"),{headers:{"X-API-KEY":t}})},O=function(t,e){return b.a.get("".concat(h,"/population/composition/perYear?cityCode=-&prefCode=").concat(t),{headers:{"X-API-KEY":e}})},x=function(t){var e=t.prefectureData,a=t.populationData,n=t.setPopulationData,r=t.apiKey;return Object(l.jsx)("div",{className:"checkboxes",children:null===e||void 0===e?void 0:e.map((function(t,e){return Object(l.jsxs)("li",{children:[null===t||void 0===t?void 0:t.prefName," ",Object(l.jsx)("input",{type:"checkbox","data-prefname":null===t||void 0===t?void 0:t.prefName,"data-key":e+1,onChange:function(t){return function(t){var e=t.currentTarget.dataset.key,c=t.currentTarget.dataset.prefname;if(!0===t.target.checked)!function(){var t=Object(u.a)(s.a.mark((function t(){var i,o,u,p;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(e,r);case 2:i=t.sent,(o=i.data.result.data[0]).data.prefCode=e,o.data.prefName=c,u=o.data.map((function(t){return t.value})),p=o.data.prefName,n([].concat(Object(f.a)(a),[{name:p,data:u}]));case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()();else{var i=a.filter((function(t){return t.name!==c}));n(i)}}(t)}})]})}))})},m=a(9),g=a.n(m),y=a(20),A=a.n(y),k=function(t){var e=t.populationData,a=Object(n.useState)({}),r=Object(p.a)(a,2),c=r[0],i=r[1];return Object(n.useEffect)((function(){i({title:{text:"\u4eba\u53e3\u69cb\u6210\u306e\u30b0\u30e9\u30d5"},subtitle:{text:"Source: RESAS API"},yAxis:{title:{text:"\u4eba\u53e3"}},xAxis:{title:{text:"\u5e74"}},legend:{layout:"vertical",align:"right",verticalAlign:"middle"},plotOptions:{series:{label:{connectorAllowed:!1},pointStart:1960,pointInterval:5}},series:e,responsive:{rules:[{condition:{maxWidth:500},chartOptions:{legend:{layout:"horizontal",align:"center",verticalAlign:"bottom"}}}]}})}),[e]),Object(l.jsx)("div",{className:"chart",children:Object(l.jsx)(A.a,{highcharts:g.a,options:c})})};a(47);var w=function(){var t=Object(n.useState)([]),e=Object(p.a)(t,2),a=e[0],r=e[1],c=Object(n.useState)([]),i=Object(p.a)(c,2),o=i[0],f=i[1],j=Object(n.useState)(""),b=Object(p.a)(j,2),h=b[0],O=b[1];return Object(n.useEffect)((function(){O(window.location.search.substring(1))}),[]),Object(n.useEffect)((function(){(function(){var t=Object(u.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(h);case 2:e=t.sent,r(e.data.result);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()().catch()}),[h]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(d,{}),Object(l.jsx)(x,{prefectureData:a,populationData:o,setPopulationData:f,apiKey:h}),Object(l.jsx)(k,{populationData:o})]})};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(w,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.02751236.chunk.js.map