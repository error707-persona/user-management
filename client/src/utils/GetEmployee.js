import axios from "axios";
import { useState } from "react";
const GetEmployee = (email) => {
    const [data, setdata] = useState([]);
  axios
    .get(`http://localhost:3001/profile/employee`,{email:email})
    .then((res) => {
      setdata(res);
    })
    .catch((err) => {
      console.log(err);
    });

  return data;
};

export { GetEmployee };
