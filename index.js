import * as d3 from "d3";


// Fetch Dataset from freeCodeCamp API 
const fetchData = () =>  {
   fetch("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json")
  .then(response => response.json())
  .then(data => {
    console.dir(data);
    d3.select('container').append('svg')
      .attr('width', "900px")
      .attr('height', '600px')
      .style('background', "#dff0d8");




  })
  .catch(err => console.log(err));
}

fetchData();

