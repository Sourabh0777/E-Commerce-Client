import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UserChatComponent from "./User/UserChatComponent";

const ProtectedRoutesComponent = ({ admin }) => {
  const [isAuth, setIsAuth] = useState(null); // Initially set it to null
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    axios
      .get(`/api/get-token`)
      .then(({ data }) => {
        if (isMounted) {
          if (data.token.isAdmin) {
            setIsAuth("admin");
          } else {
            setIsAuth("user"); // Set "user" for non-admin
          }
        }
      })
      .catch((err) => console.log(err.message))
      .finally(() => {
        if (isMounted) {
          setLoading(false); // Loading state only stops when data is received
        }
      });

    return () => {
      isMounted = false; // Cleanup function
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display loading message until API request completes
  }

  if (isAuth === null) {
    // If no token or user is authenticated
    return <Navigate to="/login" />;
  }

  if (admin) {
    return isAuth === "admin" ? <Outlet /> : <Navigate to="/login" />;
  }

  // For non-admin users, show user chat component and outlet
  return (
    <>
      <UserChatComponent />
      <Outlet />
    </>
  );
};

export default ProtectedRoutesComponent;
