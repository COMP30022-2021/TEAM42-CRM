import React from "react";
import Helmet from "react-helmet";
import { InfoPanel } from "../Components/Logins/InfoPanel";
import image from "../res/images/background4.jpg";

import { LoginBox } from "../Components/Logins/LoginBox";
import { LoginHeader } from "../Components/Logins/LoginHeader";

function Login() {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        width: "100%",
        position: "absolute",
        height: "100%",
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      <Helmet bodyAttributes={{ style: "background-color : #265573" }} />

      <LoginHeader />
      <LoginBox />
      <InfoPanel width="50" height="150" />
    </div>
  );
}

export default Login;
