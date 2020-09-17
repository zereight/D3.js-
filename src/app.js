const data = [
  {
    width: 200,
    height: 100,
    fill: "green",
  },
  {
    width: 100,
    height: 60,
    fill: "orange",
  },
  {
    width: 50,
    height: 30,
    fill: "skyblue",
  },
];

const svg = d3.select("svg");

const rects = svg.selectAll("rect").data(data);

rects
  .attr("width", (d, i, n) => d.width)
  .attr("height", (d, i, n) => d.height)
  .attr("fill", (d, i, n) => d.fill);

rects
  .enter()
  .append("rect")
  .attr("width", (d, i, n) => d.width)
  .attr("height", (d, i, n) => d.height)
  .attr("fill", (d, i, n) => d.fill);
