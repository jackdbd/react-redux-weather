import React from "react";
import { curveCardinal } from "d3-shape";
import { XYFrame } from "semiotic";

const Chart = props => {
  const { data, title, height, width } = props;

  // TODO: add horizontal line (average temperature, pressure, humidity)

  return (
    <XYFrame
      title={title}
      size={[width, height]}
      lines={data}
      lineDataAccessor={"coordinates"}
      xAccessor={"day"}
      yAccessor={"temp"}
      lineStyle={d => ({ stroke: d.color })}
      lineType={{ type: "line", interpolator: curveCardinal }}
      margin={{ left: 40, bottom: 30, right: 10, top: 10 }}
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
