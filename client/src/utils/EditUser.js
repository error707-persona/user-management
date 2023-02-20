import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const EditUser = (username, email, password, role) => {
// const navigate = useNavigate();
  var data = false;
    console.log(email, password, role, "inside")
  axios
    .post(`http://localhost:3001/auth/edit`, {
      username:username,
      email: email,
      password: password,
      role: role,
    })
    .then((res) => {
        console.log(res);
        
        
    })
    .catch((err) => {
      console.log(err);
      
    });

  return data;
};

export { EditUser };
