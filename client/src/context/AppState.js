import React, {useState} from "react";
import AppContext from "./AppContext";

const AppState = (props) => {
    const [userEmail, setuserEmail] = useState("");
  return <AppContext.Provider value={{userEmail, setuserEmail}}>{props.children}</AppContext.Provider>;
};

export default AppState;
