import React from "react";
import MobileLayout from "../../components/atoms/MobileLayout/mobileLayout";
import MChatHeader from "../../components/organisms/mobile/Header/m-chat-header";
import MCreateBox from "../../components/organisms/mobile/m-create-box";
import MCreateFooter from "../../components/organisms/mobile/Footer/m-create-footer";

function MCreate() {
  return (
    <MobileLayout>
      <MChatHeader />
      <MCreateBox />
      <MCreateFooter />
    </MobileLayout>
  );
}

export default MCreate;
