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

  