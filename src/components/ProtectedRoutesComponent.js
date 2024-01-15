import React from "react";
import { Navigate, Outlet } from "react-router-dom";
// import UserChatComponent from "./User/UserChatComponent";
const ProtectedRoutesComponent = (props) => {
  let { admin } = props;
  if (admin) {
    let authAdmin = true;
    return authAdmin ? <Outlet /> : <Navigate to="/login" />;
  } else {
    let userAuth = true;
    return userAuth ? (
      <>
        {/* <UserChatComponent /> */}
        <Outlet />
      </>
    ) : (
      <Navigate to="/login" />
    );
  }

};

export default ProtectedRoutesComponent;
