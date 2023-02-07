import { configureStore } from "@reduxjs/toolkit";
import { employeeApi } from "./employee";
import { employeeRootReducer } from "./employee/reducers/employeeRootReducer";

export const store = configureStore({
  reducer: employeeRootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(employeeApi.middleware),
});
