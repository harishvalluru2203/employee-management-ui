import { combineReducers } from "@reduxjs/toolkit";
import { employeeApi } from "../services";

export const employeeRootReducer = combineReducers({
  [employeeApi.reducerPath]: employeeApi.reducer,
});
