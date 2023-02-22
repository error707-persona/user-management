import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const EditUser = (username, email, password, role) => {
  // console.log(email, password, role, "inside")
  axios
    .post(`http://localhost:3001/admin/edit`, {
      username: username,
      email: "noble@hol.com",
      password: password,
      role: role,
    })
    .then((res) => {
      console.log(res);
      alert("updated user");
    })
    .catch((err) => {
      console.log(err);
    });
};

export { EditUser };
