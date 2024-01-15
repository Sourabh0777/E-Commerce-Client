import React from "react";
import { Outlet } from "react-router-dom";
// import UserChatComponent from "./UserChatComponent";

const RoutesWithChatComponent = (props) => {
  return (
    <>
      {/* <UserChatComponent />  */}
      <Outlet />
    </>
  );
};

export default RoutesWithChatComponent;
