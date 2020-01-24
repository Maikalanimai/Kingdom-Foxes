import React, { useRef, useEffect, useState } from "react";
import { select, geoPath, geoMercator } from "d3";
import "./timeline.scss";
import useResizeObserver from "./useResizeObserver.jsx";

function Timeline({ data, memberCountries }) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  let dimensions = useResizeObserver(wrapperRef);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const svg = select(svgRef.current);

    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

    const projection = geoMercator()
      .fitSize([width, height], selectedCountry ? selectedCountry : data)
      .precision(2);
    const pathGenerator = geoPath().projection(projection);

    svg
      .selectAll(".country")
      .data(data.features)
      .join("path")
      .on("click", feature => {
        setSelectedCountry(selectedCountry === feature ? null : feature);
      })
      .transition()
      .duration(1000)
      .attr("class", "country")
      .attr("id", feature => feature.properties.name.replace(/\s/g, ""))
      .attr("d", feature => pathGenerator(feature));
  }, [data, dimensions, selectedCountry]);

  return (
    <>
      <div className="test" ref={wrapperRef}>
        <svg className="test" ref={svgRef}></svg>
      </div>
      {memberCountries.map((e,i) =>
        e !== null ? (
          <style key={i}>
            {"#" + e.replace(/\s/g, "")} {"{fill: orange}"}
          </style>
        ) : (
          <></>
        )
      )}
    </>
  );
}

export default Timeline;
