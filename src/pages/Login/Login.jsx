import axios from "axios"
import React from "react"
import { useDispatch } from "react-redux"
import { loginUserAction } from "../../redux/Slice/loginUserSlice"
import LoginPageComponent from "../components/LoginPageComponent"

const Login = props => {
	const dispatch = useDispatch()

	const loginUserApiRequest = async (email, password, doNotLogout) => {
		const {data} = await axios.post("api/user/login", {email, password, doNotLogout})
		if (data?.userLoggedIn?.doNotLogout) {
			localStorage.setItem("userInfo", JSON.stringify(data.userLoggedIn))
		} else {
			sessionStorage.setItem("userInfo", JSON.stringify(data.userLoggedIn))
		}
		return data
	}
	return (
		<LoginPageComponent
			loginUserApiRequest={loginUserApiRequest}
			loginUserAction={loginUserAction}
			dispatch={dispatch}
		/>
	)
}

export default Login
