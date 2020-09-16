const data = [
  {
    width: 200,
    height: 200,
    fill: "purple",
  },
];

const svg = d3.select("svg");

const rect = svg
  .append("rect")
  .data(data)
  .attr("width", (d) => {
    // console.log(d);
    return d.width;
  })
  .attr("height", (d) => {
    return d.height;
  })
  .attr("fill", (d) => {
    return d.fill;
  });
