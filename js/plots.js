function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  
  function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
  }

  function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      var PANEL = d3.select("#sample-metadata");
  
      PANEL.html("");
      let str1 = "ID: " + result.id;
      PANEL.append("h6").text(str1);
      let str2 = "ETHNICITY: " + result.ethnicity;
      PANEL.append("h6").text(str2);
      let str3 = "GENDER: " + result.gender
      PANEL.append("h6").text(str3);
      let str4 = "AGE: " + result.age
      PANEL.append("h6").text(str4); 
      let str5 = "LOCATION: " + result.location
      PANEL.append("h6").text(str5);
      let str6 = "BBTYPE: " + result.bbtype
      PANEL.append("h6").text(str6);
      let str7 = "WFREQ: " + result.bbtype
      PANEL.append("h6").text(str7);
    });
  }

  d3.selectAll("#dropdownMenu").on("change", updatePlotly);
  function updatePlotly() {
    var dropdownMenu = d3.select("#dropdownMenu");
    var dataset = dropdownMenu.property("value");
  
    var xData = [1, 2, 3, 4, 5];
    var yData = [];
  
    if (dataset === 'dataset1') {
      yData = [1, 2, 4, 8, 16];
    };
  
    if (dataset === 'dataset2') {
      yData = [1, 10, 100, 1000, 10000];
    };
  
    var trace = {
      x: [xData],
      y: [yData],
    };
    Plotly.restyle("plot", trace);
  };
  
  init();