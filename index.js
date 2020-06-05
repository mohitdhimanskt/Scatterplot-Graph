var projectName = "scatter-plot";
localStorage.setItem('example_project', 'D3: Scatter Plot');
var url = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json";
var margin = {
  top: 100,
  right: 20,
  bottom: 30,
  left: 60 },

  width = 920 - margin-left - margin-right,
  height = 630 - margin.top - margin.bottom;

  var x = d3.scaleLinear().
  range([0,height]);

  var y = d3.scaleTime().
  range([0,height]);

  var color = d3.scaleOrdinal(d3.schemeCategory10);

  var timeFormat = d3.timeFormat("%M:%S");
  var xAxis = d3.axisBottom(x).tickFormat(d3.format("d"));

  var yAxis = d3.axisLeft(y).tickFormat(timeFormat);

  var div = d3.select("body").append("div")
  attr("class","tooltip").
    attr("id","tooltip").
    style("opacity",0);

    var svg = d3.select("body").append("svg").
    attr("width", width + margin.left + margin.right).
attr("height", height + margin.top + margin.bottom).
attr("class", "graph").
append("g").
attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var parsedTime;

d3.json(url, function(error, data){
    if(error)throw error;
    data.forEach(function (d){
        d.Place = +d.Place;
        var parsedTime = d.Time.split(':');
        d.Time = new Date(1970, 0, 1, 0, parsedTime[0], parsedTime[1]);
    });
    x.domain([d3.min(data, function (d){
        return d.year -1;
    }),
    d3.max(data, function (d){
        return d.year + 1;
    })]);
    y.domain(d3.extend(data, function (d){
        return d.Time;
    }));

    svg.append('g').
    attr("class", "x-axis").
    attr("id", "x-axis").
    attr("transform","translate(0," + height + ")").
    call(xAxis).
    append("text").
    attr("class", "x-axis-label").
    attr("x", width).
    attr("y", -6).
    style("text-anchor", "end").
    text("Year");


})