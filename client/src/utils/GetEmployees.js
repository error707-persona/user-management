import axios from "axios";
import { useState } from "react";
const GetEmployees = () => {
    const [data, setdata] = useState([]);
  axios
    .get(`http://localhost:3001/profile/employees`)
    .then((res) => {
      setdata(res);
    })
    .catch((err) => {
      console.log(err);
    });

  return data;
};

export { GetEmployees };
