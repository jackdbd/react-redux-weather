import React from "react";
import { shallow, mount, render } from "enzyme";
import { Provider } from "react-redux";
import { App, AppWithRedux } from "./App";
import { initialState } from "../reducers/weatherReducer";
import store from "../store";
import "../setupEnzymeTests";

/*
  Since <App /> is not hooked up to the redux store, we need to pass the
  content of initialState manually.
*/
describe("<App /> (not connected to redux)", () => {
  const { data, isLoading, errorMessage } = initialState;
  it("should render without crashing", () => {
    const wrapper = shallow(
      <App data={data} isLoading={isLoading} errorMessage={errorMessage} />
    );
  });
});

describe("<AppWithRedux /> (connected to redux store)", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <AppWithRedux />
      </Provider>
    );
  });
});
