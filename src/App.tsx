import { useState } from "react";
import { Provider } from "react-redux";
import { EmployeeList } from "./employee";
import { store } from "./store";

export const App = () => {
  return (
    <Provider store={store}>
      <EmployeeList />
    </Provider>
  );
};
