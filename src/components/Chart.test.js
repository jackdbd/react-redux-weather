import React from "react";
import { shallow, mount, render } from "enzyme";
import "../setupEnzymeTests";
import Chart from "./Chart";
import { XYFrame } from "semiotic";

describe("<Chart />", () => {
  it("renders a <h1> with the correct text", () => {
    const wrapper = shallow(<Chart />);
    expect(wrapper.find(XYFrame)).toHaveLength(1);
  });
});
