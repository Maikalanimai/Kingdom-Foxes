import React, { Component } from "react";
import * as d3 from "d3";


class MyTimeline extends Component {
  componentDidMount() {
    const data = [ 2, 4, 2, 6, 8 ]
    // this.drawBarChart(data)
}
drawBarChart(data)  {
  const svgCanvas = d3.select(this.refs.canvas)
    .append('svg')
    .attr('width', 600)
    .atrr('height', 400)
    .style('border', '1px solid black')
}
  render() {
    // let data = [23, 26, 43, 12, 68];
    // d3.select('.chart')
    //   .selectAll("div")
    //   .data(data)
    //   .enter()
    //   .append("div")
    //   .style("width",(d)=> {
    //     return d * 3 + "px"
    //   })
    //   .style("background", "steelblue")
    //   .style('height', '30px')
    //   .text(d =>  d
    //   )
    return <div className="chart" ref='canvas'>test</div>;
  }
}

export default MyTimeline;
