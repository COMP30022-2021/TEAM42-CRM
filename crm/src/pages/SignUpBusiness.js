import React from "react";
import SignUpBox from "../Components/SignUp/SignUpBox";
import { InfoPanel } from "../Components/Logins/InfoPanel";
import image from "../res/images/background4.jpg";

import { LoginHeader } from "../Components/Logins/LoginHeader";

export default function SignUpBusiness() {
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
      <LoginHeader />
      <SignUpBox />
      <InfoPanel width="50" height="150" />
    </div>
  );
}
