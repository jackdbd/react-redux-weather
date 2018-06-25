import React from "react";
import { curveCardinal } from "d3-shape";
import { XYFrame } from "semiotic";

const Chart = props => {
  const { data, title, height, width } = props;
  const margin = {
    top: props.margin ? props.margin.top : 0,
    right: props.margin ? props.margin.right : 0,
    bottom: props.margin ? props.margin.bottom : 0,
    left: props.margin ? props.margin.left : 0
  };
  const { left, right, bottom, top } = margin;

  // TODO: add horizontal line (average temperature, pressure, humidity)

  return (
    <XYFrame
      title={title}
      size={[width, height]}
      lines={data}
      lineDataAccessor={"coordinates"}
      xAccessor={"day"}
      yAccessor={"value"}
      lineStyle={d => ({ stroke: d.color })}
      lineType={{ type: "line", interpolator: curveCardinal }}
      margin={{ left, bottom, right, top }}
      axes={[
        {
          orient: "left"
        },
        {
          orient: "bottom"
        }
      ]}
      hoverAnnotation={true}
    />
  );
};

export default Chart;
