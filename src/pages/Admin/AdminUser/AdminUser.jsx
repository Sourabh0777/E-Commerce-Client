import React from "react";
import UserPageComponent from "../components/UserPageComponent";
import axios from "axios";
const AdminUser = (props) => {
  const fetchUser = async (abCtrl) => {
    const { data } = await axios.get("/api/user", { signal: abCtrl.signal });
    return data;
  };
  const deleteUser = async (id) => {
    const deletedUser = await axios.delete(`/api/user/${id}`);
    return deletedUser;
  };
  return <UserPageComponent fetchUser={fetchUser} deleteUser={deleteUser} />;
};

export default AdminUser;
