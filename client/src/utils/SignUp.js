import axios from "axios";
import React, { useEffect, useState } from "react";
import { redirect } from "react-router-dom";


const SignUp = (username, email, password, role) => {
// const navigate = useNavigate();
  var data = false;
    console.log(email, password, role, "inside")
  axios
    .post(`http://localhost:3001/auth/signup`, {
      username:username,
      email: email,
      password: password,
      role: role,
    })
    .then((res) => {
        console.log(res)
        alert("User added successfully")
        // redirect("/dashboard")
        
    })
    .catch((err) => {
      console.log(err);
      alert("Invalid email or password")
    });

  return data;
};

export { SignUp };
