import React, { useRef, useEffect, useState } from "react";
import { select, geoPath, geoMercator, min, max } from "d3";
import "./timeline.scss";
import useResizeObserver from './useResizeObserver.jsx'

function Timeline({data}) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  let dimensions = useResizeObserver(wrapperRef)
  setTimeout(()=>{dimensions ? console.log(dimensions.width): console.log('dimensions is null')}, 3000)
  useEffect(() => {
    const svg = select(svgRef.current);
    
    const { width, height } = 
      dimensions || wrapperRef.current.getBoundingClientRect();

    const projection = geoMercator().fitSize([width, height], data);
    const pathGenerator = geoPath().projection(projection);

    svg
      .selectAll(".country")
      .data(data.features)
      .join("path")
      .attr("class", "country")
      .attr('d', feature => pathGenerator(feature));
  }, [dimensions]);

  return (
    <div className='test' ref={wrapperRef}>
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default Timeline;
