import React from "react";
import { shallow, mount, render } from "enzyme";
import "../setupEnzymeTests";
import Chart from "./Chart";
import { XYFrame } from "semiotic";

describe("<Chart />", () => {
  it("renders one (and only one) <XYFrame />", () => {
    const wrapper = shallow(<Chart />);
    expect(wrapper.find(XYFrame)).toHaveLength(1);
  });
});
