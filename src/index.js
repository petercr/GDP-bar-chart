import * as d3 from "d3";

const TestData = [1, 5, 10];

// Fetch Dataset from freeCodeCamp API
const fetchData = () => {
  fetch(
    "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json"
  )
    .then(response => response.json())
    .then(data => {
      const Quarter = data.data.map((item, i) => item[0]);
      const Amount = data.data.map((item, i) => item[1]);
      console.dir(Quarter);
      console.dir(Amount);
      d3.select("container")
        .data(Amount)
        .enter()
        .insert("p")
        .attr("class", ".info")
        .text(d => d);
    })
    .catch(err => console.log(err));
};

fetchData();
