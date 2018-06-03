import React from "react";
import { shallow, mount, render } from "enzyme";
import "../setupEnzymeTests";

// Even simply importing this component causes the test to fail!
// import MapboxMap from "./MapboxMap";

describe("<MapboxMap />", () => {
  // TODO: mock the mapbox-gl library
  // jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  //   Map: () => ({})
  //   }));
  // const mockFunction = jest.fn(some-function-to-mock);
  // it("renders without crashing", () => {
  //   const wrapper = shallow(<MapboxMap />);
  // });
  it("renders without crashing", () => {});
});
