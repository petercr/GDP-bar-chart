const d3 = require("d3");

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

fetchData();

