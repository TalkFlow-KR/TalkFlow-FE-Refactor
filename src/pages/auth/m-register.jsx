import React from "react";
import MobileLayout from "../../components/atoms/MobileLayout/mobileLayout";
import RegisterBox from "../../components/molecules/register-box";
import MChatHeader from "../../components/organisms/mobile/Header/m-chat-header";

function MRegister() {
  return (
    <div>
      <MobileLayout>
        <MChatHeader />
        <RegisterBox />
      </MobileLayout>
    </div>
  );
}

export default MRegister;
