import React from "react";
import LoginBox from "../../components/molecules/login-box";
import MChatHeader from "../../components/organisms/mobile/Header/m-chat-header";
import MobileLayout from "../../components/atoms/MobileLayout/mobileLayout";

function MLogin() {
  return (
    <div>
      <MobileLayout>
        <MChatHeader />
        <LoginBox />
      </MobileLayout>
    </div>
  );
}

export default MLogin;
