import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {

    // one more way to do this 
    // if(authStatus == true){
    //     navigate("/")
    // }
    // else if(authStatus == false){
    //     navigate("/login")
    // }

    if (authentication && !authStatus) navigate("/login");
    else if (!authentication && authStatus) navigate("/");
    setLoader(false);
  }, [authentication, navigate, authStatus]);

  return loader ? <h1>Loading....</h1> : <>{children}</>
}
