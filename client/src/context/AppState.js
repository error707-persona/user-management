import React, {useState} from "react";
import AppContext from "./AppContext";

const AppState = (props) => {
    const [userEmail, setuserEmail] = useState("");
    const [email, setemail] = useState("");
    const [role, setrole] = useState("");
  return <AppContext.Provider value={{userEmail, setuserEmail, email, setemail, role, setrole}}>{props.children}</AppContext.Provider>;
};

export default AppState;
