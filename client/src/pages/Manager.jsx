import React from "react";
import { GetEmployee } from "../utils/GetEmployee";

const Manager = (email) => {
    const data = GetEmployee(email);
  
  return (
    <div>
      <h3>Employee details </h3>
      <div>
        <span>Email: {data.email}</span>
        <span>username: {data.username}</span>
        <span>role: {data.role}</span>
      </div>
    </div>
  );
};

export default Manager;
