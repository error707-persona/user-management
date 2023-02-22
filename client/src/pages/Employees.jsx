import React from "react";
import { GetEmployees } from "../utils/GetEmployees";
const Employees = () => {
  const data = GetEmployees();
  console.log(data.data);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <h3>Employee details </h3>
      {data.data?.map((item) => {
        return (
          <div style={{ padding: 10 }}>
            <div>email: {item.email}</div>
            <div>username: {item.username}</div>

            <div>role: {item.role}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Employees;
