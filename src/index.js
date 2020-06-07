import * as d3 from 'd3';

console.log(d3);

// Fetch Dataset from freeCodeCamp API 
const fetchData = () =>  {
   fetch("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json")
  .then(response => response.json())
  .then(data => {
    console.dir(data);
    return data;
  })
  .catch(err => console.log(err));
}

const d3Data = fetchData();
