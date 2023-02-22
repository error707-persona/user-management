import axios from "axios";

const DeleteUser = (email) => {
  
  axios
    .post(`http://localhost:3001/admin/delete`, {
      email: email,
    })
    .then((res) => {
      
      alert("Deleted user");
    })
    .catch((err) => {
      console.log(err);
    });
};

export { DeleteUser };
