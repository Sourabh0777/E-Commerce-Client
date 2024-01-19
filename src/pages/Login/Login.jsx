import React from "react";
import LoginPageComponent from "../components/LoginPageComponent";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../../redux/Slice/loginUserSlice";

const Login = (props) => {
  const dispatch = useDispatch();

  const loginUserApiRequest = async (email, password, doNotLogout) => {
    const { data } = await axios.post("api/user/login", { email, password, doNotLogout });
    if (data?.userLoggedIn?.doNotLogout) {
      localStorage.setItem("userInfo", JSON.stringify(data.userLoggedIn));
    } else {
      localStorage.setItem("userInfo", JSON.stringify(data.userLoggedIn));
    }
    return data;
  };
  return (
    <LoginPageComponent
      loginUserApiRequest={loginUserApiRequest}
      loginUserAction={loginUserAction}
      dispatch={dispatch}
    />
  );
};

export default Login;
