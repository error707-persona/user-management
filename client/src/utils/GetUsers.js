import axios from "axios";
import { useState } from "react";
const GetUsers = () => {
    const [data, setdata] = useState([]);
  axios
    .get(`http://localhost:3001/auth/all`)
    .then((res) => {
      setdata(res);
    })
    .catch((err) => {
      console.log(err);
    });

  return data;
};

export { GetUsers };
