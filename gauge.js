// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 
    let samplesArr=data.samples;
    let metadataArr=data.metadata;

    // 4. Create a variable that filters the samples for the object with the desired sample number.
    let choosenSampler=(samplesArr.filter(object=>object.id==sample))[0]

    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    
    
    // 2. Create a variable that holds the first sample in the metadata array.
    

    // Create variables that hold the otu_ids, otu_labels, and sample_values.
    

    // 3. Create a variable that holds the washing frequency.
     
    // Create the yticks for the bar chart.

    // Use Plotly to plot the bar data and layout.
    Plotly.newPlot();
    
    // Use Plotly to plot the bubble data and layout.
    Plotly.newPlot();
   
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [
      {
        value:washingFreq,
        type:"indicator",
        mode:"gauge+number",
        steps: [
          { range: [0, 2], color: "red" },
          { range: [2, 4], color: "orange" },
          { range: [4, 6], color: "yellow" },
          { range: [6, 8], color: "green" },
          { range: [8, 10], color: "royalblue" }

        ],
        gauge: {
          axis: { range: [null, 10], tickwidth: 1, tickcolor: "black" },
        }
      }
     
    ];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
       title:"Scrubs per Week"
    };

    // 6. Use Plotl"y to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData);
  });
}
