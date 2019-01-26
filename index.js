import * as d3 from "d3";
const TestData = [1,5,10,15,20,25];
let Dataset;


// Fetch Dataset from freeCodeCamp API 
const fetchData = () =>  {
   fetch("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json")
  .then(response => response.json())
  .then(data => {
    Dataset = data;
    console.dir(data);
    console.log(Dataset.data[0][1]);
    d3.select("#container")
      .data(TestData)
      .enter()
      .append('div')
      .text(d => d)
    
    // d3.select('container')
    // .data(data)  
    // .enter()
    // .append('div')
    //   .attr('width', "900px")
    //   .attr('height', '600px')
    //   .style('background-color', "#dff0d8") 
    //   .text(d => d.data[0][1] );




  })
  .catch(err => console.log(err));
}

fetchData();
