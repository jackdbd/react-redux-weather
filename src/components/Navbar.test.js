import React from "react";
import { shallow, mount, render } from "enzyme";
import "../setupEnzymeTests";
import Navbar from "./Navbar";

describe("<Navbar />", () => {
  it("renders one <nav>", () => {
    const wrapper = mount(<Navbar />);
    expect(wrapper.find("nav")).toHaveLength(1);
  });
  it("has the correct class", () => {
    const wrapper = mount(<Navbar />);
    expect(
      wrapper
        .find("nav")
        .children()
        .first()
        .hasClass("nav-wrapper")
    ).toEqual(true);
  });
});
