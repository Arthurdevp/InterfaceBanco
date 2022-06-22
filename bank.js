am5.ready(function() { 
var root = am5.Root.new("chartdiv");
 root.setThemes([ am5themes_Animated.new(root) ]);
 var chart = root.container.children.push(am5xy.XYChart.new(root, { panX: true, panY: true, wheelX: "panX", wheelY: "zoomX", pinchZoomX:true })); 
var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
cursor.lineY.set("visible", false);
var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
xRenderer.labels.template.setAll({ rotation: -90, centerY: am5.p50, centerX: am5.p100, paddingRight: 15 }); 
var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, { maxDeviation: 0.3, categoryField: "country", renderer: xRenderer, tooltip: am5.Tooltip.new(root, {}) })); 
var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, { maxDeviation: 0.3, renderer: am5xy.AxisRendererY.new(root, {}) }));
var series = chart.series.push(am5xy.ColumnSeries.new(root, { name: "Series 1", xAxis: xAxis, yAxis: yAxis, valueYField: "value", sequencedInterpolation: true, categoryXField: "country", tooltip: am5.Tooltip.new(root, { labelText:"{valueY}" }) }));
 series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5 });
  series.columns.template.adapters.add("fill", function(fill, target) { return chart.get("colors").getIndex(series.columns.indexOf(target)); }); 
series.columns.template.adapters.add("stroke", function(stroke, target) { 
return
chart.get("colors").getIndex(series.columns.indexOf(target)); });
var x = 50;
var data = [{ 
country: "Jan", 
value: 1212
}, { 
country: "Fev", 
value: 1212+x
}, { 
country: "Mar", 
value: 1212+8*x
}, { 
country: "Abr", 
value: 1212+10*x
}, { 
country: "Jun", 
value: 1212+4*x
}, { 
country: "Jul", 
value: 1212+9*x
}, { 
country: "Ago", 
value: 1212+6*x
}, { 
country: "Set", 
value: 1212+7*x
}, { 
country: "Out", 
value: 1212+2*x
}, { 
country: "Nov", 
value: 1212+5*x
}, { 
country: "Dez", 
value: 1212+3*x
}, { country: 
"Soma", 
value: 1212+12*x
}]; 
    xAxis.data.setAll(data); 
    series.data.setAll(data);  
     series.appear(1000);
     chart.appear(1000, 100);
     });
