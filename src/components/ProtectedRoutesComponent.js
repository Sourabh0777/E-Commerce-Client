import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserChatComponent from "./User/UserChatComponent";
const ProtectedRoutesComponent = ({ admin }) => {
  const [isAuth, setIsAuth] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    axios
      .get(`/api/get-token`)
      .then(({ data }) => {
        if (isMounted && data.token.isAdmin) {
          setIsAuth("admin");
        }
        return isAuth;
      })
      .catch((err) => console.log(err.message))
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (isAuth === undefined) {
    return <Navigate to="/login" />;
  }
  return isAuth && admin && isAuth !== "admin" ? (
    <Navigate to="/login" />
  ) : isAuth && admin ? (
    <Outlet />
  ) : isAuth && !admin ? (
    <>
      <UserChatComponent />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoutesComponent;
