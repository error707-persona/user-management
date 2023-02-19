import axios from "axios";
import React, { useEffect, useState } from "react";

import Login  from "../pages/Login";
const SignIn = (email, password, role) => {
// const navigate = useNavigate();
  var data = false;
    console.log(email, password, role, "inside")
  axios
    .post(`http://localhost:3001/auth/login`, {
      email: email,
      password: password,
      role: role,
    })
    .then((res) => {
        // console.log(res)
        alert("user authenticated")
       
        // navigate('/login', {replace:true});

    
    })
    .catch((err) => {
      console.log(err);
      alert("Invalid email or password")
    });

    return data;

 
};

export { SignIn };
