import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const employeeApi = createApi({
  reducerPath: "employeeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:2020/" }),
  endpoints: (builder) => ({
    getEmployeeList: builder.query({
      query: () => "employees",
    }),
  }),
});

export const { useGetEmployeeListQuery } = employeeApi;
