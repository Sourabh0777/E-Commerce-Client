import React from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginUserAction } from "../../redux/Slice/loginUserSlice"
import axiosInstance from "../../utils/axiosConfig"
import RegisterPageComponent from "../components/RegisterPageComponent"

const Register = props => {
	const dispatch = useDispatch()
  const navigate = useNavigate()

	const registerUserApiRequest = async (name, lastName, email, password) => {
		const {data} = await axiosInstance.post("/user/register", {name, lastName, email, password})
		if (data) {
			if (data && data.success === "User Created") {
				dispatch(loginUserAction(data.userCreated))
				localStorage.setItem("userInfo", JSON.stringify(data.userCreated))
				navigate("/", {replace: true})
			}
			return data
		}
	}
	return (
		<RegisterPageComponent
			registerUserApiRequest={registerUserApiRequest}
			dispatch={dispatch}
			loginUserAction={loginUserAction}
		/>
	)
}

export default Register
